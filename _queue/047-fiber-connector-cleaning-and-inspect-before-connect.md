---
title: "Fiber Connector Cleaning and Inspect-Before-Connect"
excerpt: "Why a dirty connector is the most common fiber fault, the inspect-clean-inspect routine, and the IEC zones that decide whether an end face is clean."
categories:
  - "Testing and quality"
tags:
  - "fiber connector cleaning"
  - "fiber inspection"
  - "inspect before connect"
  - "IEC 61300-3-35"
  - "dirty connector"
header:
  image: /assets/images/posts/047-fiber-connector-cleaning-and-inspect-bef-card.png
  teaser: /assets/images/posts/047-fiber-connector-cleaning-and-inspect-bef-card.png
  og_image: /assets/images/posts/047-fiber-connector-cleaning-and-inspect-bef-card.png
queue_number: 47
---

Open the door of a busy fiber distribution cabinet and you will see a wall of green ports, half with dust caps dangling on little cords, a few with no caps at all. A technician arrives with a patch cord, pulls off the cap, and plugs straight in. Nine times out of ten it works. The tenth time starts a fault that is chased for two days with an OTDR (optical time domain reflectometer) before someone looks at the end face.

Ask anyone who has spent years on fiber what the most common fault is, and the answer is not a break. It is dirt.

## Why something you cannot see matters

The core of a single-mode fiber is about 9 micrometres across, far thinner than a human hair, and all the light travels through that spot. A dust particle is often larger than the core. On the end face it can block light, scatter it, or hold the two ferrules apart and create an air gap. Skin oil from a fingertip spreads into a film that does the same more subtly.

Worse, contamination transfers. Mate a clean connector to a dirty one and you have two dirty connectors. Under enough optical power, a particle trapped between ferrules can be burned into the glass, leaving a permanent pit.

## The routine that prevents it

The habit is called inspect-before-connect, and it is simple enough to teach in five minutes.

1. Inspect the end face with a fiber microscope or video probe. Never assume a capped connector is clean; caps shed material too.
2. If it fails, dry clean with a click-type cleaner or a fresh lint-free wipe, in one direction.
3. Inspect again.
4. If it still fails, wet clean with a little reagent-grade isopropyl alcohol on a wipe, then dry immediately on a clean section.
5. Inspect again, and connect only once it passes.
6. Inspect the female side too. A probe with a bulkhead tip reaches into the port, where most cabinet dirt lives.
7. Re-cap every port you leave open.

Canned air is not a cleaning tool. It can leave propellant residue and simply moves particles around.

## What clean means

The pass/fail criteria most of the industry uses come from IEC 61300-3-35. It divides the end face into zones: core, cladding, adhesive ring and contact area. Each zone has limits on the number and size of scratches and defects, with the core zone strictest. Modern probes apply these rules automatically and show a green or red result, which removes most of the arguing.

One more rule. An ultra physical contact (UPC) connector is polished flat; an angled physical contact (APC) connector is polished at 8 degrees and is standard in passive optical networks. Never mate them to each other. Doing so damages both and produces a loss no cleaning will fix.

## Climate and habit

In hot, dusty conditions such as much of India in the dry season, I have seen outdoor cabinets fill with fine dust far faster than in a temperate climate, so the routine has to run more often. The procedure is identical in the United States and Australia. What varies most is not the environment but whether the crew has a working probe in the van and the discipline to use it every time.

## Final thoughts

A microscope costs less than a single truck roll, and it prevents the fault that causes more truck rolls than any other. Does your team inspect every connector before mating, or only when something has already gone wrong?
