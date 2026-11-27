---
title: "NBN Australia's Technology Mix, From FTTP to Fixed Wireless"
excerpt: "A plain-English guide to Australia's NBN technology mix, covering FTTP, FTTC, FTTN, HFC, fixed wireless and satellite, and what it means for designers."
categories:
  - "Telecom project delivery and careers"
tags:
  - "NBN technology mix"
  - "FTTP Australia"
  - "FTTC FTTN difference"
  - "HFC NBN"
  - "fixed wireless NBN"
header:
  image: /assets/images/posts/098-nbn-australia-s-technology-mix-from-fttp-card.png
  teaser: /assets/images/posts/098-nbn-australia-s-technology-mix-from-fttp-card.png
  og_image: /assets/images/posts/098-nbn-australia-s-technology-mix-from-fttp-card.png
queue_number: 98
---

On a single Australian street you can sometimes see three generations of access network within fifty metres. A green cabinet on the nature strip is a fibre-to-the-node cabinet. A small pit lid near a fence hides a fibre-to-the-curb unit. A black coaxial cable on a pole is the old pay-television network, now carrying broadband. Three houses, three technologies, one name on the bill.

That is the National Broadband Network (NBN), and its technology mix is one of the more unusual things about working on fibre in Australia.

## How the mix came about

NBN is a government-owned wholesaler. It builds and operates the access network and sells to retail providers, who sell to the public. The original plan was fibre to the premises for most homes. In the mid-2010s this changed to a multi-technology mix that reused existing copper and coaxial networks to speed up the rollout. More recently the direction has swung back, with programs upgrading copper areas to full fibre.

The technology at a given address therefore depends on when and how that area was built.

## The technologies, one by one

| Technology | Last link to the premises | Where the fibre ends |
| --- | --- | --- |
| FTTP (fibre to the premises) | Fibre | Inside the home or business |
| FTTC (fibre to the curb) | Short copper lead-in | A small unit in the street pit |
| FTTN (fibre to the node) | Existing copper over hundreds of metres | A street cabinet |
| HFC (hybrid fibre coaxial) | Coaxial cable | An optical node serving a neighbourhood |
| Fixed wireless | Radio link | A tower serving a rural area |
| Satellite | Radio link to orbit | A ground station |

FTTP is the one most readers of this blog design for. It is a passive optical network (PON) with splitters in the field, much like fibre-to-the-home (FTTH) networks in the US and India. The Australian spelling is fibre; the US spelling is fiber.

FTTC runs fibre into the existing pit outside the home and uses a distribution point unit (DPU) in the pit to drive the last few metres of copper. The DPU is powered from the customer's modem over the copper pair, so no mains power is needed in the street.

FTTN keeps more copper. Fibre reaches a cabinet, and very-high-bit-rate digital subscriber line (VDSL) technology carries the service over the existing copper to the home. Speed falls as copper length grows, which is why FTTN areas are the main target for fibre upgrades.

HFC reuses the coaxial networks originally built for pay television. Fixed wireless and satellite serve areas where any wired option would cost too much to build.

## What it means for designers

Designing for NBN is less about choosing a technology and more about working within the one already assigned to the area. Most fibre work runs through existing pits and ducts rather than new trenches or aerial strand, so pit and duct records matter as much as pole data does in the US. In India, by contrast, most fibre networks are greenfield builds with no legacy copper, so the mix question rarely comes up.

## Final thoughts

The NBN mix is a reminder that a national network is shaped as much by policy and timing as by engineering. For a designer, knowing the history of an area explains most of what you find in the street. If you live in Australia, which NBN technology serves your address?
