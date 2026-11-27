---
title: "Fiber Connectors Explained, SC, LC, MPO and APC vs UPC"
excerpt: "A guide to SC, LC and MPO fiber connectors, the difference between APC and UPC polish, and why the green angled ones matter in FTTH networks."
categories:
  - "Fiber cable and splicing"
tags:
  - "fiber optic connectors"
  - "SC APC connector"
  - "LC connector"
  - "MPO connector"
  - "APC vs UPC"
header:
  image: /assets/images/posts/040-fiber-connectors-explained-sc-lc-mpo-and-card.png
  teaser: /assets/images/posts/040-fiber-connectors-explained-sc-lc-mpo-and-card.png
  og_image: /assets/images/posts/040-fiber-connectors-explained-sc-lc-mpo-and-card.png
queue_number: 40
---

Look behind the small white box on a wall where fiber enters a home and you will find a thin yellow cord with a green plug. In the office data room down the road, the same yellow cord ends in a blue plug half the size. Both carry single-mode fiber, yet plugging one into the other is one of the quickest ways to ruin a link.

In my experience, connector mistakes cause more mysterious loss than bad splices, because connectors look alike and dirt and polish type are invisible until you test.

## The common connector bodies

A connector holds the fiber end in a ceramic ferrule and presses two ferrules face to face inside an adapter. Three bodies cover most of what you will meet.

| Connector | Ferrule size | Latch | Where you see it |
| --- | --- | --- | --- |
| SC | 2.5 mm | Push-pull | FTTH terminals, ONTs, outside plant panels |
| LC | 1.25 mm | Small clip, like a phone plug | Transceivers, high-density patch panels |
| MPO | Flat multi-fiber ferrule | Push-pull with key | 12 or 24 fiber ribbon links, data centers |

SC, the subscriber connector, is square and sturdy, which suits field terminals and customer equipment. LC, the Lucent connector, has half the ferrule diameter, so twice as many fit on a panel, which is why it dominates equipment racks. MPO, the multi-fiber push-on, holds a whole ribbon in one ferrule and is the standard for parallel optics and pre-terminated cabling. Older bayonet ST and screw-on FC types still appear on legacy equipment.

## UPC and APC polish

The ferrule end face is polished so the two fiber cores touch directly, which is called physical contact. Two polishes are in common use.

Ultra physical contact (UPC) is a slightly domed, flat-facing polish. It gives low loss, but any light reflected at the junction travels straight back toward the source. UPC connectors are blue on single-mode.

Angled physical contact (APC) polishes the face at an angle of 8 degrees. Reflected light is sent into the cladding and lost rather than bouncing back down the core. APC connectors are green on single-mode. Return loss, which measures how little light comes back, is typically 50 dB or better for UPC and 60 dB or better for APC.

## Why the green ones matter

Reflections hurt some systems more than others. Passive optical networks (PON) that deliver fiber to the home carry downstream signals, and in some designs an analog video wavelength, over long unamplified links. Back-reflections into the laser cause noise and, in analog video, visible interference. That is why FTTH networks in the US, Australia and India use green APC connectors from the central office to the customer. One blue UPC plug in that chain can wreck return loss for every customer behind it.

Never mate APC to UPC. The angled face meets the flat face at a corner, leaving an air gap that causes high loss and can chip the ferrule. Adapters are color coded to help, but a determined person can still force them.

## Cleaning and inspection

A fiber core is far smaller than a grain of sand, and a speck of dust blocks a surprising amount of light. Inspect with a scope before every mating, clean with a click cleaner or lint-free wipe, and inspect again. Most "bad connectors" I have seen were dirty connectors.

## Final thoughts

Learn the three bodies, remember blue is UPC and green is APC, and treat the end face like a lens. Those habits prevent most connector problems.

Which connector mix-up have you seen most often in the field, and how did it get caught?
