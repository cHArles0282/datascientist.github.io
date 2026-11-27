---
title: "Feeder, Distribution and Drop: The Three Layers of FTTH"
excerpt: "The three layers of FTTH outside plant explained: feeder, distribution and drop cables, with typical fiber counts and hardware for each."
categories:
  - "Network architecture"
tags:
  - "feeder cable"
  - "distribution cable"
  - "fiber drop"
  - "FTTH outside plant"
  - "OSP design"
header:
  overlay_image: /assets/images/posts/056-feeder-distribution-and-drop-the-three-l-photo.jpg
  overlay_filter: 0.55
  teaser: /assets/images/posts/056-feeder-distribution-and-drop-the-three-l-photo.jpg
  og_image: /assets/images/posts/056-feeder-distribution-and-drop-the-three-l-photo.jpg
queue_number: 56
---

Spend a day with a fiber construction crew and you will handle three very different cables. Morning is in a vault on the main road, pulling a thick black cable with hundreds of fibers inside. Afternoon is in a side-street pit with a cable about as thick as a garden hose. The last job is on a porch, clipping a flat cable thinner than a phone charger lead to the wall.

Designers call them feeder, distribution and drop. They are the three layers between the central office and the home in a fiber to the home (FTTH) network, and each one is engineered for a different job.

## Feeder: from the central office to the hub

The feeder carries fibers from the optical line terminal (OLT) in the central office out to the fiber distribution hub (FDH), the street cabinet where splitting usually happens. Fiber counts are high, commonly in the hundreds, and the cable is almost always underground in duct. Each feeder fiber serves a whole passive optical network (PON) of 32 or more homes, so designers keep splice points to a minimum and often build in a second route for diversity. A feeder cut takes out a whole neighbourhood, so this layer gets the most protection.


<figure>
  <img src="{{ "/assets/images/posts/056-feeder-distribution-and-drop-the-three-l-diagram.jpg" | relative_url }}" alt="Diagram: Feeder, Distribution and Drop: The Three Layers of FTTH">
  <figcaption>Feeder, Distribution and Drop: The Three Layers of FTTH</figcaption>
</figure>

## Distribution: from the hub to the neighbourhood

Distribution cables leave the FDH and follow the streets. They typically carry a few dozen to a couple of hundred fibers, and they terminate in splice closures and multiport terminals spaced along the route. In a centralized split design, each fiber in this layer is reserved for one home passed, whether or not that home ever orders service. Distribution can be underground or aerial, and it is where most of the splicing effort lives.

## Drop: from the terminal to the home

The drop is the last link, from a terminal on a pole or in a pit to the optical network terminal (ONT) on the customer's wall. It carries one or two fibers in a small flat or round cable with its own strength members. Drops are often installed only when a customer signs up, not during the main build. They are also the most damaged part of the network: gardeners, fence builders and tree branches find them. At least a drop fault affects one customer rather than a street.

| Layer | Runs from and to | Typical fiber count | Typical hardware |
|---|---|---|---|
| Feeder | Central office to FDH | Hundreds | Duct, vaults, large closures |
| Distribution | FDH to terminals | Dozens to low hundreds | Closures, multiport terminals |
| Drop | Terminal to home | 1 or 2 | Flat drop cable, wall box, ONT |

## How the layers differ by country

In the United States, drops are commonly pre-connectorized, plugging into a hardened port on a multiport service terminal so that no splicing is needed at the house. In India, most access networks are aerial and the drop is usually spliced inside a small pole-mounted terminal, with a one- or two-fiber drop cable running to the home. In Australia, NBN uses its own names for the layers and calls the drop a "lead-in", but the structure is the same three tiers.

## Final thoughts

Once you can see these three layers, the design decisions make sense: why the feeder gets a second route, why the distribution cable is sized for homes that may never connect, and why the drop is cheap and easily replaced. Which layer do you think causes the most outages on your network?
