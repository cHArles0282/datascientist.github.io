---
title: "Central Office, POP and FDH: Where a Fiber Network Begins"
excerpt: "What a central office, a POP and a fiber distribution hub each do, what sits inside them, and how fiber flows from the exchange to the street."
categories:
  - "Network architecture"
tags:
  - "central office"
  - "point of presence"
  - "fiber distribution hub"
  - "FDH cabinet"
  - "telecom exchange"
header:
  overlay_image: /assets/images/posts/057-central-office-pop-and-fdh-where-a-fiber-photo.jpg
  overlay_filter: 0.55
  teaser: /assets/images/posts/057-central-office-pop-and-fdh-where-a-fiber-photo.jpg
  og_image: /assets/images/posts/057-central-office-pop-and-fdh-where-a-fiber-photo.jpg
queue_number: 57
---

In most towns there is a plain brick building with no windows, no sign and a locked steel door. There is a generator behind a fence and a cluster of manhole covers on the footpath outside. Every telephone line and every fiber in the district ends inside that building.

New designers hear three names for the places where a network begins and branches: the central office, the point of presence and the fiber distribution hub. Knowing what sits inside each one makes an outside plant drawing much easier to read.

## The central office

The central office (CO) is the operator's main building for an area. In Australia, India and the United Kingdom the same building is usually called the exchange. It houses the optical line terminals (OLTs) that drive the passive optical networks (PONs), the routers and switches behind them, a large battery plant and a standby generator. Outside plant cables enter through a cable vault and are terminated on an optical distribution frame (ODF), the big patch panel where every feeder fiber gets a labelled port. Its location was chosen for copper, so its serving area reflects how far a telephone pair could reach.

## The point of presence

A point of presence (POP) is a functional term rather than a building type. It means any location where an operator has equipment and connects to the rest of its network or to another carrier's network. A POP might be a cage in a data centre, a small hut beside a highway, or a shelter in a greenfield estate housing a remote OLT. In India, many operators use "POP" for the small room with the OLT that serves a locality, because they never owned a traditional exchange there. The useful distinction is this: a CO is a building the incumbent built around copper; a POP is wherever the active equipment happens to be.

## The fiber distribution hub

The fiber distribution hub (FDH) is where fiber is actually distributed. It is the street cabinet, usually pad-mounted on a concrete base, that receives a feeder cable from the CO or POP, holds the optical splitters, and sends distribution cables out to the neighbourhood. Inside are splitter modules, connector panels and spare "parking" ports for splitter outputs not yet assigned to a customer. There is no power and no electronics. FDHs are sold by port count, with 144, 288, 432 and 576 distribution ports being common sizes, and each one typically serves a few hundred homes.

| Facility | What is inside | Powered | Typical reach |
|---|---|---|---|
| Central office | OLTs, routers, ODF, batteries, generator | Yes | A town or district |
| Point of presence | OLT or transport gear, often a single rack | Yes | Varies with purpose |
| Fiber distribution hub | Splitters, connector panels, parking ports | No | A few hundred homes |

## Regional variations

In the United States the pad-mounted FDH is the norm for underground suburban builds. In Australia, NBN's fiber architecture uses the same hub concept with the same name. In Indian aerial networks the cabinet is often replaced by a large pole- or wall-mounted splitter box, and the first-stage splitter may even sit inside the POP itself. The functions never change; the housing does.

## Final thoughts

The CO or POP is where the light is made, the FDH is where it is divided, and everything downstream is just carrying it to the door. Do you know where your nearest exchange building is?
