---
title: "HLD vs LLD in Fiber Network Design"
excerpt: "High-level design sets the architecture; low-level design tells crews what to build. Here is what goes into each document and who uses it."
categories:
  - "OSP design and engineering"
tags:
  - "high-level design"
  - "low-level design"
  - "HLD vs LLD"
  - "fiber network design"
  - "construction drawings"
header:
  image: /assets/images/posts/064-hld-vs-lld-in-fiber-network-design-card.png
  teaser: /assets/images/posts/064-hld-vs-lld-in-fiber-network-design-card.png
  og_image: /assets/images/posts/064-hld-vs-lld-in-fiber-network-design-card.png
queue_number: 64
---

A construction crew pulls up to a pole with a drawing on the dashboard. They do not care why the network serves this suburb or how many homes the operator hopes to win. They want to know which pole, which cable, how many feet, and where the closure goes. Six months earlier, someone in a meeting room needed the opposite: the big picture, with none of the pole numbers.

Those two needs are why fiber design is split into a high-level design and a low-level design.

## What a high-level design contains

The high-level design (HLD) answers the question "what are we building and roughly where?" It is produced early, often before funding is final, and it is read by planners, finance teams and senior engineers.

A typical HLD defines the service area boundary and the number of living units inside it, the central office (CO) or hub that will serve them, and the passive optical network (PON) architecture, including the split ratio and whether splitters sit in cabinets or out in the field. Routes are drawn approximately, usually along main roads. Cable counts, cabinets and terminals appear as totals, and the cost estimate carries a wide tolerance.

The HLD is deliberately light on detail. Its job is to let people compare options and approve a direction.

## What a low-level design contains

The low-level design (LLD) answers "exactly how do we build it?" It is the document on the crew's dashboard. Every element in the HLD is resolved to a specific location, size and method.

| Item | HLD | LLD |
|---|---|---|
| Routes | Approximate, main roads | Pole by pole, duct by duct |
| Cable sizes | Summarised totals | Exact fiber count per segment |
| Lengths | Rounded estimates | Measured footage or metres with slack |
| Splicing | Not shown | Full splice plan at each closure |
| Hardware | Counts only | Model, location, mounting detail |
| Materials | Rough budget | Complete bill of materials |

The LLD is also where field survey data lands. Pole heights, existing attachments, driveway locations and tree lines all change the route at this stage.

## Who produces which, and when

In my experience the HLD is usually owned by a planning or architecture team, while the LLD comes from a design or drafting team that may be in-house or outsourced. The hand-off between them is where many problems start. An HLD that is too vague leaves the LLD designer guessing. An HLD that is too detailed wastes effort on routes the survey will change anyway.

Terminology differs by market. In the United States, the LLD is often simply called the construction drawing or the "issue for construction" set, and the HLD may be called a preliminary or planning design. In India and Australia, HLD and LLD are used widely as formal document names, with sign-off gates between them.

## How the two stay in step

Check the LLD against the HLD before release. Living unit counts, split ratio and feeder sizing are the usual places they drift apart, because a survey finds more homes than the planner counted, or a route runs longer than the loss budget allows. When that happens, update the HLD rather than quietly bending the LLD to fit.

## Final thoughts

The HLD is a decision document. The LLD is an instruction document. Keep that distinction clear and both become easier to write, review and defend. If you are new to design, read an LLD against its HLD and note every place they differ. That gap is where the real engineering happened.

Which do you find harder to get right, the high-level design or the low-level design?
