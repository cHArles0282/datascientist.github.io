---
title: "Mass Fusion Splicing, Joining 12 Fibers at Once"
excerpt: "How ribbon or mass fusion splicing joins twelve fibers in a single arc, why high-count cables depend on it, and what can go wrong."
categories:
  - "Fiber cable and splicing"
tags:
  - "mass fusion splicing"
  - "ribbon splicing"
  - "ribbon fiber"
  - "high fiber count cable"
  - "ribbon splicer"
header:
  image: /assets/images/posts/038-mass-fusion-splicing-joining-12-fibers-a-card.png
  teaser: /assets/images/posts/038-mass-fusion-splicing-joining-12-fibers-a-card.png
  og_image: /assets/images/posts/038-mass-fusion-splicing-joining-12-fibers-a-card.png
queue_number: 38
---

Imagine a cable with 864 fibers arriving at a central office, and a crew with one week to splice it through. One fiber at a time, that is 864 strips, cleaves and arcs before any testing. Now imagine the same job twelve fibers at a time. That is mass fusion splicing, and it is the reason ribbon cable exists.

On high-count routes I have been involved with, the splicing method is decided at the design stage, because the cable, closures and test plan all follow from it.

## What a ribbon is

A ribbon is a group of twelve fibers, each still 250 microns in diameter, bonded side by side with a thin matrix coating into a flat strip. The fibers follow the standard color order edge to edge, and the ribbon carries a printed number or stripe. Stacked ribbons go into a central tube or individual buffer tubes, which is how a cable reaches 1,728 or 3,456 fibers in a sheath that fits a standard duct.

Newer rollable ribbon bonds the fibers only at intervals, so it rolls into a round bundle in the cable and flattens again at the splice.

## How a mass fusion splice is made

The process mirrors a single-fiber splice, with tools that handle all twelve at once.

1. Strip the ribbon. A thermal stripper heats the matrix and coatings so they slide off together, leaving twelve bare fibers in a neat row.
2. Clean. The bare fibers are wiped with alcohol, keeping the row intact.
3. Cleave. A ribbon cleaver scores and snaps all twelve fibers in one motion, the step that decides most of the splice quality.
4. Fuse. The two ribbons are placed in the splicer's V-groove fixture, which aligns the fibers by their outer cladding. One wide arc fuses all twelve pairs together.
5. Protect. A wide heat-shrink sleeve with a reinforcing rod covers the whole joint, which is then laid into a ribbon splice tray.

## The trade-offs

Mass fusion is fast, but it is not individually tuned. A single-fiber splicer can align each core using cameras. A ribbon splicer aligns twelve fibers by their cladding at once, so any slight core offset in the glass cannot be corrected. Average loss per fiber is therefore a little higher than a good single-fiber splice, though still small on modern fiber.

The bigger issue is that one bad fiber spoils the set. If one cleave is poor or one fiber has a chip, the splicer will usually estimate high loss on that fiber. The fix is to redo all twelve, still faster than twelve separate splices but frustrating when eleven were fine.

Ribbon also demands careful handling; twist it too hard and the matrix cracks. Mixing ribbon and loose tube at one closure means ribbonizing single fibers with a small tool or splitting a ribbon into singles, which adds steps.

## Where it is used

Mass fusion belongs where the fiber counts are high and the branching is low. Central office entrance cables, metro backbone rings, data center interconnects and large feeder routes are the usual homes. In the US it has been common in dense city feeders for years. In India and Australia it appears mostly on long-haul and inter-exchange routes, with loose tube still dominating the access network.

## Final thoughts

Twelve at a time changes the economics of a high-count build, but only if the whole chain, from cable to closure to tester, is planned around it.

Has ribbon cable reached the access network in your area, or is it still a backbone-only technology?
