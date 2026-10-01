# Claire’s REx-PN Practice: GitHub Pages comparison

Created for Claire Song. This standalone version includes 10 strategy lessons with tip checks, 10 sets of six original questions, a 60-question timed mock using the same bank, answer rationales, category scores, device-local history, and downloadable result reports.

## Publish using the GitHub website

1. Extract this ZIP on your computer.
2. Sign in to GitHub and create a **public** repository named `rex-pn-practice`. Initialize it with a README.
3. In the repository, choose **Add file → Upload files**.
4. Upload the extracted files, not the ZIP or an enclosing folder. `index.html`, `app.js`, `style.css`, and `bank.json` must be at the top level. Include `.nojekyll` and this README too if shown.
5. Commit the files to the `main` branch.
6. Open **Settings → Pages**. Under Source, choose **Deploy from a branch**. Select **main** and **/(root)**, then **Save**.
7. After publication, open the link GitHub shows. A project site normally uses `https://YOUR-USERNAME.github.io/rex-pn-practice/`.

The files use relative paths, so they work at a GitHub project subpath. Do not rename `bank.json` unless you also update the application.

Official publishing instructions:
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## What this version does and does not save

Scores and unfinished attempts are stored in this browser on this device. Clearing browser data removes them. Shared-device users share the same local history. Download a result report if you need a copy. If browser storage is unavailable, the site displays a warning and retains results only in the current page session.

This version has **no student passwords, instructor login, central database, or class activity log**. It does not connect to or change the existing hosted website or its records. Do not upload student rosters, passwords, credential exports, or class records to this public repository.

`bank.json` includes answer keys and rationales and is public. This is an open study resource, not a secure graded exam.

## Educational limits

The bank contains original draft teaching items with reference links. Review clinical wording, keys, scope, and local policy before classroom use. The eight client-needs labels are represented, but item counts do not reproduce the official blueprint percentages. The mock reuses the same 60 practice items and is fixed-length, not computerized adaptive testing.

The 70% target is an arbitrary instructional benchmark, not a validated readiness estimate or official REx-PN passing standard. Each question earns one point; select-all-that-apply requires an exact match. The 90-minute timer is a practice setting. Unanswered mock items receive zero on timeout.

The reference plan is the revised 2022 REx-PN test plan. Consult the official 2027 plan for examinations on or after January 1, 2027: https://rexpn.com/test-plan.page

Independent educational resource. Not affiliated with or endorsed by NCSBN or BCCNM.

## Testing on your computer

Opening `index.html` directly from your file manager can block loading `bank.json`. Publish to GitHub Pages to test, or serve the folder with a local web server. If Python is installed, run `python -m http.server 8000` in this folder and visit `http://localhost:8000/`.
