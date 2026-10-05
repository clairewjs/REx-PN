import core from './core.js';
import queries from './queries.json' with { type: 'json' };
const PROJECT=Deno.env.get('SUPABASE_URL');
const SERVICE=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
const ORIGIN='https://clairewjs.github.io';
async function remote(path,options={}){const r=await fetch(PROJECT+path,{...options,headers:{apikey:SERVICE,Authorization:'Bearer '+SERVICE,'Content-Type':'application/json',...options.headers}});const data=await r.json();if(!r.ok)throw Error('Database request failed');return data}
class Query{constructor(sql,args=[]){this.sql=sql;this.args=args}bind(...args){return new Query(this.sql,args)}entry(){const key=queries.indexOf(this.sql);if(key<0)throw Error('Unsupported database query');return {key,args:this.args}}async all(){return (await batch([this]))[0]}async first(){return (await this.all()).results[0]||null}async run(){return (await batch([this]))[0]}}
async function batch(items){return remote('/rest/v1/rpc/rexpn_batch',{method:'POST',body:JSON.stringify({items:items.map(q=>q.entry())})})}
Deno.serve(async req=>{
 const origin=req.headers.get('Origin');const cors={'Access-Control-Allow-Origin':ORIGIN,'Access-Control-Allow-Headers':'authorization,content-type,x-rex-session','Access-Control-Allow-Methods':'GET,POST,OPTIONS','Vary':'Origin','Cache-Control':'no-store'};
 if(origin&&origin!==ORIGIN)return Response.json({error:'Use the REx-PN website.'},{status:403});
 if(req.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
 try{
  const env={DB:{prepare:s=>new Query(s),batch}};
  const bearer=req.headers.get('Authorization');
  if(bearer){const r=await fetch(PROJECT+'/auth/v1/user',{headers:{apikey:SERVICE,Authorization:bearer}});if(r.ok){const u=await r.json();const p=await remote('/rest/v1/profiles?id=eq.'+u.id+'&select=id,role,display_name');if(p[0]?.role==='instructor')env.instructorUser={id:u.id,role:'instructor',name:p[0].display_name,username:u.email};}}
  const path=new URL(req.url).pathname.replace(/^.*\/rexpn-api/,'');if(!path.startsWith('/api/'))return Response.json({error:'Not found'},{status:404,headers:cors});
  const h=new Headers(req.headers);h.delete('cookie');const token=req.headers.get('X-Rex-Session');if(token&&/^[a-f0-9]{64}$/.test(token))h.set('Cookie','__Host-claire-pn='+token);h.set('Origin','https://rexpn.internal');h.set('CF-Connecting-IP',req.headers.get('x-forwarded-for')?.split(',')[0]||'unknown');
  const r=await core.fetch(new Request('https://rexpn.internal'+path+new URL(req.url).search,{method:req.method,headers:h,...(req.method==='POST'?{body:await req.text()}:{})}),env);
  const headers=new Headers(r.headers);Object.entries(cors).forEach(([k,v])=>headers.set(k,v));const cookie=headers.get('Set-Cookie');headers.delete('Set-Cookie');
  if(path==='/api/login'&&r.ok&&cookie){const d=await r.json();d.sessionToken=cookie.match(/__Host-claire-pn=([a-f0-9]+)/)[1];return Response.json(d,{status:r.status,headers});}
  return new Response(r.body,{status:r.status,headers});
 }catch{return Response.json({error:'The class record is temporarily unavailable.'},{status:503,headers:cors})}
});
