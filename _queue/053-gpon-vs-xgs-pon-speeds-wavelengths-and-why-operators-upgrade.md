---
title: "GPON vs XGS-PON: Speeds, Wavelengths and Why Operators Upgrade"
excerpt: "GPON and XGS-PON compared in plain English: data rates, the wavelengths each uses, how both share one fiber, and why operators are moving to 10 Gbps PON."
categories:
  - "Network architecture"
tags:
  - "XGS-PON"
  - "GPON"
  - "10G PON"
  - "PON wavelengths"
  - "fiber upgrade"
header:
  overlay_image: /assets/images/posts/053-gpon-vs-xgs-pon-speeds-wavelengths-and-w-photo.jpg
  overlay_filter: 0.55
  teaser: /assets/images/posts/053-gpon-vs-xgs-pon-speeds-wavelengths-and-w-photo.jpg
  og_image: /assets/images/posts/053-gpon-vs-xgs-pon-speeds-wavelengths-and-w-photo.jpg
queue_number: 53
---

A technician kneels at the side of a house, opens a small grey enclosure and unclips the optical network terminal (ONT) that has been there for years. A new one goes in. The fiber on the wall is untouched. The cabinet down the street is untouched. The customer's speed tier has just gone from one gigabit to several. Everything that changed is a wavelength and a box.

That is what a GPON to XGS-PON upgrade usually looks like from the street, and it is the main reason the migration is happening so quickly.

## What GPON gives you

GPON stands for gigabit-capable passive optical network. It is defined in the G.984 series from the ITU-T, the telecom standards body of the International Telecommunication Union, and has been the workhorse of residential fiber for well over a decade. A GPON port delivers 2.488 Gbps downstream and 1.244 Gbps upstream, shared by every ONT on the splitter, typically 32 or 64 homes. It transmits downstream at 1490 nm and receives upstream at 1310 nm. With 1 Gbps retail tiers now common, a fully loaded GPON port is starting to feel tight.


<figure>
  <img src="{{ "/assets/images/posts/053-gpon-vs-xgs-pon-speeds-wavelengths-and-w-diagram.jpg" | relative_url }}" alt="Diagram: GPON vs XGS-PON: Speeds, Wavelengths and Why Operators Upgrade">
  <figcaption>GPON vs XGS-PON: Speeds, Wavelengths and Why Operators Upgrade</figcaption>
</figure>

## What XGS-PON changes

XGS-PON is defined in ITU-T G.9807.1. The "XG" means 10 gigabit and the "S" means symmetric: close to 10 Gbps in both directions on a single port. It moves to different wavelengths, 1577 nm downstream and 1270 nm upstream, which is what makes the upgrade practical.

| Feature | GPON | XGS-PON |
|---|---|---|
| Standard | ITU-T G.984 | ITU-T G.9807.1 |
| Downstream rate | 2.488 Gbps | About 10 Gbps |
| Upstream rate | 1.244 Gbps | About 10 Gbps |
| Downstream wavelength | 1490 nm | 1577 nm |
| Upstream wavelength | 1310 nm | 1270 nm |
| Typical split | 1:32 or 1:64 | 1:32 or 1:64 |

There is also XG-PON, from the ITU-T G.987 series, which is 10 Gbps down and 2.5 Gbps up on the same wavelengths as XGS-PON. Most operators skipped it.

## Why both can share the same fiber

Because the two systems use different wavelengths, they can run on the same outside plant at the same time. At the central office, a coexistence filter combines the GPON and XGS-PON optics onto one feeder fiber. In the field, the splitters, closures and drops do not care which wavelength passes through them. Each ONT simply listens on its own band. This means an operator can light XGS-PON on an existing splitter, swap ONTs customer by customer, and never dig up a street. The optical loss budget needs checking, since the outside plant was designed for GPON, but in my experience a network that closes its GPON budget usually closes XGS-PON as well.

## Why operators are upgrading

Three pressures are driving it. First, retail tiers above 1 Gbps cannot be sold honestly on a 2.5 Gbps shared port. Second, business and work-from-home customers want symmetric upload speeds, which GPON was never built for. Third, the cost of XGS-PON optics has fallen to the point where several large US operators have made it the default for new builds. In India, the huge GPON footprints built over the last decade are the obvious next candidates for the same overlay. Beyond XGS-PON, the ITU-T is standardising 50G-PON on separate wavelengths, so the same trick can be repeated.

## Final thoughts

The elegance of PON is that the expensive part, the fiber in the ground, is wavelength-agnostic. Upgrading the network means upgrading the ends. Has your service been moved to XGS-PON yet?
