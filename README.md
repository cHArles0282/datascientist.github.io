# datascientist.github.io

Telecom and fiber blog, built with Jekyll (Minimal Mistakes) and deployed to GitHub Pages by GitHub Actions.

## How automatic publishing works

- `_queue/` holds the unpublished posts, named `NNN-slug.md`. The lowest number goes out next.
- `.github/workflows/publish-and-deploy.yml` runs every **Tuesday and Thursday at about 08:40 IST**. It moves the next
  queued post into `_posts/` with today's date, commits it, then builds and deploys the site.
- Every push to `master` also rebuilds the site, so edits go live without publishing a new post.
- To publish one right now: GitHub → Actions → "Publish next post and deploy site" → Run workflow.
- To change the schedule, edit the `cron:` line (it is in UTC).

## Editing the queue

- Edit any post in `_queue/` before its turn. Reorder by renaming the number prefix.
- `_queue/IMAGE_MAP.md` lists which posts have Gemini images and which use the plain title card.
  To add an image, put it in `assets/images/posts/` and change the post's `header:` lines.
- Dry run: `python scripts/publish_next.py --dry-run --count 4`

## One-time setup

GitHub → Settings → Pages → Build and deployment → Source: **GitHub Actions**.
