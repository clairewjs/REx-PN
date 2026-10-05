// Standalone Cloudflare Worker. Instructor credentials are Cloudflare secrets.
const COOKIE='__Host-claire-pn';
const encoder=new TextEncoder();
class HttpError extends Error{constructor(status,message){super(message);this.status=status}}
const fail=(status,message)=>{throw new HttpError(status,message)};
const uid=()=>crypto.randomUUID();
const hex=b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
const random=n=>hex(crypto.getRandomValues(new Uint8Array(n)));
const digest=async s=>hex(await crypto.subtle.digest('SHA-256',encoder.encode(s)));
async function passwordHash(password,salt){const key=await crypto.subtle.importKey('raw',encoder.encode(password),'PBKDF2',false,['deriveBits']);return hex(await crypto.subtle.deriveBits({name:'PBKDF2',salt:encoder.encode(salt),iterations:100000,hash:'SHA-256'},key,256))}
function safeEqual(a,b){if(a.length!==b.length)return false;let x=0;for(let i=0;i<a.length;i++)x|=a.charCodeAt(i)^b.charCodeAt(i);return x===0}
function json(data,status=200,extra={}){return new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'private, no-store',...securityHeaders,...extra}})}
const securityHeaders={'X-Content-Type-Options':'nosniff','Referrer-Policy':'same-origin','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'",'Permissions-Policy':'camera=(), microphone=(), geolocation=()'};
const db=env=>{if(!env.DB)fail(503,'The class record is temporarily unavailable. Please try again.');return env.DB};
const stmt=(env,sql,...args)=>db(env).prepare(sql).bind(...args);
const get=(env,sql,...args)=>stmt(env,sql,...args).first();
const all=async(env,sql,...args)=>(await stmt(env,sql,...args).all()).results||[];
async function body(request){if(Number(request.headers.get('Content-Length')||0)>65536)fail(413,'Request is too large');const text=await request.text();if(text.length>65536)fail(413,'Request is too large');try{return JSON.parse(text)}catch{fail(400,'Invalid request')}}
function sameOrigin(request){if(request.headers.get('Origin')!==new URL(request.url).origin)fail(403,'Please submit from this website.');if(request.headers.get('Content-Type')?.split(';')[0]!=='application/json')fail(415,'Use JSON requests.')}
async function identity(request,env){const value=(request.headers.get('Cookie')||'').split(';').map(x=>x.trim()).find(x=>x.startsWith(COOKIE+'='))?.slice(COOKIE.length+1);if(!value||!/^[a-f0-9]{64}$/.test(value))return null;const tokenHash=await digest(value);const admin=await get(env,'SELECT * FROM instructor_sessions WHERE token_hash=? AND expires_at>?',tokenHash,Date.now());if(admin&&env.INSTRUCTOR_PASSWORD_HASH&&safeEqual(admin.credential_version,env.INSTRUCTOR_PASSWORD_HASH))return {id:'claire',role:'instructor',name:'Claire Song',username:env.INSTRUCTOR_USERNAME||'claire',tokenHash};const s=await get(env,'SELECT s.*, t.token_hash FROM sessions t JOIN students s ON s.id=t.student_id WHERE t.token_hash=? AND t.expires_at>? AND s.active=1',await digest(value),Date.now());return s?{id:s.id,role:'student',name:s.name,username:s.username,mustChange:!!s.must_change,tokenHash:s.token_hash}:null}
function requireUser(user){if(!user)fail(401,'Please sign in.');if(user.role==='student'&&user.mustChange)fail(403,'Set your own password before practising.');return user}
function requireInstructor(user){if(user?.role!=='instructor')fail(403,'Instructor access is required.')}
async function log(env,studentId,actor,event,detail,id=uid()){await stmt(env,'INSERT OR IGNORE INTO activity (id,student_id,actor,event,detail,created_at) VALUES (?,?,?,?,?,?)',id,studentId,actor,event,detail,Date.now()).run()}
function publicUser(user){if(!user)return null;return {id:user.id,role:user.role,name:user.name,username:user.username,mustChange:!!user.mustChange}}
const keyed=id=>BANK.sets.flatMap(s=>s.questions).find(q=>q.id===id);
function questions(attempt,review=false){return JSON.parse(attempt.question_ids).map(id=>{const q=keyed(id);if(!q)fail(500,'A question is unavailable.');if(review)return q;const {answer,rationale,...safe}=q;return safe})}
function result(attempt){return {id:attempt.id,name:attempt.name,set:attempt.set_number,mock:!!attempt.mock,index:attempt.current_index,questions:questions(attempt,attempt.status!=='started'),answers:JSON.parse(attempt.answers),started:attempt.started_at,deadline:attempt.deadline,finished:attempt.finished_at,correct:attempt.correct,total:attempt.total,percent:attempt.percent,met:attempt.correct/attempt.total>=.7,status:attempt.status}}
function matching(a,b){return [...a].sort((x,y)=>x-y).join(',')===[...b].sort((x,y)=>x-y).join(',')}
function score(ids,answers){return ids.reduce((sum,id,i)=>sum+(matching(answers[i]||[],keyed(id).answer)?1:0),0)}
async function finalize(env,a,status='completed'){if(a.status!=='started')return a;const correct=score(JSON.parse(a.question_ids),JSON.parse(a.answers)),now=Date.now();await db(env).batch([stmt(env,"UPDATE attempts SET status=?,finished_at=?,updated_at=?,correct=?,percent=? WHERE id=? AND status='started'",status,now,now,correct,Math.round(correct/a.total*100),a.id),stmt(env,"INSERT OR IGNORE INTO activity (id,student_id,actor,event,detail,created_at) SELECT ?,student_id,student_id,status,name || ': ' || correct || '/' || total,finished_at FROM attempts WHERE id=? AND status<>'started'",a.id+':finished',a.id)]);return get(env,'SELECT * FROM attempts WHERE id=?',a.id)}
async function expire(env,a){if(a?.status==='started'&&a.current_index>=a.total)return finalize(env,a);if(a?.status==='started'&&a.deadline&&a.deadline<=Date.now())return finalize(env,a,'timed_out');return a}
async function studentAttempts(env,id){const rows=await all(env,'SELECT * FROM attempts WHERE student_id=? ORDER BY started_at ASC',id);const out=[];for(const a of rows)out.push(result(await expire(env,a)));return out}
function shuffled(ids){const out=[...ids];for(let i=out.length-1;i>0;i--){const buf=crypto.getRandomValues(new Uint32Array(1));const j=buf[0]%(i+1);[out[i],out[j]]=[out[j],out[i]]}return out}
function username(value){if(typeof value!=='string'||!/^[a-z0-9][a-z0-9._-]{2,39}$/.test(value.trim().toLowerCase()))fail(400,'Usernames must be 3–40 characters using letters, numbers, dots, underscores, or hyphens.');return value.trim().toLowerCase()}
function nameValue(value){if(typeof value!=='string'||!value.trim()||value.trim().length>100)fail(400,'Enter a name or class identifier, up to 100 characters.');return value.trim()}
function csvCell(value){let s=String(value??'');if(/^[=+\-@\t\r]/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"'}
function csv(rows){return '\uFEFF'+rows.map(r=>r.map(csvCell).join(',')).join('\r\n')}
async function handle(request,env){const url=new URL(request.url),path=url.pathname,method=request.method;
 if(!['GET','POST'].includes(method))return json({error:'Method not allowed'},405);
 if(method==='POST')sameOrigin(request);
 if(path==='/api/instructor/login'&&method==='POST'){
  if(!env.INSTRUCTOR_PASSWORD_HASH||!env.INSTRUCTOR_PASSWORD_SALT)fail(503,'Instructor sign-in has not been configured.');
  const b=await body(request),now=Date.now(),key='instructor-login';
  await stmt(env,'INSERT INTO rate_limits (key,count,reset_at) VALUES (?,1,?) ON CONFLICT(key) DO UPDATE SET count=CASE WHEN reset_at<=? THEN 1 ELSE count+1 END,reset_at=CASE WHEN reset_at<=? THEN ? ELSE reset_at END',key,now+900000,now,now,now+900000).run();
  if((await get(env,'SELECT count FROM rate_limits WHERE key=?',key)).count>5)fail(429,'Too many instructor sign-in attempts. Try again in 15 minutes.');
  const password=typeof b.password==='string'&&b.password.length<=128?b.password:'';
  const hash=await passwordHash(password,env.INSTRUCTOR_PASSWORD_SALT);
  if(b.username!==(env.INSTRUCTOR_USERNAME||'claire')||!safeEqual(hash,env.INSTRUCTOR_PASSWORD_HASH))fail(401,'Username or password was not accepted.');
  const token=random(32);await db(env).batch([stmt(env,'INSERT INTO instructor_sessions (token_hash,expires_at,credential_version) VALUES (?,?,?)',await digest(token),now+8*3600000,env.INSTRUCTOR_PASSWORD_HASH),stmt(env,'DELETE FROM instructor_sessions WHERE expires_at<=?',now),stmt(env,'DELETE FROM rate_limits WHERE key=?',key)]);
  await log(env,null,'claire','instructor_signed_in','Instructor signed in');return json({ok:true},200,{'Set-Cookie':`${COOKIE}=${token}; Path=/; Secure; HttpOnly; SameSite=Strict; Max-Age=28800`});
 }
 if(path==='/api/login'&&method==='POST'){
  const b=await body(request);let un;try{un=username(b.username)}catch{un='invalid'}const password=typeof b.password==='string'&&b.password.length<=128?b.password:'';const ip=request.headers.get('CF-Connecting-IP')||'unknown',rateKey=await digest('login:'+ip),now=Date.now();
  await stmt(env,'INSERT INTO rate_limits (key,count,reset_at) VALUES (?,1,?) ON CONFLICT(key) DO UPDATE SET count=CASE WHEN reset_at<=? THEN 1 ELSE count+1 END,reset_at=CASE WHEN reset_at<=? THEN ? ELSE reset_at END',rateKey,now+900000,now,now,now+900000).run();const rate=await get(env,'SELECT count FROM rate_limits WHERE key=?',rateKey);if(rate.count>200)fail(429,'Too many sign-in attempts. Try again in 15 minutes.');
  const s=await get(env,'SELECT * FROM students WHERE username=?',un);const salt=s?.salt||'unknown-user-fixed-salt';const hash=await passwordHash(password,salt);
  if(!s||!s.active||s.locked_until>now||!safeEqual(hash,s.password_hash)){
   if(s&&s.active&&s.locked_until<=now)await stmt(env,'UPDATE students SET failures=failures+1,locked_until=CASE WHEN failures+1>=5 THEN ? ELSE 0 END WHERE id=?',now+900000,s.id).run();
   fail(401,'Username or password was not accepted. Repeated unsuccessful attempts are temporarily locked.');
  }
  const token=random(32),hashToken=await digest(token);await db(env).batch([stmt(env,'INSERT INTO sessions (token_hash,student_id,expires_at) VALUES (?,?,?)',hashToken,s.id,now+8*3600000),stmt(env,'UPDATE students SET last_login=?,failures=0,locked_until=0 WHERE id=?',now,s.id),stmt(env,'DELETE FROM sessions WHERE expires_at<=?',now),stmt(env,'DELETE FROM rate_limits WHERE reset_at<=?',now)]);
  await log(env,s.id,s.id,'signed_in','Student signed in');return json({user:{id:s.id,role:'student',name:s.name,username:s.username,mustChange:!!s.must_change}},200,{'Set-Cookie':`${COOKIE}=${token}; Path=/; Secure; HttpOnly; SameSite=Strict; Max-Age=28800`});
 }
 const user=await identity(request,env);
 if(path==='/api/me')return json({user:publicUser(user)});
 if(path==='/api/logout'&&method==='POST'){if(user?.tokenHash){await stmt(env,user.role==='instructor'?'DELETE FROM instructor_sessions WHERE token_hash=?':'DELETE FROM sessions WHERE token_hash=?',user.tokenHash).run();await log(env,user.role==='instructor'?null:user.id,user.id,'signed_out','Signed out')}return json({ok:true},200,{'Set-Cookie':`${COOKIE}=; Path=/; Secure; HttpOnly; SameSite=Strict; Max-Age=0`})}
 if(path==='/api/password'&&method==='POST'){
  if(user?.role!=='student')fail(401,'Student sign-in is required');const b=await body(request);if(typeof b.password!=='string'||b.password.length<12||b.password.length>128)fail(400,'Use a password between 12 and 128 characters.');const row=await get(env,'SELECT password_hash,salt FROM students WHERE id=?',user.id);if(safeEqual(await passwordHash(b.password,row.salt),row.password_hash))fail(400,'Choose a new password different from your temporary password.');
  const salt=random(16),hash=await passwordHash(b.password,salt);await db(env).batch([stmt(env,'UPDATE students SET password_hash=?,salt=?,must_change=0,failures=0,locked_until=0 WHERE id=?',hash,salt,user.id),stmt(env,'DELETE FROM sessions WHERE student_id=? AND token_hash<>?',user.id,user.tokenHash)]);await log(env,user.id,user.id,'password_changed','Student changed their password');return json({ok:true});
 }
 if(path.startsWith('/api/admin')){
  requireInstructor(user);
  if(path==='/api/admin/bank')return json(BANK,200,{'Content-Disposition':'attachment; filename="Claire-REx-PN-question-bank.json"'});
  if(path==='/api/admin/overview'){
   // Expired mocks are reconciled when an instructor loads the dashboard.
   for(const a of await all(env,"SELECT * FROM attempts WHERE status='started' AND deadline IS NOT NULL AND deadline<=?",Date.now()))await expire(env,a);
   const students=await all(env,`SELECT s.id,s.username,s.name,s.active,s.must_change,s.created_at,s.last_login,COUNT(CASE WHEN a.status<>'started' THEN 1 END) AS completed,COUNT(CASE WHEN a.status='started' THEN 1 END) AS in_progress,COUNT(DISTINCT CASE WHEN a.status<>'started' AND a.set_number IS NOT NULL THEN a.set_number END) AS sets_done,MAX(CASE WHEN a.mock=1 AND a.status<>'started' THEN a.percent END) AS mock_best FROM students s LEFT JOIN attempts a ON a.student_id=s.id GROUP BY s.id ORDER BY s.created_at DESC`);
   const attempts=await all(env,'SELECT a.id,a.student_id,a.name,a.set_number,a.mock,a.status,a.started_at,a.updated_at,a.finished_at,a.correct,a.total,a.percent,s.name AS student_name,s.username FROM attempts a JOIN students s ON s.id=a.student_id ORDER BY a.started_at DESC LIMIT 500');
   const activity=await all(env,'SELECT l.*,s.name AS student_name,s.username FROM activity l LEFT JOIN students s ON s.id=l.student_id ORDER BY l.created_at DESC LIMIT 200');return json({students,attempts,activity});
  }
  if(path==='/api/admin/students'&&method==='POST'){
   const b=await body(request);if(!Array.isArray(b.students)||b.students.length<1||b.students.length>50)fail(400,'Create between 1 and 50 students at once.');
   const input=b.students.map(s=>({name:nameValue(s.name),username:username(s.username)}));if(new Set(input.map(s=>s.username)).size!==input.length)fail(400,'The list contains duplicate usernames.');for(const s of input)if(await get(env,'SELECT id FROM students WHERE username=?',s.username))fail(409,`Username ${s.username} already exists. No accounts were created.`);
   const rows=[];for(const s of input){const salt=random(16),password='PN-'+random(9);rows.push({...s,id:uid(),salt,password,hash:await passwordHash(password,salt)})}
   const now=Date.now();await db(env).batch(rows.flatMap(s=>[stmt(env,'INSERT INTO students (id,username,name,password_hash,salt,must_change,active,created_at) VALUES (?,?,?,?,?,1,1,?)',s.id,s.username,s.name,s.hash,s.salt,now),stmt(env,'INSERT INTO activity (id,student_id,actor,event,detail,created_at) VALUES (?,?,?,?,?,?)',uid(),s.id,user.id,'account_created','Instructor created student account',now)]));return json({credentials:rows.map(({id,name,username,password})=>({id,name,username,password}))},201);
  }
  const match=path.match(/^\/api\/admin\/students\/([^/]+)\/(reset|access)$/);
  if(match&&method==='POST'){const id=match[1],s=await get(env,'SELECT * FROM students WHERE id=?',id);if(!s)fail(404,'Student not found');
   if(match[2]==='reset'){const salt=random(16),password='PN-'+random(9),hash=await passwordHash(password,salt);await db(env).batch([stmt(env,'UPDATE students SET password_hash=?,salt=?,must_change=1,failures=0,locked_until=0 WHERE id=?',hash,salt,id),stmt(env,'DELETE FROM sessions WHERE student_id=?',id)]);await log(env,id,user.id,'password_reset','Instructor reset password and ended existing sessions');return json({credentials:[{id,name:s.name,username:s.username,password}]})}
   const b=await body(request);if(typeof b.active!=='boolean')fail(400,'Specify whether access is enabled');await db(env).batch([stmt(env,'UPDATE students SET active=? WHERE id=?',b.active?1:0,id),stmt(env,'DELETE FROM sessions WHERE student_id=?',id)]);await log(env,id,user.id,b.active?'access_enabled':'access_disabled','Instructor changed student access');return json({ok:true});
  }
  const detail=path.match(/^\/api\/admin\/attempts\/([^/]+)$/);if(detail){const a=await get(env,'SELECT * FROM attempts WHERE id=?',detail[1]);if(!a)fail(404,'Attempt not found');return json({attempt:result(await expire(env,a))})}
  if(path==='/api/admin/export'){
   const type=url.searchParams.get('type')||'attempts';let rows;
   if(type==='activity'){const list=await all(env,'SELECT l.*,s.name AS student_name,s.username FROM activity l LEFT JOIN students s ON s.id=l.student_id ORDER BY l.created_at ASC');rows=[['Timestamp (UTC)','Student / identifier','Username','Event','Details'],...list.map(l=>[new Date(l.created_at).toISOString(),l.student_name||'Instructor',l.username||'',l.event,l.detail])]}
   else if(type==='students'){const list=await all(env,"SELECT s.name,s.username,s.active,s.created_at,s.last_login,COUNT(DISTINCT CASE WHEN a.status<>'started' AND a.set_number IS NOT NULL THEN a.set_number END) AS sets_done,COUNT(CASE WHEN a.status<>'started' THEN 1 END) AS completed FROM students s LEFT JOIN attempts a ON a.student_id=s.id GROUP BY s.id ORDER BY s.name");rows=[['Student / identifier','Username','Access enabled','Created (UTC)','Last sign-in (UTC)','Sets completed / 10','Completed attempts'],...list.map(s=>[s.name,s.username,s.active?'Yes':'No',new Date(s.created_at).toISOString(),s.last_login?new Date(s.last_login).toISOString():'Never',s.sets_done,s.completed])]}
   else if(type==='attempts'){const list=await all(env,'SELECT a.*,s.name AS student_name,s.username FROM attempts a JOIN students s ON s.id=a.student_id ORDER BY a.started_at ASC');rows=[['Student / identifier','Username','Attempt','Status','Started (UTC)','Last answer saved (UTC)','Finished (UTC)','Correct','Total','Score (%)','Practice target'],...list.map(a=>[a.student_name,a.username,a.name,a.status,new Date(a.started_at).toISOString(),new Date(a.updated_at).toISOString(),a.finished_at?new Date(a.finished_at).toISOString():'',a.correct??'',a.total,a.percent??'',a.correct!==null?(a.correct/a.total>=.7?'Met':'Not met'):''])]}
   else fail(400,'Unknown export');return new Response(csv(rows),{headers:{...securityHeaders,'Content-Type':'text/csv; charset=utf-8','Cache-Control':'private, no-store','Content-Disposition':`attachment; filename="Claire-REx-PN-${type}-${new Date().toISOString().slice(0,10)}.csv"`}});
  }
  fail(404,'Instructor action not found');
 }
 if(path==='/api/bank'){requireUser(user);return json({sources:BANK.sources,sets:BANK.sets.map(s=>({...s,questions:s.questions.map(({answer,rationale,...q})=>q)}))})}
 if(path==='/api/attempts'&&method==='GET'){requireUser(user);if(user.role!=='student')return json({attempts:[]});return json({attempts:await studentAttempts(env,user.id)})}
 if(path==='/api/attempts'&&method==='POST'){
  requireUser(user);if(user.role!=='student')fail(403,'Use a student account to record a practice attempt.');const b=await body(request);const prior=await get(env,"SELECT * FROM attempts WHERE student_id=? AND status='started' ORDER BY started_at DESC LIMIT 1",user.id);if(prior&&(await expire(env,prior)).status==='started')return json({attempt:result(prior),resumed:true});
  let ids,name,setNumber=null,mock=false;if(b.mock===true){ids=shuffled(BANK.sets.flatMap(s=>s.questions.map(q=>q.id)));name='60-question mock';mock=true}else if(Number.isInteger(b.set)&&b.set>=0&&b.set<10){setNumber=b.set;const s=BANK.sets[b.set];ids=s.questions.map(q=>q.id);name=`Set ${b.set+1}: ${s.title}`}else fail(400,'Choose a valid practice set or mock');
  const id=uid(),now=Date.now();await db(env).batch([stmt(env,'INSERT INTO attempts (id,student_id,name,set_number,mock,question_ids,answers,current_index,status,started_at,updated_at,deadline,total) VALUES (?,?,?,?,?,?,?,0,\'started\',?,?,?,?)',id,user.id,name,setNumber,mock?1:0,JSON.stringify(ids),'[]',now,now,mock?now+5400000:null,ids.length),stmt(env,'INSERT INTO activity (id,student_id,actor,event,detail,created_at) VALUES (?,?,?,?,?,?)',id+':started',user.id,user.id,'attempt_started',name,now)]);return json({attempt:result(await get(env,'SELECT * FROM attempts WHERE id=?',id))},201);
 }
 const answerMatch=path.match(/^\/api\/attempts\/([^/]+)\/(answer|status)$/);
 if(answerMatch){requireUser(user);let a=await get(env,'SELECT * FROM attempts WHERE id=? AND student_id=?',answerMatch[1],user.id);if(!a)fail(404,'Attempt not found');a=await expire(env,a);if(answerMatch[2]==='status')return json({attempt:result(a)});if(method!=='POST')fail(405,'Submit an answer with POST');if(a.status!=='started')return json({attempt:result(a)});
  const b=await body(request),ids=JSON.parse(a.question_ids),answers=JSON.parse(a.answers);if(!Number.isInteger(b.index)||b.index<0||b.index>=ids.length)fail(400,'Invalid question index');const q=keyed(ids[b.index]);if(!Array.isArray(b.answer)||!b.answer.length||b.answer.some(i=>!Number.isInteger(i)||i<0||i>=q.options.length)||new Set(b.answer).size!==b.answer.length||(q.type==='single'&&b.answer.length!==1))fail(400,'Choose a valid answer');
  if(b.index<a.current_index){if(matching(b.answer,answers[b.index]||[]))return json({attempt:result(a)});fail(409,'This answer has already been submitted and locked.')}if(b.index!==a.current_index)fail(409,'Refresh your attempt before continuing.');answers[b.index]=b.answer;
  const updated=await stmt(env,"UPDATE attempts SET answers=?,current_index=current_index+1,updated_at=? WHERE id=? AND current_index=? AND status='started'",JSON.stringify(answers),Date.now(),a.id,b.index).run();if(!updated.meta?.changes)fail(409,'The attempt changed. Reload it before continuing.');a=await get(env,'SELECT * FROM attempts WHERE id=?',a.id);if(a.current_index===a.total)a=await finalize(env,a);return json({attempt:result(a)});
 }
 if(path==='/api/tip'&&method==='POST'){requireUser(user);if(user.role!=='student')fail(403,'Student access is required');const b=await body(request);if(!Number.isInteger(b.lesson)||b.lesson<0||b.lesson>9||!Number.isInteger(b.answer)||b.answer<0||b.answer>3)fail(400,'Invalid tip response');const ok=b.answer===0;await log(env,user.id,user.id,'tip_completed',`Lesson ${b.lesson+1}: ${ok?'correct':'review needed'}`);return json({correct:ok})}
 if(path.startsWith('/api/'))fail(404,'Action not found');
 if(path==='/bank.json')fail(403,'Question keys are available only through completed reviews or the instructor account.');
 const asset=ASSETS[path==='/'||path==='/instructor'?'/index.html':path];if(!asset)fail(404,'Page not found');return new Response(asset.body,{headers:{...securityHeaders,'Content-Type':asset.type,'Cache-Control':'no-cache'}});
}
export default {async fetch(request,env){try{return await handle(request,env)}catch(e){if(!(e instanceof HttpError))console.error('Class record request failed',{path:new URL(request.url).pathname,message:e.message});return json({error:e instanceof HttpError?e.message:'The class record could not be loaded or saved. Your current selection is unchanged. Please try again.'},e.status||503)}}};
