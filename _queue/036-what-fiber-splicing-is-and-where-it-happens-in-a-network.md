---
title: "What Fiber Splicing Is and Where It Happens in a Network"
excerpt: "An introduction to fiber splicing, why a network needs so many joints, and the places from exchange to home where splicers do their work."
categories:
  - "Fiber cable and splicing"
tags:
  - "fiber splicing"
  - "fusion splicing"
  - "splice point"
  - "splice closure"
  - "FTTH network splicing"
header:
  image: /assets/images/posts/036-what-fiber-splicing-is-and-where-it-happ-card.png
  teaser: /assets/images/posts/036-what-fiber-splicing-is-and-where-it-happ-card.png
  og_image: /assets/images/posts/036-what-fiber-splicing-is-and-where-it-happ-card.png
queue_number: 36
---

Park on any street where a fiber network is going in and you will see the same van again and again. It sits beside a cabinet or an open pit, side door open, a small bench inside, and a technician hunched over a box the size of a lunch tin with a screen on top. That box is a fusion splicer, and its work turns kilometers of cable into a network.

In my experience, splicing gets less attention in design reviews than route or cable choice, yet the placement of splice points decides much of a network's cost and most of its repair effort.

## What a splice is

A splice is a permanent joint between two optical fibers. The two glass ends are prepared, aligned so their cores line up, and joined so light passes from one to the other with as little loss as possible. A good fusion splice is close to invisible to the signal. Loss is measured in decibels (dB), and a well-made fusion splice typically adds well under a tenth of a dB.

Splicing exists because cable does not come in infinite lengths, because networks branch, and because things break. Every reel end, every branch and every repair is a splice.

## Where splicing happens

Follow a single fiber from the exchange to a living room and you pass through a series of splice points. The names differ between countries, but the sequence is similar everywhere I have worked.

1. Central office or exchange. The outdoor feeder cable is spliced to indoor pigtails that terminate on a patch panel in front of the optical line terminal.
2. Feeder route closures. Long feeder runs are joined reel to reel in underground or aerial closures, usually every few kilometers, with extra closures wherever the route branches.
3. Fiber distribution hub (FDH) or cabinet. Feeder fibers are spliced to splitter inputs, and splitter outputs are spliced or connectorized to the distribution cables heading into the neighborhood.
4. Distribution closures and terminals. Distribution fibers are spliced into small closures or multiport terminals on poles, in pedestals or in pits, where the drops will connect.
5. The premises. The drop is spliced to a short pigtail inside a small wall box, or joined with a field-installable connector where the design favors speed over the lowest loss.

Each point appears on a splice diagram, which lists every fiber, its tube color and where it goes. It is the document a splicer relies on most, and where design errors become field errors.

## Why the count of splices matters

Every splice costs time and adds a small loss. A designer balances fewer splice points, which means longer cable pulls and bigger closures, against more splice points, which means easier access and simpler branching. In the US, aerial plant tends to encourage more frequent, smaller closures. In India, where much of the plant is underground along crowded roads, closures are often placed in chambers at longer intervals. Australia's pit and pipe network pushes most splicing into standardized pits at the kerb.

## Final thoughts

Splicing is the quiet step after trenching and stringing, and it is where most of a fiber network's quality is set. If you are starting out in design, spend a day with a splicing crew. You will never draw a splice diagram the same way again.

Where in your network do most of the splice points end up, and would you move any of them?
