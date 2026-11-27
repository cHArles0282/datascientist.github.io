---
title: "Duct Sizing for Fiber: The 40% Fill Rule and Jam Ratio Explained"
excerpt: "How fiber designers choose conduit size, with the 40 percent fill guideline, a fill ratio calculation, and why jam ratio matters with three cables."
categories:
  - "Underground infrastructure"
tags:
  - "conduit fill ratio"
  - "duct sizing"
  - "jam ratio"
  - "fiber conduit design"
  - "40 percent fill"
header:
  image: /assets/images/posts/007-duct-sizing-for-fiber-the-40-fill-rule-a-card.png
  teaser: /assets/images/posts/007-duct-sizing-for-fiber-the-40-fill-rule-a-card.png
  og_image: /assets/images/posts/007-duct-sizing-for-fiber-the-40-fill-rule-a-card.png
queue_number: 7
---

Halfway through a pull the cable stops dead. The winch operator eases off, tries again, and the tension gauge climbs with nothing moving. Somewhere in the duct, three cables have wedged side by side across the bore. On another job the opposite happens: a single slim fiber cable rattles around in a four-inch duct that cost far more than it needed to.

Both problems come from the same decision, how big the duct should be for what goes inside it. The answer is a quick calculation.

## The 40 percent guideline

Fill ratio is the total cross-sectional area of the cables divided by the inside area of the duct. The reference most designers borrow is Chapter 9 of the National Electrical Code (NEC), which allows 53 percent fill for one cable, 31 percent for two, and 40 percent for three or more. Telecom duct is not always governed by the NEC, but 40 percent has become the industry planning rule.

The reason is practical. More fill means more friction, higher pulling tension, and no room to add a cable later. In my experience the rule is also a hedge against drawings being slightly wrong, which they often are.

## Calculating it

1. List every cable that will be in the duct, including future cables, with the outside diameter of each from its data sheet.
2. Work out the area of each cable as pi times the diameter squared, divided by four, and add them up.
3. Find the inside diameter of the duct, not the nominal trade size. A two-inch duct does not have a two-inch bore.
4. Divide total cable area by duct area. If the result is above 40 percent, go up a size or split the duct with innerduct.
5. If there will be exactly three cables of similar size, check the jam ratio.
6. Confirm the minimum bend radius of the largest cable fits the sweeps on the route.

## The jam ratio

Jamming happens when three cables of similar size line up across the duct during a pull, usually in a bend, and wedge against each other and the wall. The risk depends on the ratio of duct inside diameter to cable outside diameter. The widely published danger zone is a ratio between about 2.8 and 3.2. Above that, the cables can slide over one another; below it, they cannot line up side by side at all. Because duct flattens slightly in bends, designers often multiply the inside diameter by 1.05 before checking.

For example, three 0.5 inch cables in a duct with a 1.5 inch bore give a ratio of 3.0, squarely in the jam zone even though the fill is only 33 percent.

## Innerduct and microduct

When a large conduit is subdivided with innerduct, the fill rule applies to each innerduct, not the host. A single fiber cable in a 1.25 inch innerduct is the usual North American arrangement and is well under the limit. In India, the standard 40/33 mm permanently lubricated high-density polyethylene (HDPE) duct carrying one outdoor cable sits far below 40 percent, which is part of why cable blowing works so well there.

## Final thoughts

Duct sizing is five minutes of arithmetic that prevents a day of stuck cable or a route that cannot take the next upgrade. Do the calculation with the future cables in the list, not just today's. Have you ever had a pull jam, and what did the ratio turn out to be?
