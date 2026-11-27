---
title: "BharatNet and India's Push to Bring Fiber to Every Gram Panchayat"
excerpt: "How BharatNet connects India's village councils with GPON fiber, how the approach has changed, and what it teaches rural fiber designers."
categories:
  - "Permitting, right-of-way and funding"
tags:
  - "BharatNet"
  - "rural fiber India"
  - "gram panchayat broadband"
  - "GPON"
  - "PLB HDPE duct"
header:
  image: /assets/images/posts/080-bharatnet-and-india-s-push-to-bring-fibe-card.png
  teaser: /assets/images/posts/080-bharatnet-and-india-s-push-to-bring-fibe-card.png
  og_image: /assets/images/posts/080-bharatnet-and-india-s-push-to-bring-fibe-card.png
queue_number: 80
---

In a village panchayat office, there is often a small grey box on the wall with a thin orange cable running into it and a green light blinking. Outside, a fiber route marker stone sits beside the road, and a white Wi-Fi antenna is bolted to the roof. That box is the end of a fiber link that may have been pulled through dozens of kilometres of duct from the nearest town. It got there because of BharatNet.

BharatNet is India's national program to connect gram panchayats, the village-level councils, with optical fiber. It is the rural backbone that other services are meant to ride on.

## What the program is

The project began as the National Optical Fibre Network (NOFN) and was later renamed BharatNet. It was implemented by Bharat Broadband Network Limited (BBNL), a government special purpose vehicle since merged with the state-owned operator BSNL. Funding comes from the Universal Service Obligation Fund, now known as the Digital Bharat Nidhi, which is built from a levy on operator revenues.

The core idea is simple. The state operator's existing network reaches most block headquarters. BharatNet extends fiber from the block to each gram panchayat under it, then provides a point where local operators, village entrepreneurs and government services can plug in.

## How it is built

The technology is Gigabit Passive Optical Network (GPON), the same family used for fiber to the home. An optical line terminal (OLT) at the block exchange feeds a passive splitter, and an optical network terminal (ONT) at each gram panchayat terminates the link. Cable is typically a modest fiber count armoured cable, laid in permanently lubricated high-density polyethylene (PLB HDPE) duct along the road shoulder, with route markers at intervals.

The program has gone through several phases, and the approach has changed with experience.

| Element | Early approach | Later approach |
|---|---|---|
| Implementer | Central public sector units, fixed design | State-led models and private partners |
| Topology | Linear, block to panchayats in a chain | Ring topology for resilience |
| Media | Underground fiber only | Underground, aerial on power poles, radio or satellite where needed |
| Last mile | Fiber to the panchayat building | Wi-Fi hotspots and fiber to homes through local entrepreneurs |
| Maintenance | Built first, maintained later | Uptime built into the contract |

## The challenges

In my experience, rural fiber in India is hard for the same reasons it is hard anywhere, plus a few of its own. Cable laid in shallow trenches along road shoulders is cut by road widening, drainage work and farmers. Power at the panchayat is unreliable, so the ONT goes dark. Early linear routes meant a single cut took out every panchayat beyond it. And a link that works is not the same as a link that is used, which is why later phases put effort into the last mile and into local operators with a reason to keep it running.

## Why it matters to designers

BharatNet shaped how a generation of Indian fiber engineers think about rural routes, duct standards, route markers and GPON. Its lessons on topology and maintenance apply to any rural build, including federally funded ones in the United States.

## Final thoughts

BharatNet is a long and unfinished story, but it is the reason fiber reaches village offices that no commercial network would have touched.

If you have worked on a BharatNet route, what was the hardest part, the build or keeping it alive afterwards?
