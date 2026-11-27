#!/usr/bin/env python3
"""Move the next post from _queue/ into _posts/ with today's date.

Queue files are named NNN-slug.md; the lowest NNN is published first.
Usage: python scripts/publish_next.py [--count N] [--dry-run]
Writes `published=<titles>` to $GITHUB_OUTPUT when run inside GitHub Actions.
"""
import argparse, datetime, os, re, sys
from pathlib import Path
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parent.parent
QUEUE, POSTS = ROOT / "_queue", ROOT / "_posts"
TZ = ZoneInfo(os.environ.get("BLOG_TZ", "Asia/Kolkata"))
NAME_RE = re.compile(r"^(\d{3})-(.+)\.md$")


def queued():
    return sorted(p for p in QUEUE.glob("*.md") if NAME_RE.match(p.name))


def publish(path, now, dry_run):
    slug = NAME_RE.match(path.name).group(2)
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        sys.exit(f"{path.name}: missing front matter")
    # one minute in the past so Jekyll never treats it as a future post
    stamp = (now - datetime.timedelta(minutes=1)).strftime("%Y-%m-%d %H:%M:%S %z")
    text = re.sub(r"(?m)^date:.*\n", "", text)
    text = "---\ndate: " + stamp + "\n" + text[4:]
    title = re.search(r'(?m)^title:\s*"?(.*?)"?\s*$', text).group(1)
    dest = POSTS / f"{now:%Y-%m-%d}-{slug}.md"
    print(f"publish {path.name} -> _posts/{dest.name}")
    if not dry_run:
        POSTS.mkdir(exist_ok=True)
        dest.write_text(text, encoding="utf-8")
        path.unlink()
    return title


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--count", type=int, default=1)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()
    items = queued()
    if not items:
        print("Queue is empty: nothing to publish.")
        return
    now = datetime.datetime.now(TZ)
    titles = [publish(p, now, args.dry_run) for p in items[: args.count]]
    print(f"{len(items) - len(titles)} posts left in the queue.")
    out = os.environ.get("GITHUB_OUTPUT")
    if out and not args.dry_run:
        with open(out, "a") as f:
            f.write("published=" + " | ".join(titles) + "\n")
            f.write(f"remaining={len(items) - len(titles)}\n")


if __name__ == "__main__":
    main()
