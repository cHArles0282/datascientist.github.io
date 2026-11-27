---
title: "Grounding and Bonding in Fiber Networks Explained Simply"
excerpt: "Why telecom grounding and bonding matter even for glass fiber: metallic cable members, strand bonding, entrance protection and ground testing explained."
categories:
  - "Safety, codes and standards"
tags:
  - "grounding and bonding"
  - "telecom grounding"
  - "strand bonding"
  - "intersystem bonding termination"
  - "ground resistance testing"
header:
  image: /assets/images/posts/088-grounding-and-bonding-in-fiber-networks--card.png
  teaser: /assets/images/posts/088-grounding-and-bonding-in-fiber-networks--card.png
  og_image: /assets/images/posts/088-grounding-and-bonding-in-fiber-networks--card.png
queue_number: 88
---

On the side of a utility pole there is often a bare copper wire running from the top to the ground, protected by a molding for the lowest few feet. At a fiber cabinet on the sidewalk a short green conductor disappears into the dirt beside the concrete pad. Nobody notices either until lightning season, and then they are the most important parts of the network.

Fiber itself carries no electricity, so new designers often assume grounding is someone else's problem. In my experience it is one of the most common findings in field audits, precisely because it is treated as an afterthought.

## Grounding versus bonding

The two words are used together so often that they blur, but they mean different things. Grounding connects a system to the earth, through driven rods, a buried ring or the building's electrical ground, giving lightning and power faults a path to the soil. Bonding connects metallic parts to each other so they sit at the same electrical potential, which protects a technician whose hands are on two pieces of metal at once.

A good installation needs both. A cabinet with a perfect ground rod but an unbonded door is still a shock hazard during a fault.

## Where fiber still needs it

The glass does not conduct, but almost everything around it can.

1. The steel strand that supports aerial cable runs for miles and picks up induced voltage from parallel power lines and direct lightning hits. It is bonded to the pole ground at regular intervals and to the power company's multi-grounded neutral where the pole owner allows.
2. Armored and metallic-sheath cables carry a conductive layer along their whole length. The armor is bonded at every closure and grounded where the cable enters a building or cabinet.
3. Metallic strength members inside otherwise ordinary cables count too, which is why the National Electrical Code (NEC) requires them to be bonded at the entrance.
4. Cabinets, pedestals and racks hold electronics that need a reference ground, and their metal shells need bonding so a fault cannot energize the enclosure.
5. All-dielectric self-supporting (ADSS) cable and all-dielectric drop cable contain no metal at all, and this is one of their main attractions: no bonding, no grounding and no path for lightning into the home.

At a building entrance, the metallic members of communications cables are bonded to an intersystem bonding termination, a bar tied to the electrical service ground, so every system in the building shares one reference.

## Testing and standards

Ground resistance is measured with a fall-of-potential tester, or a clamp-on meter where a loop exists. The widely cited NEC threshold for a single ground rod is 25 ohms, with a second rod required if that is not met. Telecom sites aim much lower, and central offices use ground rings and a master ground bar with single-point connections to keep noise out of the equipment.

In the United States the governing documents are the NEC for premises and ANSI/TIA-607 for telecommunications bonding and grounding, with Telcordia generic requirements covering central offices. Australia relies on the AS/NZS 3000 wiring rules and its customer cabling standard. India uses IS 3043, the Indian code of practice for earthing, and in my experience dry soil there makes low resistance a real design task rather than a formality.

## Final thoughts

A fiber network can run for years without its grounding ever being tested, right up until the storm that finds the gap.

When was the last time your project actually measured a ground, rather than assuming it?
