---
title: "Fiber Splice Loss vs Connector Loss and What Counts as Bad"
excerpt: "Typical fusion splice, mechanical splice and connector loss values, how each loss happens, and the thresholds that tell you when a result needs fixing."
categories:
  - "Testing and quality"
tags:
  - "splice loss"
  - "connector loss"
  - "fusion splicing"
  - "insertion loss"
  - "return loss"
header:
  image: /assets/images/posts/045-fiber-splice-loss-vs-connector-loss-and--card.png
  teaser: /assets/images/posts/045-fiber-splice-loss-vs-connector-loss-and--card.png
  og_image: /assets/images/posts/045-fiber-splice-loss-vs-connector-loss-and--card.png
queue_number: 45
---

A fusion splicer in a van shows an estimated loss of 0.02 dB and the splicer nods, slides the heat shrink into the oven and moves on. An hour later, at the cabinet, a patch cord shows 0.6 dB across one connector and the same technician reaches for a cleaning tool. Those two numbers, and the reactions, say a lot about what is normal.

Both join two fibers end to end. The difference is permanence. A splice is made once. A connector is made to be mated and unmated, and that convenience costs light.

## How each loss happens

A fusion splice melts two cleaved fiber ends together with an electric arc. Loss comes from core misalignment, a poor cleave, dirt, or a mismatch in mode field diameter between the two fibers. A mechanical splice holds the ends in a groove with index-matching gel, quicker but lossier.

A connector relies on two polished ferrules pressing against each other. Loss comes from an air gap, contamination on the end face, a scratched ferrule, or lateral offset between cores. Because the surfaces are exposed every time the connector is unplugged, contamination is the most common.

## Typical values

| Joint type | Typical good result | Planning value | Treated as bad |
|---|---|---|---|
| Fusion splice | 0.02 to 0.05 dB | 0.1 dB | above 0.1 dB, or any reflection |
| Mechanical splice | 0.1 to 0.3 dB | 0.3 dB | above 0.5 dB |
| Mated connector pair | 0.2 to 0.3 dB | 0.5 dB | above 0.5 to 0.75 dB |

Connectors also have a second specification, return loss: how much light they reflect back towards the source. An ultra physical contact (UPC) connector is typically rated at 50 dB or better. An angled physical contact (APC) connector, with its 8 degree polish, reaches 60 dB or better, which is why APC is standard on passive optical networks, where reflections upset the transmitters.

## What counts as a bad result

For a fusion splice, two things matter. The first is the loss figure, usually judged as the bidirectional average from OTDR (optical time domain reflectometer) traces, with 0.1 dB the most common acceptance limit I have worked to. The second is reflection. A good fusion splice shows no reflection at all; a spike at a splice point means an air gap or a crack, and the splice is redone regardless of the loss figure.

The number on the splicer screen is an estimate from a camera image of the fiber ends, not an optical measurement. It catches gross errors, but the OTDR has the final say.

For connectors, the first response to a high reading is to clean and inspect, not replace. In my experience most bad connectors are dirty connectors. Only when a clean end face still reads high is it time to suspect the ferrule or the mating sleeve.

## A note on regional practice

The acceptance numbers above are fairly universal. What differs is where connectors appear. In the United States, drop terminals with hardened pre-connectorised ports are common, so a customer path has more connectors and fewer splices. Indian and Australian builds I have seen tend to splice the drop, trading convenience for lower and more stable loss. Either is fine as long as the loss budget reflects it.

## Final thoughts

A splice is a one-time investment in low loss; a connector is a recurring risk accepted for flexibility. Where does your organisation set the re-splice threshold, and have you ever argued about a 0.12 dB splice?
