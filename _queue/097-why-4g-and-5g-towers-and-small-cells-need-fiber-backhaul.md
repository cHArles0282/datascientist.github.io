---
title: "Why 4G and 5G Towers and Small Cells Need Fiber Backhaul"
excerpt: "Fiber backhaul explained for mobile networks, covering backhaul, midhaul and fronthaul, why small cells depend on fiber, and how it shapes OSP design."
categories:
  - "Telecom project delivery and careers"
tags:
  - "fiber backhaul"
  - "5G fronthaul"
  - "small cell fiber"
  - "mobile network fiber"
  - "C-RAN"
header:
  image: /assets/images/posts/097-why-4g-and-5g-towers-and-small-cells-nee-card.png
  teaser: /assets/images/posts/097-why-4g-and-5g-towers-and-small-cells-nee-card.png
  og_image: /assets/images/posts/097-why-4g-and-5g-towers-and-small-cells-nee-card.png
queue_number: 97
---

Look up at a modern street light pole in a busy city centre and you may see a small grey box near the top, about the size of a suitcase. That is a small cell. Now look down. A short run of conduit disappears into the footpath beside the pole base. That conduit is why the small cell works.

A mobile antenna can only carry as much traffic as the link behind it. For 4G and especially 5G, that link is almost always fiber.

## Backhaul, midhaul and fronthaul

Backhaul is the connection from a cell site back to the operator's core network. For years it was a copper leased line, then microwave radio, and now mostly fiber. As networks grew, the radio equipment was split into parts, and the links between those parts got their own names.

| Segment | Connects | Main sensitivity |
| --- | --- | --- |
| Backhaul | Cell site or central unit to the core network | Capacity |
| Midhaul | Central unit to distributed unit | Capacity and moderate latency |
| Fronthaul | Distributed unit to the radio unit on the tower | Very low latency and tight timing |

In a traditional site, a baseband unit (BBU) sits in the cabinet at the tower base and connects by fiber to a remote radio head (RRH) up on the mast. In a centralised radio access network (C-RAN), the baseband is pulled back to a hub serving many sites, and the link from the hub to each radio becomes fronthaul. Fronthaul is the most demanding of the three because the radio and the baseband need to stay tightly synchronised.

## Why fiber and not microwave

Microwave still has a place, especially for rural towers and temporary sites. It is quick to deploy. But it needs line of sight, its capacity is limited by spectrum and weather, and each hop adds delay. 5G uses wider channels and more antennas per site, and one site's traffic can exceed what a microwave link comfortably carries. Fiber has no practical capacity ceiling for this purpose, ignores the weather once it is in the ground, and supports the timing precision fronthaul requires. For dense urban small cells, there is usually no line of sight to anything anyway.

## What this means for OSP design

For an outside plant (OSP) designer, a mobile site is a very different customer from a house. It needs more fibers, often a diverse second path, and a precise demarcation at the cabinet. Small cells multiply this. A single street may need fiber to a dozen poles, each with a small enclosure and a short riser up the pole.

Practice differs by country. In the US, small cells mostly go on utility and street light poles, so pole attachment agreements and make-ready govern the schedule. In India, operators such as Reliance Jio built very large fiber footprints partly to feed their own towers, much of it overhead on electricity poles or in shallow roadside trenches. In Australia, tower backhaul is often leased from a fiber wholesaler rather than built by the mobile operator, so the design task is mostly the last link from duct to site.

## Final thoughts

Every improvement in mobile speed ends up as a demand on the fixed network underneath it. The fiber under the footpath is as much a part of 5G as the antenna on the pole. Have you noticed small cells going up in your area, and did the fiber work come before or after them?
