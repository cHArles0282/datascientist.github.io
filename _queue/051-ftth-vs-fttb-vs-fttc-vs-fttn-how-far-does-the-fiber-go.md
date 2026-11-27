---
title: "FTTH vs FTTB vs FTTC vs FTTN: How Far Does the Fiber Go?"
excerpt: "FTTx explained in plain English. Learn where the fiber stops in FTTH, FTTB, FTTC and FTTN, how much copper is left, and why that distance matters."
categories:
  - "Network architecture"
tags:
  - "FTTx"
  - "FTTH"
  - "FTTN"
  - "FTTC"
  - "fiber to the home"
header:
  image: /assets/images/posts/051-ftth-vs-fttb-vs-fttc-vs-fttn-how-far-doe-card.png
  teaser: /assets/images/posts/051-ftth-vs-fttb-vs-fttc-vs-fttn-how-far-doe-card.png
  og_image: /assets/images/posts/051-ftth-vs-fttb-vs-fttc-vs-fttn-how-far-doe-card.png
queue_number: 51
---

Walk down almost any suburban street and the hardware tells you what kind of network you are looking at. A tall grey cabinet on the corner with ventilation louvres usually means the fiber stops there and copper carries on to the houses. A small sealed terminal on a pole, with thin drop cables running to each porch, usually means fiber goes all the way. Both get sold as "fiber broadband". They are not the same thing.

FTTx is the umbrella term. The "x" stands for wherever the fiber ends. The only real difference between the variants is how much copper is left between the glass and the customer.

## The four main variants

FTTH is Fiber to the Home. Fiber runs from the central office right to an optical network terminal (ONT), the small box on the wall of the house. There is no copper in the access path. FTTP, Fiber to the Premises, is the same idea extended to businesses.

FTTB is Fiber to the Building. The fiber reaches a basement or communications room in a multi-dwelling unit (MDU). Existing in-building copper or Ethernet carries the service to each unit.

FTTC is Fiber to the Curb. Fiber runs to a small distribution point in a pit or on a pole close to the house. The last few tens of metres use the old telephone lead-in.

FTTN is Fiber to the Node. The fiber ends at a street cabinet serving a few hundred premises; the existing copper network does the rest.

| Variant | Where the fiber ends | Last leg | Copper left |
|---|---|---|---|
| FTTH | At the premises (ONT) | Fiber | None |
| FTTB | Building basement | In-building copper or Ethernet | Tens of metres |
| FTTC | Pit or pole near the house | Existing lead-in pair | Under a few hundred metres |
| FTTN | Street cabinet | Existing copper distribution | Up to about a kilometre |

Those distances are rules of thumb, not standards.

## Why the copper length matters

The copper leg is where speed is lost. DSL, or digital subscriber line, sends data over telephone pairs, and its throughput drops quickly with distance. VDSL2, a faster DSL variant, from an FTTN cabinet performs well near the cabinet and much worse at the far end of the run. G.fast, used on some FTTC and FTTB builds, reaches high speeds only over very short loops. Fiber does not have this problem at access distances.

Power is the other difference. An FTTN cabinet needs mains power, batteries and cooling. FTTC distribution points are often reverse-powered from the customer's modem. FTTH outside plant is passive, with nothing to power between the central office and the home.

## The same words mean different things by country

In the United Kingdom, "FTTC" means fiber to the cabinet, which Americans and Australians would call FTTN. In Australia, NBN built a mix of FTTP, FTTN, FTTC and FTTB before starting to upgrade copper areas to full fiber. In the United States, most new residential builds are FTTH. In India, operators such as Jio went almost straight to FTTH, because there was little legacy copper worth reusing.

## Final thoughts

In my experience the choice between these variants is rarely about technology alone. FTTN and FTTC reuse copper already in the ground, which lowers day-one cost. FTTH costs more up front but needs no powered street equipment and will not need rebuilding in ten years. Which of these architectures serves your street today?
