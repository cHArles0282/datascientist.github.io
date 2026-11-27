---
title: "OSP vs ISP: Where Outside Plant Ends and Inside Plant Begins"
excerpt: "Outside plant and inside plant are built by different teams under different rules. Here is how scope, standards and the demarcation point divide them."
categories:
  - "OSP design and engineering"
tags:
  - "OSP vs ISP"
  - "demarcation point"
  - "outside plant"
  - "inside plant"
  - "telecom network boundary"
header:
  image: /assets/images/posts/063-osp-vs-isp-where-outside-plant-ends-and--card.png
  teaser: /assets/images/posts/063-osp-vs-isp-where-outside-plant-ends-and--card.png
  og_image: /assets/images/posts/063-osp-vs-isp-where-outside-plant-ends-and--card.png
queue_number: 63
---

Stand at the back of a central office and you can see the boundary. A conduit bank comes up through the floor, a black outdoor cable ends in a splice tray, and a yellow indoor cable carries on toward the racks. One team built everything on one side of that splice. A different team, with different drawings and different rules, built everything on the other.

That splice is the simplest way to understand the split between outside plant and inside plant.

## Scope: what each side owns

Outside plant (OSP) is everything exposed to weather and traffic: poles, strand, conduit, manholes, cabinets, closures, feeder and distribution cables, and the drop to the house. Inside plant (ISP) is everything in a controlled environment: the central office (CO) equipment, fiber frames, power plant, and the few components inside the customer's building.

| Aspect | Outside plant | Inside plant |
|---|---|---|
| Environment | Weather, vehicles, rodents | Climate controlled, clean power |
| Typical hardware | Cable, closures, pedestals, cabinets, poles | Racks, frames, patch cords, electronics |
| Who designs it | OSP engineers and drafters | CO engineers, cabling designers |
| Who builds it | Construction crews, linemen, splicers | Equipment installers, cabling technicians |
| Main risks | Permits, dig damage, make-ready delays | Power, cooling, floor space, fire rating |
| Drawing style | Route maps with callouts | Rack elevations and floor plans |

## Standards: different rulebooks

In the United States, OSP sits under the National Electrical Safety Code (NESC) for clearances and pole attachments, and under specifications such as ANSI/SCTE 77 for underground enclosures. ISP falls under the National Electrical Code (NEC) and the TIA-568 family of structured cabling standards. The two rulebooks rarely overlap, which is why OSP and ISP designers are often different people.

In India, the Telecommunication Engineering Centre (TEC) publishes specifications that touch both sides, and local building norms govern anything inside a premises. In Australia, customer cabling inside a building must follow the AS/CA S009 installation rules, while the outside network sits with the carrier.

## Demarcation: where one ends and the other begins

The demarcation point, often shortened to "demarc", is the agreed place where responsibility changes hands. There are usually two of them on any fiber service.

At the CO end, the demarc is the cable entrance facility, where outdoor cable is spliced to indoor cable. Everything beyond that splice belongs to the CO team.

At the customer end, the demarc is typically the optical network terminal (ONT), the box that converts light to Ethernet. The operator maintains the network up to the ONT; the customer owns the wiring beyond it. In an apartment block the picture is more layered: the building entry is one boundary, the riser is often shared, and each flat has its own ONT.

In India, the ONT is almost always inside the home and remains the operator's responsibility. In Australia, the National Broadband Network (NBN) draws the boundary at its connection box inside the premises.

## Why the split matters to a designer

When a drawing is unclear about where OSP ends, either both teams assume the other will handle a section and it is left out, or both include it and the budget counts it twice. I make the demarc explicit on every design, with a note and a symbol, even when it seems obvious.

## Final thoughts

OSP and ISP are two halves of one network, and the splice where they meet is the most quietly important joint in the system. Learning both sides, even a little, makes you a better engineer on either.

Where does your organisation draw the demarc on an apartment building, at the entry point or at each flat?
