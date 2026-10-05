# Claire’s REx-PN Practice

The website now uses **GitHub Pages + Supabase**, following the case study website’s hosting approach. Cloudflare setup is not required for this version.

- Student website: https://clairewjs.github.io/REx-PN/
- Instructor workspace: https://clairewjs.github.io/REx-PN/#instructor
- Instructor sign-in: use your existing case study instructor **email and password**.
- In Instructor log, create student usernames. Temporary passwords are generated and shown once; share them privately. Students must change them on first sign-in.
- Ten practice sets, 60-question timed mock, saved answers, server scoring, rationales after completion, and downloadable student/attempt/activity CSV logs.

## Backend

The connected Supabase project is `lpn-clinical-lab` in Canada Central. REx-PN uses its own non-exposed `rexpn` schema and `rexpn-api` Edge Function. Case study records and profiles remain separate. The instructor uses existing Supabase Auth and a server-verified instructor profile. REx-PN students use assigned username/password sessions implemented in the Edge Function, not Supabase Auth email accounts. Student credentials use salted PBKDF2; session token hashes are stored server-side, and browser session tokens are held in sessionStorage.

The browser contains only public configuration. No server API keys, student credentials, or student records are in GitHub. Since this repository is public, educational answer keys are visible in source. This remains a study resource rather than a confidential examination bank.

The SQL batch function supports only a fixed server-controlled query list. Browser roles have no permission to execute it or access REx-PN tables. Server authorization checks enforce ownership, account status, password setup and instructor access. All REx-PN tables have RLS enabled without client policies, intentionally denying direct browser access. Service access is limited to the Edge Function.

## Existing records

This is a new REx-PN class database. Previous student accounts and records from the original hosted site are not migrated. The original website remains available. Export its logs before transitioning students; never upload those logs to GitHub. Case study student accounts are not automatically REx-PN accounts.

## Maintenance

GitHub Pages serves the repository root. Changes to the frontend deploy through the repository’s existing Pages configuration. Backend changes need a separate Supabase Edge Function deployment. Source: `supabase/functions/rexpn-api/`. Database schema: `supabase/schema.sql`, provided for documentation/new installations only. **Do not rerun it on the configured project**. It was applied through tracked Supabase migrations.

The earlier Cloudflare implementation remains in `full-site/` as an alternative and is not used by the root website.

## Verification

Live Supabase checks passed for assigned login, first-login password replacement, hidden answer keys in student API responses, six saved answers, a server-calculated 6/6 score, persistence, cross-student access rejection, denied instructor access for students, origin checks and logout. Dashboard and CSV database queries passed. Temporary test accounts and their records were removed. Frontend sign-in and password pages passed simulated DOM render checks. A real instructor browser sign-in was not performed; no instructor password was requested or used.

Security advisor information about RLS tables having no policies is intentional for server-only storage. Supabase Auth’s existing leaked-password protection setting was not changed.

## Educational limits

Original draft teaching materials: ten lessons, ten six-question sets and a 60-question mock that reuses the practice bank. Faculty review is needed before classroom use. The 70% practice benchmark is not an official passing score or a validated readiness estimate. Independent resource, not endorsed by NCSBN or BCCNM.
