---
title: "How to Build an Optical Link Loss Budget for FTTH"
excerpt: "Learn how to add fiber, splice, connector and splitter losses into a link loss budget, with typical planning values and a worked GPON example."
categories:
  - "Testing and quality"
tags:
  - "link loss budget"
  - "GPON loss budget"
  - "optical power budget"
  - "FTTH design"
  - "splitter loss"
header:
  overlay_image: /assets/images/posts/042-how-to-build-an-optical-link-loss-budget-photo.jpg
  overlay_filter: 0.55
  teaser: /assets/images/posts/042-how-to-build-an-optical-link-loss-budget-photo.jpg
  og_image: /assets/images/posts/042-how-to-build-an-optical-link-loss-budget-photo.jpg
queue_number: 42
---

Picture a design review on a Friday afternoon. A new drafter has routed a 1:64 split out to a cluster of farmhouses at the end of a county road, and someone asks the question that stops the room: "Will the light actually reach the last house?" Nobody can answer by looking at the map. The answer lives in a loss budget.

A link loss budget is a list of everything between transmitter and receiver, each with a loss in decibels, added up and compared with what the equipment can tolerate. It is the most useful calculation in fiber to the home (FTTH) design, and it fits on one page.

## What goes into the budget

Every passive element takes a bite out of the signal. The planning values below are commonly used in the industry. They are deliberately conservative, a little worse than a good installer will achieve, because a budget should survive a bad day.

| Element | Typical planning value |
|---|---|
| Single-mode fiber at 1310 nm | about 0.35 dB per km |
| Single-mode fiber at 1550 nm | about 0.2 dB per km |
| Fusion splice | 0.1 dB each |
| Mated connector pair | 0.5 dB each |
| 1:32 optical splitter | about 17.5 dB |
| 1:64 optical splitter | about 21 dB |

The splitter dominates. Dividing light 32 ways leaves each output one thirty-second of the input at best, already 15 dB before any imperfection. That is why the split ratio is a design decision, not a detail.


<figure>
  <img src="{{ "/assets/images/posts/042-how-to-build-an-optical-link-loss-budget-diagram.jpg" | relative_url }}" alt="Diagram: How to Build an Optical Link Loss Budget for FTTH">
  <figcaption>How to Build an Optical Link Loss Budget for FTTH</figcaption>
</figure>

## A worked example

Take a GPON (Gigabit Passive Optical Network) link with 20 km of fiber from the optical line terminal (OLT) to the furthest customer, one 1:32 splitter, ten fusion splices and four mated connectors. Work it at 1310 nm, the lossier upstream wavelength. The fiber costs 20 times 0.35, or 7 dB. The splitter adds 17.5 dB. Ten splices add 1 dB and four connectors add 2 dB. The total is 27.5 dB.

GPON optics are sold in classes. Class B+ supports a loss between 13 dB and 28 dB; class C+ extends the upper limit to 32 dB. Our link passes on B+ with half a decibel to spare, which is not comfortable. A sensible designer shortens the route, drops that leg to a 1:16 split, or specifies C+ optics. Note the lower limit too: a customer next to the hub can receive too much light and may need an attenuator.

## Budget versus measured

The budget is a worst-case prediction at the worst wavelength. Field measurements should come in under it, and the gap is your margin. I always keep a few decibels in reserve, because every cable cut repaired later adds two splices and a little extra fiber. A network built with no margin fails the first time it is repaired.

## Regional habits

In the United States, a single 1:32 split at a cabinet or distribution hub is common. In dense Indian deployments I have more often seen cascaded splits, such as 1:4 followed by 1:8 closer to the homes, which saves feeder fiber but makes the budget harder to track. Australian fibre to the premises designs also use centralised splitting in distribution hubs. In every case the method is the same: list it, add it, compare it.

## Final thoughts

A loss budget turns a map into a yes or no answer, and it takes ten minutes. Do you build the budget before routing or check it afterwards, and has that order ever cost you a redesign?
