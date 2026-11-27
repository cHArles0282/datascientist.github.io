---
title: "Fusion vs Mechanical Splicing, Pros, Cons and When to Use Each"
excerpt: "How fusion and mechanical fiber splices work, how they compare on loss, reflection, cost and speed, and where each one belongs in a network."
categories:
  - "Fiber cable and splicing"
tags:
  - "fusion splicing"
  - "mechanical splice"
  - "fiber splice loss"
  - "fusion splicer"
  - "fiber optic repair"
header:
  overlay_image: /assets/images/posts/037-fusion-vs-mechanical-splicing-pros-cons--photo.jpg
  overlay_filter: 0.55
  teaser: /assets/images/posts/037-fusion-vs-mechanical-splicing-pros-cons--photo.jpg
  og_image: /assets/images/posts/037-fusion-vs-mechanical-splicing-pros-cons--photo.jpg
queue_number: 37
---

A storm takes down a tree, the tree takes down a cable, and a crew is on the road at two in the morning. One technician unpacks a fusion splicer and starts looking for a dry place to set it up. The other reaches for a small plastic sleeve that needs no power and no screen. Both are about to make a splice.

In my experience, the choice between fusion and mechanical splicing is less about which is better and more about what the situation allows.

## How a fusion splice works

A fusion splice melts two fiber ends together. The technician strips the coating, cleans the glass, cleaves each end to a flat face, and places the two ends in the splicer. The machine aligns the cores using cameras, then fires an electric arc between two electrodes. The glass softens and fuses into a single continuous strand. A heat-shrink sleeve with a stiffening rod then protects the joint.

The result is close to a perfect join. Typical loss is well under 0.1 dB, and reflection is so low it is hard to measure. On the outside plant networks I have worked on, in the US, Australia and India, permanent splices are fusion splices.


<figure>
  <img src="{{ "/assets/images/posts/037-fusion-vs-mechanical-splicing-pros-cons--diagram.jpg" | relative_url }}" alt="Diagram: Fusion vs Mechanical Splicing, Pros, Cons and When to Use Each">
  <figcaption>Fusion vs Mechanical Splicing, Pros, Cons and When to Use Each</figcaption>
</figure>

## How a mechanical splice works

A mechanical splice does not melt anything. The two cleaved fiber ends are pushed into a small housing that holds them end to end in a precision groove. A drop of index-matching gel fills the tiny gap between the faces so light crosses it without seeing a glass-to-air boundary. A clamp or cam locks the fibers in place.

It takes a cleaver, a stripper and a steady hand, but no power and no splicer. Loss is higher than fusion, typically a few tenths of a dB, and reflection is also higher because the gel is not a perfect match for glass. Over years, the gel can degrade, which is why most operators treat mechanical splices as temporary.

## Side by side

| Factor | Fusion splice | Mechanical splice |
| --- | --- | --- |
| Typical loss | Well under 0.1 dB | A few tenths of a dB |
| Reflection | Very low | Higher, gel dependent |
| Equipment | Fusion splicer, cleaver, power | Cleaver and hand tools only |
| Time per splice | Fast once set up | Fast with no setup |
| Cost per splice | Low consumable, high machine cost | Higher consumable, no machine |
| Lifespan | Permanent | Often treated as temporary |

## Where each belongs

Fusion is the default for any splice that will stay in the ground, on a pole or in a cabinet. The upfront cost of the splicer is spread across thousands of splices, and the low loss keeps the optical budget healthy on long passive optical network (PON) links where every tenth of a dB counts.

Mechanical splices earn their place in three situations. The first is emergency restoration, where getting traffic back in minutes matters more than the last fraction of a dB. The second is small indoor jobs where carrying a splicer is impractical. The third is the field-installable connector, really a mechanical splice built into a connector body, now common at the customer end of a drop.

A restoration splice should be recorded and replaced with fusion when the route is properly repaired.

## Final thoughts

Think of fusion as the standard and mechanical as the exception you plan for. Carry both, know the loss each one adds, and make sure the as-built records say which is where.

Does your network allow mechanical splices anywhere permanently, or are they always a stopgap?
