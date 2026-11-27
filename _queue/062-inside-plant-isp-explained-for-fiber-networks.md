---
title: "Inside Plant (ISP) Explained for Fiber Networks"
excerpt: "Inside plant covers the equipment and cabling inside central offices and buildings. Here is what it includes and how it meets the outside plant."
categories:
  - "OSP design and engineering"
tags:
  - "inside plant"
  - "central office equipment"
  - "optical line terminal"
  - "fiber distribution frame"
  - "ISP telecom"
header:
  image: /assets/images/posts/062-inside-plant-isp-explained-for-fiber-net-card.png
  teaser: /assets/images/posts/062-inside-plant-isp-explained-for-fiber-net-card.png
  og_image: /assets/images/posts/062-inside-plant-isp-explained-for-fiber-net-card.png
queue_number: 62
---

Open the door of a central office and the first thing you notice is the sound. Fans, hundreds of them, pushing cool air through long rows of racks. Yellow patch cords travel overhead in trays. Nothing appears to move, yet every fiber on every street outside ends up in this room.

That room is inside plant, and it is the half of the network most outside plant designers never visit.

## What inside plant covers

Inside plant (ISP) is the equipment and cabling that lives inside a building. The clearest example is the operator's central office (CO), but the term also covers headends, data centres, riser cabling in apartment blocks, and the fiber and electronics inside a customer's home. If it sits in a controlled space with a roof, clean power and air conditioning, it is inside plant.

One warning: ISP also means internet service provider. In engineering drawings it almost always means inside plant, and that is how I use it here.

## The path a fiber takes through a central office

Following one fiber from the street to the electronics is the easiest way to learn the pieces.

1. Cable entrance facility (CEF). The outside cable comes in through a sealed wall or floor penetration and is spliced to an indoor-rated cable, because outdoor jackets usually do not meet building fire codes.
2. Fiber distribution frame (FDF). Every incoming fiber is terminated on a connector in a large patch panel and labeled. Some operators call this the optical distribution frame (ODF).
3. Patch cords. Short jumpers link the frame to the active equipment, so permanent cabling stays untouched when ports change.
4. Optical line terminal (OLT). This is the active electronics that drives a passive optical network (PON). Each OLT port feeds one feeder fiber and, through splitters out in the field, serves many homes.
5. Aggregation and transport. Switches and routers behind the OLT carry traffic toward the core network.
6. Power plant. Rectifiers convert utility AC to -48 V DC, with battery strings and usually a generator behind them.

## Inside plant at the customer end

At the far end of the network there is a second, much smaller inside plant. In a single-family home it is a box on the wall, the optical network terminal (ONT), which turns light back into Ethernet. In a multi-dwelling unit (MDU), it also includes the building entrance point, riser cables through the shafts, and small terminals on each floor.

Practice varies by country. In the United States the ONT is often mounted on an outside wall or in a garage, with the customer's own wiring beyond it. In India, apartment blocks are common and the fiber usually runs through shared risers or along the building face to an ONT inside the flat. In Australia, the National Broadband Network (NBN) installs an outside wall unit and an inside connection box.

## Different rules, different skills

Inside plant is governed more by building codes and structured cabling standards than by the outdoor rules that shape outside plant (OSP). Fire ratings, bend radius, grounding and bonding, rack layout and airflow all matter here. The people who do it well are equipment installers, power engineers and structured cabling technicians rather than linemen and splicers.

## Final thoughts

Inside plant gets less attention because it rarely holds up a project. But every design decision made on the street ends at a port in that noisy room, and a designer who understands both sides makes better choices.

Have you ever been inside a central office, and what surprised you most?
