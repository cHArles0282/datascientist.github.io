---
title: "Single-Mode vs Multimode Fiber, Core Size and Distance"
excerpt: "How single-mode and multimode fiber differ in core size, light source, reach and cost, and why outside plant networks use single-mode almost everywhere."
categories:
  - "Fiber cable and splicing"
tags:
  - "single-mode fiber"
  - "multimode fiber"
  - "OM3 OM4"
  - "fiber core size"
  - "fiber optic distance"
header:
  overlay_image: /assets/images/posts/032-single-mode-vs-multimode-fiber-core-size-photo.jpg
  overlay_filter: 0.55
  teaser: /assets/images/posts/032-single-mode-vs-multimode-fiber-core-size-photo.jpg
  og_image: /assets/images/posts/032-single-mode-vs-multimode-fiber-core-size-photo.jpg
queue_number: 32
---

Walk into a data center and look at the patch cords. Some are yellow, some are orange or aqua. The colors are not decoration. They tell you at a glance whether the glass inside is single-mode or multimode, and that decides how far the light can travel and what equipment can plug into it.

On projects I have worked on, confusion between the two usually shows up at the building entrance, where an outdoor single-mode cable meets an indoor multimode system and someone discovers the transceivers do not match.

## The core is the difference

Every optical fiber has a glass core surrounded by a glass cladding, and nearly all telecom fiber has a cladding of 125 microns. What changes is the core.

Single-mode fiber has a core of roughly 9 microns. It is so narrow that light travels in a single path, or mode, straight down the middle. Multimode fiber has a much larger core, either 50 or 62.5 microns. Light enters at many angles and bounces along many paths at once.

Those multiple paths arrive at slightly different times. The pulse spreads, which is called modal dispersion, and that spreading is what limits how far and how fast multimode can carry a signal.


<figure>
  <img src="{{ "/assets/images/posts/032-single-mode-vs-multimode-fiber-core-size-diagram.jpg" | relative_url }}" alt="Diagram: Single-Mode vs Multimode Fiber, Core Size and Distance">
  <figcaption>Single-Mode vs Multimode Fiber, Core Size and Distance</figcaption>
</figure>

## Distance and wavelength

Single-mode is used with laser sources at 1310 and 1550 nanometers (nm), the two low-loss windows of silica glass. With no modal dispersion, it carries signals for tens of kilometers without amplification, which is why every outside plant (OSP) network I have worked on, whether in the US, Australia or India, is built on single-mode glass.

Multimode is used at 850 nm with cheaper light-emitting diode (LED) or vertical-cavity laser (VCSEL) sources. It is graded by category. OM1 and OM2 are the older 62.5 and 50 micron types. OM3 and OM4 are laser-optimized 50 micron fibers that support 10 Gb/s to about 300 and 400 meters respectively. OM5 adds support for short-wavelength multiplexing.

| Property | Single-mode (OS2) | Multimode (OM3/OM4) |
| --- | --- | --- |
| Core diameter | About 9 microns | 50 microns |
| Typical wavelengths | 1310 and 1550 nm | 850 nm |
| Reach | Tens of kilometers | Hundreds of meters |
| Jacket color | Yellow | Aqua (OM1/OM2 orange) |
| Typical use | OSP, FTTH, long haul | Data centers, in-building |

## Where each one lives

Single-mode owns the outdoors. Fiber to the home (FTTH), mobile backhaul, metro rings and submarine cables all use it, because the distances are long and the fiber itself is inexpensive. The cost sits in the transceivers, which need precise lasers to launch into a 9 micron core.

Multimode owns short links inside buildings and data halls. Its wide core tolerates cheaper optics and slightly dirtier connectors, so a rack-to-rack link of a few tens of meters is cheaper end to end. The trend, though, is toward single-mode even indoors, because 100 Gb/s and faster optics have made the price gap smaller and operators prefer one fiber type.

## Mistakes to avoid

Never plug a single-mode transmitter into multimode fiber and expect it to work reliably, and never do the reverse. A single-mode laser into a 50 micron core causes differential mode delay, and a multimode source into a 9 micron core loses most of its light at the first connector. Keep the colors consistent and label both ends.

## Final thoughts

The rule of thumb I give new designers is simple. If it goes outside, it is single-mode. If it stays within one room and under a few hundred meters, multimode is an option, but check the equipment first.

Have you ever had to replace a multimode run because the building outgrew it?
