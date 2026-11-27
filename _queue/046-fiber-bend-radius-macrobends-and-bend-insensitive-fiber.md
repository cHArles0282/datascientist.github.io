---
title: "Fiber Bend Radius, Macrobends and Bend-Insensitive Fiber"
excerpt: "How tight bends make fiber leak light, minimum bend radius rules, where bends happen on real jobs, and what bend-insensitive G.657 fiber does not fix."
categories:
  - "Testing and quality"
tags:
  - "fiber bend radius"
  - "macrobend loss"
  - "bend-insensitive fiber"
  - "G.657"
  - "fiber faults"
header:
  image: /assets/images/posts/046-fiber-bend-radius-macrobends-and-bend-in-card.png
  teaser: /assets/images/posts/046-fiber-bend-radius-macrobends-and-bend-in-card.png
  og_image: /assets/images/posts/046-fiber-bend-radius-macrobends-and-bend-in-card.png
queue_number: 46
---

Walk past almost any pole with a fiber drop on it and look at how the cable comes off the bracket. Sometimes it sweeps away in a gentle curve. Sometimes it has been cinched down with a cable tie so hard that it turns a corner like a bent coat hanger. Inside a cabinet it is the same story: a patch cord trapped under a door hinge, or slack coiled around two fingers because the storage spool was full.

None of these break the fiber. All of them cost light, and some cost enough to take a customer offline, usually at the longer wavelength first.

## Why a bend leaks light

Light stays inside a fiber because it keeps meeting the boundary between core and cladding at a shallow angle and reflecting back in. Bend the fiber and, on the outside of the curve, part of the light meets the boundary too steeply to be reflected. It escapes into the cladding and is lost.

A bend you can see, such as a cable wrapped around a bracket, is a macrobend. Tiny distortions along the fiber from pressure or uneven stress are microbends. Both leak more at longer wavelengths, because longer wavelengths sit less tightly in the core. That is why a bend shows on an OTDR (optical time domain reflectometer) as a loss that is small at 1310 nm, larger at 1550 nm and larger still at 1625 nm. A loss that grows with wavelength is almost always a bend; a loss that stays the same is almost always a splice.

## Minimum bend radius

There are two different limits, and people mix them up.

The cable has a mechanical limit set by its construction. The common rule of thumb for outdoor cable is ten times the outer diameter with no tension, and twenty times while pulling under load. Always check the datasheet; some cables are stricter.

The fiber itself has an optical limit described by its ITU-T classification.

| Fiber type | Minimum bend radius | Typical use |
|---|---|---|
| G.652.D standard single-mode | specified at 30 mm | Feeder and distribution cable |
| G.657.A1 | 10 mm | General access and drops |
| G.657.A2 | 7.5 mm | Drops, cabinets, in-building |
| G.657.B3 | 5 mm | Tight indoor and multi-dwelling routes |

## Where bends happen on real jobs

Slack storage is the first place I look: coils too small for the handhole, or a figure-eight pulled tight in a pedestal. Closures are next, where fibers are routed around the tray with no spare length. Then cabinet doors, cable ties, wall staples, and duct lips where a cable turned a corner. In multi-dwelling units, fiber pulled through existing conduit with sharp 90 degree boxes is a recurring problem.

## What bend-insensitive fiber does not fix

G.657 fiber tolerates much tighter bends than G.652 before leaking. In the United States, India and Australia alike it is now the usual choice for drops and in-building runs. But it protects the glass, not the cable. A drop crushed under a staple still fails mechanically, and a tight bend that loses no light today can still crack the fiber over years of stress. Bend-insensitive fiber is a safety margin, not a licence to ignore the cable's bend radius.

## Final thoughts

Most bend faults are installed by hand in the last metre of a route, long after the design was finished. What is the tightest bend you have found in service that was still, somehow, passing light?
