---
title: "PON Explained: How One Fiber Serves Dozens of Homes"
excerpt: "How a PON works: one fiber from the central office, a passive splitter in the street, and dozens of homes served with nothing powered in between."
categories:
  - "Network architecture"
tags:
  - "PON"
  - "passive optical network"
  - "optical splitter"
  - "GPON"
  - "FTTH architecture"
header:
  overlay_image: /assets/images/posts/052-pon-explained-how-one-fiber-serves-dozen-photo.jpg
  overlay_filter: 0.55
  teaser: /assets/images/posts/052-pon-explained-how-one-fiber-serves-dozen-photo.jpg
  og_image: /assets/images/posts/052-pon-explained-how-one-fiber-serves-dozen-photo.jpg
queue_number: 52
---

At the end of a quiet cul-de-sac there is a small grey cabinet. One fiber cable, thinner than a pencil, comes up through the base. A bundle of drop cables leaves the same cabinet and runs to thirty-odd houses. There is no electricity meter on it and nothing inside hums. That is a passive optical network, and it is the design behind most fiber to the home (FTTH) builds today.

PON stands for passive optical network. The idea is simple: one fiber from the exchange is shared by many customers, and the sharing is done with glass rather than electronics.

## What "passive" actually means

Between the central office and the customer's wall there are only fibers, splices, connectors and splitters. None of it needs power. The two powered devices sit at the ends: the optical line terminal (OLT) in the central office, and the optical network terminal (ONT) at each home. Compare that with a point-to-point design, where every customer gets a dedicated fiber back to an Ethernet switch. Point-to-point is cleaner but needs far more feeder fiber and far more switch ports. In my experience, PON wins for residential areas on both cable count and cost.


<figure>
  <img src="{{ "/assets/images/posts/052-pon-explained-how-one-fiber-serves-dozen-diagram.jpg" | relative_url }}" alt="Diagram: PON Explained: How One Fiber Serves Dozens of Homes">
  <figcaption>PON Explained: How One Fiber Serves Dozens of Homes</figcaption>
</figure>

## How a splitter shares one fiber

An optical splitter is a fused or planar glass device with one input and many outputs. Light entering the input is divided equally among the outputs. Common ratios are 1:32 and 1:64, and the GPON (gigabit-capable PON) standard allows up to 1:128. Here is how the traffic flows:

1. Downstream, the OLT transmits one continuous stream. The splitter copies it to every ONT.
2. Each ONT reads only the frames addressed to it. GPON encrypts downstream traffic so neighbours cannot read each other's data.
3. Upstream, the ONTs share the fiber using time division multiple access (TDMA). The OLT grants each ONT a time slot and the ONTs transmit in bursts that do not overlap.
4. When an ONT first connects, the OLT measures its distance so the time slots line up. This is called ranging.

Downstream and upstream use different wavelengths on the same fiber, so they do not interfere. In GPON that is 1490 nm down and 1310 nm up, with 1550 nm reserved for an optional video overlay.

## The price you pay: optical loss

Splitting the light means each output gets only a fraction of the power. A 1:2 split costs roughly 3.5 dB, and a 1:32 splitter typically introduces around 17 dB of loss. Add fiber attenuation, splices and connectors, and the total has to fit inside the OLT's optical budget. GPON Class B+ optics allow 28 dB end to end, and the standard supports up to 20 km between OLT and ONT. Most of my design time goes into making the loss budget close on the longest path.

## Regional differences

The physics is the same everywhere, but the packaging differs. In the United States, I mostly see a single 1:32 splitter in a street cabinet with home-run fibers to each terminal. In India, aerial cascaded designs are common, with small 1:4 and 1:8 splitters hung in closures on poles. Australian NBN FTTP builds use splitters in distribution hubs much like the US approach.

## Final thoughts

A PON is a clever trade. You give up a dedicated fiber per customer and accept some optical loss, and in return you get a street network with nothing to power, nothing to cool and very little to fail. What split ratio does your local operator use?
