---
title: "Centralized vs Cascaded Splitting in FTTH: Which Is Better?"
excerpt: "Centralized and cascaded PON splitting compared: where the splitters go, how fiber counts and optical loss change, and when each design makes sense."
categories:
  - "Network architecture"
tags:
  - "centralized splitting"
  - "cascaded splitting"
  - "PON design"
  - "FDH"
  - "FTTH architecture"
header:
  image: /assets/images/posts/055-centralized-vs-cascaded-splitting-in-ftt-card.png
  teaser: /assets/images/posts/055-centralized-vs-cascaded-splitting-in-ftt-card.png
  og_image: /assets/images/posts/055-centralized-vs-cascaded-splitting-in-ftt-card.png
queue_number: 55
---

Two neighbourhoods a few streets apart, built a year or so apart, both full fiber to the home (FTTH). In the first, there is a large grey cabinet near the entrance road and nothing else visible. In the second, there is no cabinet, but every third pole carries a small dome closure with drop cables leaving it. Same operator, same customer speeds. The difference is where the designers chose to put the splitters.

That choice, centralized or cascaded, shapes almost everything else in a passive optical network (PON) design.

## Centralized splitting

In a centralized design, the whole split happens in one place, usually a fiber distribution hub (FDH), the street cabinet. A feeder fiber from the optical line terminal (OLT) enters a single 1:32 splitter, and each of the 32 outputs is patched to a dedicated distribution fiber that runs all the way to a terminal near the customer.

The big advantage is control. There is one place to test, and one place to re-patch a customer onto a different PON. The cost is fiber. Distribution cables are larger because every home needs a strand from the hub, which means bigger closures and more splicing.

## Cascaded splitting

In a cascaded design, the split is done in two stages. A first-stage splitter, often 1:4, sits in the cabinet or a closure, and its outputs run to second-stage 1:8 splitters in closures or terminals close to the homes. Only a handful of fibers leave the first stage, so the distribution cables can be small, which suits aerial routes, long linear roads and rural areas.

The trade-off is loss and access. Each extra stage adds connectors or splices, so the total loss is a little higher than a single 1:32. There is no single test point, so fault-finding often means opening closures on poles. And if take-up in one closure is low, those splitter ports sit stranded while another closure runs out.

| Factor | Centralized | Cascaded |
|---|---|---|
| Split stages | One, in the FDH | Two or more, spread out |
| Distribution fiber count | High | Low |
| Test and patch access | Single point | Multiple points |
| Extra connector loss | Minimal | Some |
| Stranded splitter ports | Few | More likely |
| Best suited to | Dense suburbs, underground | Aerial, rural, linear routes |

## The loss is nearly the same, the headaches are not

A 1:4 splitter adds roughly 7 dB and a 1:8 roughly 10.5 dB, so a 1:4 followed by a 1:8 lands close to the 17 dB of a single 1:32. What tips the balance is the extra connector pairs and splices in a cascade. In my experience, the loss difference rarely breaks a budget, but the operational difference shows up every time a technician has to find a dark optical network terminal (ONT).

## Where each is used

North American suburban underground builds lean heavily toward centralized splitting in an FDH. Australian NBN fiber builds are also largely centralized. In India, where most access fiber is aerial and the cost per metre of cable matters more than cabinet space, cascaded designs with 1:8 splitters hung on poles are the norm. Neither is wrong. They are answers to different constraints.

## Final thoughts

Centralized splitting buys flexibility with fiber. Cascaded splitting buys cheaper cable with operational effort. A good designer knows which one the terrain, the take-rate forecast and the maintenance team can live with. Which design does your network use?
