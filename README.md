# datascientist.github.io

Telecom and fiber blog, built with Jekyll (Minimal Mistakes) and deployed to GitHub Pages by GitHub Actions.

## How automatic publishing works

- `_queue/` holds the unpublished posts, named `NNN-slug.md`. The lowest number goes out next.
- `.github/workflows/publish-and-deploy.yml` runs **every day at about 08:40 IST** (100 posts = 100 days). It moves the next
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

## Instagram carousels (@muyarchi_edu)

- `_carousels/NNN.json` holds the slide copy and caption for post NNN (cover, stake, one idea per slide, recap, CTA).
- `node scripts/render_carousel.js 012` renders 1080x1350 JPEG slides plus `caption.txt` into `_site_carousels/012/`.
- Automatic posting to Instagram is not wired up yet: it needs a Business/Creator account linked to a Facebook Page.
