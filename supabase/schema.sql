create schema rexpn;
set search_path=rexpn,pg_catalog;
CREATE TABLE students (
	id text PRIMARY KEY NOT NULL,
	username text NOT NULL,
	name text NOT NULL,
	password_hash text NOT NULL,
	salt text NOT NULL,
	must_change bigint DEFAULT 1 NOT NULL,
	active bigint DEFAULT 1 NOT NULL,
	created_at bigint NOT NULL,
	last_login bigint,
	failures bigint DEFAULT 0 NOT NULL,
	locked_until bigint DEFAULT 0 NOT NULL
);


CREATE TABLE activity (
	id text PRIMARY KEY NOT NULL,
	student_id text,
	actor text NOT NULL,
	event text NOT NULL,
	detail text NOT NULL,
	created_at bigint NOT NULL,
	FOREIGN KEY (student_id) REFERENCES students(id) ON UPDATE no action ON DELETE no action
);


CREATE INDEX activity_created ON activity (created_at);

CREATE TABLE attempts (
	id text PRIMARY KEY NOT NULL,
	student_id text NOT NULL,
	name text NOT NULL,
	set_number bigint,
	mock bigint NOT NULL,
	question_ids text NOT NULL,
	answers text DEFAULT '[]' NOT NULL,
	current_index bigint DEFAULT 0 NOT NULL,
	status text DEFAULT 'started' NOT NULL,
	started_at bigint NOT NULL,
	updated_at bigint NOT NULL,
	deadline bigint,
	finished_at bigint,
	correct bigint,
	total bigint NOT NULL,
	percent bigint,
	FOREIGN KEY (student_id) REFERENCES students(id) ON UPDATE no action ON DELETE no action
);


CREATE INDEX attempts_student_started ON attempts (student_id,started_at);

CREATE TABLE rate_limits (
	key text PRIMARY KEY NOT NULL,
	count bigint NOT NULL,
	reset_at bigint NOT NULL
);


CREATE TABLE sessions (
	token_hash text PRIMARY KEY NOT NULL,
	student_id text NOT NULL,
	expires_at bigint NOT NULL,
	FOREIGN KEY (student_id) REFERENCES students(id) ON UPDATE no action ON DELETE no action
);


CREATE INDEX sessions_student ON sessions (student_id);

CREATE UNIQUE INDEX students_username ON students (username);
CREATE UNIQUE INDEX attempts_one_active_per_student ON attempts (student_id) WHERE attempts.status = 'started';
alter table rexpn.students enable row level security;
revoke all on rexpn.students from public,anon,authenticated;
grant all on rexpn.students to service_role;
alter table rexpn.activity enable row level security;
revoke all on rexpn.activity from public,anon,authenticated;
grant all on rexpn.activity to service_role;
alter table rexpn.attempts enable row level security;
revoke all on rexpn.attempts from public,anon,authenticated;
grant all on rexpn.attempts to service_role;
alter table rexpn.rate_limits enable row level security;
revoke all on rexpn.rate_limits from public,anon,authenticated;
grant all on rexpn.rate_limits to service_role;
alter table rexpn.sessions enable row level security;
revoke all on rexpn.sessions from public,anon,authenticated;
grant all on rexpn.sessions to service_role;
CREATE TABLE rexpn.instructor_sessions (token_hash text primary key, expires_at bigint not null, credential_version text not null); ALTER TABLE rexpn.instructor_sessions ENABLE ROW LEVEL SECURITY; REVOKE ALL ON rexpn.instructor_sessions FROM public,anon,authenticated; GRANT ALL ON rexpn.instructor_sessions TO service_role;
grant usage on schema rexpn to service_role;
create function public.rexpn_batch(items jsonb) returns jsonb language plpgsql security invoker set search_path=rexpn,pg_catalog as $fn$
declare item jsonb; statements jsonb := '["SELECT * FROM instructor_sessions WHERE token_hash=? AND expires_at>?","SELECT s.*, t.token_hash FROM sessions t JOIN students s ON s.id=t.student_id WHERE t.token_hash=? AND t.expires_at>? AND s.active=1","INSERT INTO activity (id,student_id,actor,event,detail,created_at) VALUES (?,?,?,?,?,?) ON CONFLICT DO NOTHING","UPDATE attempts SET status=?,finished_at=?,updated_at=?,correct=?,percent=? WHERE id=? AND status=''started''","INSERT INTO activity (id,student_id,actor,event,detail,created_at) SELECT ?,student_id,student_id,status,name || '': '' || correct || ''/'' || total,finished_at FROM attempts WHERE id=? AND status<>''started'' ON CONFLICT DO NOTHING","SELECT * FROM attempts WHERE id=?","SELECT * FROM attempts WHERE student_id=? ORDER BY started_at ASC","INSERT INTO rate_limits (key,count,reset_at) VALUES (?,1,?) ON CONFLICT(key) DO UPDATE SET count=CASE WHEN rate_limits.reset_at<=? THEN 1 ELSE rate_limits.count+1 END,reset_at=CASE WHEN rate_limits.reset_at<=? THEN ? ELSE rate_limits.reset_at END","SELECT count FROM rate_limits WHERE key=?","SELECT * FROM students WHERE username=?","UPDATE students SET failures=failures+1,locked_until=CASE WHEN failures+1>=5 THEN ? ELSE 0 END WHERE id=?","INSERT INTO sessions (token_hash,student_id,expires_at) VALUES (?,?,?)","UPDATE students SET last_login=?,failures=0,locked_until=0 WHERE id=?","DELETE FROM sessions WHERE expires_at<=?","DELETE FROM rate_limits WHERE reset_at<=?","DELETE FROM instructor_sessions WHERE token_hash=?","DELETE FROM sessions WHERE token_hash=?","SELECT password_hash,salt FROM students WHERE id=?","UPDATE students SET password_hash=?,salt=?,must_change=0,failures=0,locked_until=0 WHERE id=?","DELETE FROM sessions WHERE student_id=? AND token_hash<>?","SELECT * FROM attempts WHERE status=''started'' AND deadline IS NOT NULL AND deadline<=?","SELECT s.id,s.username,s.name,s.active,s.must_change,s.created_at,s.last_login,COUNT(CASE WHEN a.status<>''started'' THEN 1 END) AS completed,COUNT(CASE WHEN a.status=''started'' THEN 1 END) AS in_progress,COUNT(DISTINCT CASE WHEN a.status<>''started'' AND a.set_number IS NOT NULL THEN a.set_number END) AS sets_done,MAX(CASE WHEN a.mock=1 AND a.status<>''started'' THEN a.percent END) AS mock_best FROM students s LEFT JOIN attempts a ON a.student_id=s.id GROUP BY s.id ORDER BY s.created_at DESC","SELECT a.id,a.student_id,a.name,a.set_number,a.mock,a.status,a.started_at,a.updated_at,a.finished_at,a.correct,a.total,a.percent,s.name AS student_name,s.username FROM attempts a JOIN students s ON s.id=a.student_id ORDER BY a.started_at DESC LIMIT 500","SELECT l.*,s.name AS student_name,s.username FROM activity l LEFT JOIN students s ON s.id=l.student_id ORDER BY l.created_at DESC LIMIT 200","SELECT id FROM students WHERE username=?","INSERT INTO students (id,username,name,password_hash,salt,must_change,active,created_at) VALUES (?,?,?,?,?,1,1,?)","INSERT INTO activity (id,student_id,actor,event,detail,created_at) VALUES (?,?,?,?,?,?)","SELECT * FROM students WHERE id=?","UPDATE students SET password_hash=?,salt=?,must_change=1,failures=0,locked_until=0 WHERE id=?","DELETE FROM sessions WHERE student_id=?","UPDATE students SET active=? WHERE id=?","SELECT l.*,s.name AS student_name,s.username FROM activity l LEFT JOIN students s ON s.id=l.student_id ORDER BY l.created_at ASC","SELECT s.name,s.username,s.active,s.created_at,s.last_login,COUNT(DISTINCT CASE WHEN a.status<>''started'' AND a.set_number IS NOT NULL THEN a.set_number END) AS sets_done,COUNT(CASE WHEN a.status<>''started'' THEN 1 END) AS completed FROM students s LEFT JOIN attempts a ON a.student_id=s.id GROUP BY s.id ORDER BY s.name","SELECT a.*,s.name AS student_name,s.username FROM attempts a JOIN students s ON s.id=a.student_id ORDER BY a.started_at ASC","SELECT * FROM attempts WHERE student_id=? AND status=''started'' ORDER BY started_at DESC LIMIT 1","INSERT INTO attempts (id,student_id,name,set_number,mock,question_ids,answers,current_index,status,started_at,updated_at,deadline,total) VALUES (?,?,?,?,?,?,?,0,''started'',?,?,?,?)","SELECT * FROM attempts WHERE id=? AND student_id=?","UPDATE attempts SET answers=?,current_index=current_index+1,updated_at=? WHERE id=? AND current_index=? AND status=''started''"]'::jsonb; statement text; args jsonb; segments text[]; rendered text; i integer; rows jsonb; changes bigint; output jsonb:='[]';
begin
 if current_user <> 'service_role' then raise exception 'Not authorized'; end if;
 if jsonb_typeof(items)<>'array' or jsonb_array_length(items)>150 then raise exception 'Invalid batch'; end if;
 for item in select value from jsonb_array_elements(items) loop
  statement:=statements->>((item->>'key')::integer); args:=item->'args';
  if statement is null or jsonb_typeof(args)<>'array' then raise exception 'Invalid query'; end if;
  segments:=string_to_array(statement,'?');
  if cardinality(segments)-1 <> jsonb_array_length(args) then raise exception 'Invalid arguments'; end if;
  rendered:=segments[1];
  for i in 0..jsonb_array_length(args)-1 loop rendered:=rendered||quote_nullable(args->>i)||segments[i+2]; end loop;
  if statement like 'SELECT %' then
   execute 'SELECT coalesce(jsonb_agg(to_jsonb(r)),''[]''::jsonb) FROM ('||rendered||') r' into rows;
   output:=output||jsonb_build_array(jsonb_build_object('results',rows));
  else
   execute rendered; get diagnostics changes=row_count;
   output:=output||jsonb_build_array(jsonb_build_object('meta',jsonb_build_object('changes',changes)));
  end if;
 end loop; return output;
end; $fn$;
revoke all on function public.rexpn_batch(jsonb) from public,anon,authenticated;
grant execute on function public.rexpn_batch(jsonb) to service_role;
