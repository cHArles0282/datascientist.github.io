---
title: "Splice Plans and Splice Diagrams in Fiber Design"
excerpt: "A splice plan shows which fiber connects to which at every closure. Learn how splice plans and diagrams are built, read and used in the field."
categories:
  - "OSP design and engineering"
tags:
  - "splice plan"
  - "splice diagram"
  - "fiber splicing"
  - "TIA-598 colour code"
  - "fiber closure"
header:
  image: /assets/images/posts/067-splice-plans-and-splice-diagrams-in-fibe-card.png
  teaser: /assets/images/posts/067-splice-plans-and-splice-diagrams-in-fibe-card.png
  og_image: /assets/images/posts/067-splice-plans-and-splice-diagrams-in-fibe-card.png
queue_number: 67
---

A splicer opens a closure on a warm afternoon. Inside are two cables, a few dozen hair-thin glass strands in coloured tubes, and no room for guesswork. Join the wrong pair and a house three streets away goes dark, or never lights up at all. The only thing standing between the splicer and that mistake is a sheet of paper, or a tablet screen, called the splice plan.

I think of the splice plan as the most important document in the design package, because it is the one the network actually runs on.

## What a splice plan is

A splice plan is a table that lists, for one closure, every fiber that enters, every fiber that leaves, and which ones are joined together. It also records which fibers pass through untouched and which are left dark for the future. A splice diagram is the same information drawn as a picture, with cables as bars, tubes as coloured bands and splices as connecting lines.

Most designers produce both. The splicer works from the table. The reviewer checks the diagram, and the maintenance technician reaches for it years later.

## Counting fibers the standard way

Every fiber in a cable has an address made of its tube number and its position in the tube. Both are identified by colour, and the colour order follows the TIA-598 standard, used in the United States and widely elsewhere.

| Position | Colour | Position | Colour |
|---|---|---|---|
| 1 | Blue | 7 | Red |
| 2 | Orange | 8 | Black |
| 3 | Green | 9 | Yellow |
| 4 | Brown | 10 | Violet |
| 5 | Slate | 11 | Rose |
| 6 | White | 12 | Aqua |

Tubes follow the same order, so fiber 15 in a cable with twelve fibers per tube is tube 2 (orange), fiber 3 (green). Cables with more than twelve tubes repeat the colours with a stripe marking. Ribbon cables, common in high-count feeders in the United States, use the same order across each twelve-fiber ribbon. In India, loose tube cable dominates and the same sequence is standard, though some manufacturers differ, so the plan should always state which code applies.

## What the plan shows at a closure

At a typical distribution closure three things happen. Some fibers are expressed, meaning the tube passes through unopened and continues down the street. Some are spliced straight through, cut and rejoined so the count continues in a new cable. Some are dropped, spliced to a smaller cable that feeds a terminal or a splitter.

A well-made plan lists each incoming fiber by cable, tube and colour, states which tray and slot it lands in, and gives the matching outgoing fiber or a note such as "dark" or "express". Tray numbers matter: a splice is easy to find in a plan and hard to find in a closure with twelve trays and no index.

## Keeping it honest

The plan is only useful if it matches the closure. As-built updates after construction are where this usually breaks down. Fibers get swapped in the field to work around a damaged strand, and the plan is not updated. Years later a technician trusts the document and traces the wrong path.

The fix is simple but unpopular: the splicer marks up the plan on the day, and the designer updates the master before the job is closed.

## Final thoughts

A splice plan is a promise that the fiber in the ground matches the fiber on paper. Keep that promise and every fault becomes a lookup. Break it and every fault becomes a hunt.

Do your field teams return marked-up splice plans, or does the as-built record rely on memory?
