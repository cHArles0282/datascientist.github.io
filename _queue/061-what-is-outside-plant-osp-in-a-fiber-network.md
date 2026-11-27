---
title: "What Is Outside Plant (OSP) in a Fiber Network?"
excerpt: "Outside plant (OSP) is everything between the central office and the customer's building. Here is what it includes and why it drives project cost."
categories:
  - "OSP design and engineering"
tags:
  - "outside plant"
  - "OSP fiber"
  - "FTTH network design"
  - "feeder and distribution cable"
  - "telecom infrastructure"
header:
  image: /assets/images/posts/061-what-is-outside-plant-osp-in-a-fiber-net-card.png
  teaser: /assets/images/posts/061-what-is-outside-plant-osp-in-a-fiber-net-card.png
  og_image: /assets/images/posts/061-what-is-outside-plant-osp-in-a-fiber-net-card.png
queue_number: 61
---

Walk down almost any street and you will pass it without noticing. A grey dome closure hanging from a strand between two poles. A green pedestal at the edge of a lawn. A round cover in the footpath stamped with a telecom name. All of that is outside plant, and it is where most of the money and most of the risk in a fiber project sits.

People outside the industry often picture fiber as something that happens in a data centre. In practice, the hard part is the last few kilometres along the street.

## What counts as outside plant

Outside plant (OSP) is every part of the network that lives outside the walls of a building. It begins where the cable leaves the central office (CO), the operator's local equipment site, and it ends where service enters the customer's premises.

A simple test I use: if rain can fall on it or dirt can be shoveled over it, it is outside plant.

## The main building blocks

A fiber-to-the-home (FTTH) network is usually described in layers, working outward from the CO.

| Element | Job | Typical form |
|---|---|---|
| Feeder cable | Carries many fibers from the CO toward a neighbourhood | High-count, aerial or underground |
| Fiber distribution hub (FDH) | Holds splitters, breaks feeder into distribution | Ground or pole-mounted cabinet |
| Distribution cable | Runs along streets past homes | Often 12 to 144 fibers |
| Terminal | Access point where drops connect | Pedestal, handhole or aerial terminal |
| Drop cable | Last link to the home | Low-count, often flat and reinforced |
| Splice closure | Protects fiber joints from weather | Sealed dome or inline unit |

The optical splitter is what makes a passive optical network (PON) work. One feeder fiber enters and is split, commonly 32 ways, so that many homes share a single port back at the CO.

## Aerial, underground and direct buried

There are three ways to place OSP cable.

Aerial cable rides on poles, either lashed to a steel messenger strand or built as all-dielectric self-supporting (ADSS) cable with no metal in it. It is fast and cheap to build but exposed to vehicles, storms and tree growth.

Underground cable sits in conduit or duct, with manholes and handholes at intervals for pulling and splicing. It costs more up front but lasts longer and is easier to upgrade.

Direct buried cable goes straight into a trench with no duct. It is common in rural areas, but repairs are slow.

In the United States, aerial plant on joint-use poles shared with the power utility is very common. In India, much of the route goes underground in high-density polyethylene (HDPE) duct along road edges, with aerial used heavily in dense urban pockets. In Australia, the National Broadband Network (NBN) reused a large existing system of pits and ducts, so underground dominated.

## Why OSP drives the budget

The cable itself is rarely the expensive part. Trenching, boring, pole attachments, make-ready work on crowded poles, permits, traffic control and surface restoration are what add up. Every one of those is shaped at the design stage. A route that avoids a road crossing or reuses an existing duct can save more than any discount on hardware.

## Final thoughts

Outside plant is the unglamorous half of a fiber network, but it decides whether a project finishes on time and on budget. If you are starting out, learning to read a street the way a field engineer does is worth more than any software skill.

What was the first piece of outside plant you noticed on your own street once you knew what to look for?
