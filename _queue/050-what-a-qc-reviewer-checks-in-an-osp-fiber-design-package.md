---
title: "What a QC Reviewer Checks in an OSP Fiber Design Package"
excerpt: "The checklist a quality reviewer runs on an outside plant fiber design before submission: counts, loss budget, splice diagrams, clearances and permits."
categories:
  - "Testing and quality"
tags:
  - "OSP design QC"
  - "fiber design review"
  - "design package checklist"
  - "FTTx design quality"
  - "splice diagram review"
header:
  image: /assets/images/posts/050-what-a-qc-reviewer-checks-in-an-osp-fibe-card.png
  teaser: /assets/images/posts/050-what-a-qc-reviewer-checks-in-an-osp-fibe-card.png
  og_image: /assets/images/posts/050-what-a-qc-reviewer-checks-in-an-osp-fibe-card.png
queue_number: 50
---

A construction crew stands at the base of a pole with a design print in hand. The print shows a new terminal on this pole, feeding six homes across the street. The pole has no spare space, the homes are actually fed from the next block, and two of the six addresses are an empty lot. The crew calls the office. The office calls the designer. Somewhere, a reviewer's checklist was skipped.

Quality control in outside plant (OSP) design exists because mistakes are cheap on a screen and expensive on a street. A reviewer is the last person who can fix a problem with a mouse instead of a bucket truck.

## What the reviewer is really looking for

A design package usually contains a route map, splice diagrams, a bill of materials (BOM), and supporting notes such as survey photos and permit references. The reviewer's job is not to redesign it. It is to confirm that the documents agree with each other and with the real world, and that light will reach every address the design claims to serve.

## The checklist

1. Counts reconcile. Every address maps to a terminal port, every terminal to a splitter output, and the totals on map, splice sheet and BOM match.
2. Splitter arithmetic. No splitter is oversubscribed, and spare ports follow the operator's rules for growth.
3. Loss budget. The worst-case address, usually the furthest, passes with margin at the lossier wavelength.
4. Splice diagrams. Every cable end goes somewhere, every fiber is accounted for, and colours follow the TIA-598 sequence or the cable datasheet.
5. Slack and closures. Slack loops fit where they are drawn at the cable's bend radius, and closures are accessible.
6. Clearances and capacity. Aerial attachment heights and clearances meet the applicable code, in the United States the National Electrical Safety Code (NESC); underground, duct fill and handhole sizes are checked.
7. Permits and boundaries. Railway, highway and private property crossings are identified, and the design stops at the right boundary.
8. Drawing standards. Titles, revisions, legends, scales and naming follow the required conventions.
9. Field evidence. Survey photos and notes support the design's assumptions, especially pole conditions and existing structures.
10. BOM completeness. Hardware, closures, terminals and consumables are all present in the right quantities.

## The findings that keep coming back

In my experience a handful of errors account for most rejections. Address counts that do not match port counts. A terminal on the wrong side of the road because the aerial photo was misread. A splitter with more outputs assigned than it has. A slack loop that cannot fit in its handhole. A crossing with no permit reference. None of these need deep expertise to catch; they need someone to look.

## Regional differences

The emphasis changes with the build method. In the United States, aerial construction on shared utility poles makes make-ready, clearances and pole loading a large part of the review. Indian builds are more often underground along road verges with municipal permissions, so the reviewer spends longer on duct routes, chamber spacing and permit boundaries. In Australia, much fibre goes into existing pit and pipe, which shifts the focus to pit capacity and duct availability. The principles are identical; the emphasis moves.

## Final thoughts

Good QC is less about expertise than about discipline: the same questions, asked every time, before the package leaves the building. What is the one check that, if you could only keep one, you would never let a design skip?
