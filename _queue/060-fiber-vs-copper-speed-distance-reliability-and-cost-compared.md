---
title: "Fiber vs Copper: Speed, Distance, Reliability and Cost Compared"
excerpt: "Fiber and copper compared on bandwidth, reach, interference, reliability and lifetime cost, with a plain explanation of why networks are moving to glass."
categories:
  - "Network architecture"
tags:
  - "fiber vs copper"
  - "fiber optic cable"
  - "copper cable"
  - "network reliability"
  - "fiber cost"
header:
  image: /assets/images/posts/060-fiber-vs-copper-speed-distance-reliabili-card.png
  teaser: /assets/images/posts/060-fiber-vs-copper-speed-distance-reliabili-card.png
  og_image: /assets/images/posts/060-fiber-vs-copper-speed-distance-reliabili-card.png
queue_number: 60
---

A crew has a trench open along a suburban road. On the spoil pile is a thick grey copper cable they have just lifted out, heavy enough to need two people. Going in is an orange microduct the width of a thumb, with a fiber cable one person can carry on a shoulder. A resident stops and asks the question I hear on every job: why not use the wires already there?

The answer comes down to four things: how much data each medium can carry, how far it can carry it, how often it breaks, and what it costs over its life.

## Speed

Copper carries electrical signals, and at high frequencies those signals leak and interfere with neighbouring pairs. That is why DSL (digital subscriber line) speeds top out in the tens or low hundreds of megabits for most customers. Fiber carries light inside a glass core, and the usable bandwidth of a single strand is so large that the limit is set by the electronics at each end, not the cable. A passive optical network (PON) today delivers 10 Gbps per port, and the same strand is upgraded by changing the equipment.

## Distance

This is where the gap is widest. Single-mode fiber loses roughly 0.2 to 0.4 dB per kilometre depending on wavelength, which is why a PON can span 20 km with a splitter in the middle. Copper loses signal quickly as frequency and length increase. A VDSL2 service is already struggling a kilometre from the cabinet, and G.fast needs to be within a few hundred metres. Every copper architecture is an exercise in getting electronics close to the customer. Fiber does not need that.

## Reliability

Fiber is a dielectric. It does not conduct electricity, so it does not carry lightning surges into the house, does not pick up interference from power lines, and does not corrode. The faults I see on fiber networks are almost all mechanical: a dig-up, a damaged drop, a dirty connector. Copper faults are mostly chemical and environmental: water in a joint, corroded conductors, crosstalk from a neighbouring pair. Copper has one advantage: the pair can carry power. A traditional phone keeps working in a blackout; a fiber terminal needs a battery.

| Criterion | Fiber | Copper twisted pair |
|---|---|---|
| Bandwidth | Limited by electronics, not cable | Falls sharply with frequency |
| Useful reach | Tens of kilometres | Hundreds of metres to a few km |
| Electrical interference | Immune | Susceptible |
| Lightning and surges | Does not conduct | Conducts into premises |
| Carries power | No | Yes |
| Scrap value to thieves | None | Significant |

## Cost

Per metre, fiber cable is now cheaper than multi-pair copper. The expensive part of either is the labour to put it in the ground or on poles. Where copper wins is when it already exists, which is the whole logic of fiber to the node (FTTN) and fiber to the curb (FTTC): reuse the sunk investment. Where fiber wins is lifetime cost. It needs no powered street equipment, carries future services without replacement, and lasts for decades. In India, with little copper to reuse, the decision was easy. In the United States and Australia it was really about when to stop spending on old plant.

## Final thoughts

Copper was excellent engineering for a voice network. Fiber is better suited to what we now ask the network to do. If the trench on your street were open today, which would you lay?
