---
title: "How Fiber Loses Light and Why We Measure It in dB"
excerpt: "A plain-English guide to fiber attenuation, decibels, dBm and why 1550 nm travels further than 1310 nm, written for new FTTx designers and technicians."
categories:
  - "Testing and quality"
tags:
  - "fiber attenuation"
  - "decibel"
  - "dBm vs dB"
  - "optical loss"
  - "single-mode fiber"
header:
  overlay_image: /assets/images/posts/041-how-fiber-loses-light-and-why-we-measure-photo.jpg
  overlay_filter: 0.55
  teaser: /assets/images/posts/041-how-fiber-loses-light-and-why-we-measure-photo.jpg
  og_image: /assets/images/posts/041-how-fiber-loses-light-and-why-we-measure-photo.jpg
queue_number: 41
---

Stand next to a technician at an open pedestal and you will hear numbers that sound like a weather report. "Minus twenty-three point four at the terminal." "We lost half a dB at that closure." The meter shows a minus sign, and the new drafter beside them wonders whether minus is good or bad.

It is a fair question. Almost everything in fiber testing comes back to one idea: light goes in at one end, less comes out at the other, and we describe the difference in decibels. Once that clicks, OTDR (optical time domain reflectometer) traces, loss budgets and acceptance sheets become readable.

## Why glass loses light at all

Optical fiber is extraordinarily clear, but not perfect. Three things take light away.

The first is scattering. Tiny density variations in the glass scatter a small fraction of the light in all directions. This is Rayleigh scattering, the main loss in modern single-mode fiber, and longer wavelengths scatter less. That is the physics behind a number designers memorise: standard single-mode fiber (ITU-T G.652) loses roughly 0.35 dB per kilometre at 1310 nm and around 0.2 dB per kilometre at 1550 nm.

The second is absorption. Impurities, especially traces of water, absorb light at specific wavelengths. Modern low water peak fiber has largely removed the old problem around 1383 nm.

The third is bending. Light that meets the core-cladding boundary too steeply escapes, and bend loss is also worse at longer wavelengths.


<figure>
  <img src="{{ "/assets/images/posts/041-how-fiber-loses-light-and-why-we-measure-diagram.jpg" | relative_url }}" alt="Diagram: How Fiber Loses Light and Why We Measure It in dB">
  <figcaption>How Fiber Loses Light and Why We Measure It in dB</figcaption>
</figure>

## What a decibel actually is

A decibel (dB) is not a quantity of light. It is a ratio on a logarithmic scale: ten times the base-ten logarithm of output power divided by input power. The result is a short table worth memorising.

| Loss in dB | Power remaining |
|---|---|
| 0 dB | 100 percent |
| 1 dB | about 79 percent |
| 3 dB | about 50 percent |
| 10 dB | 10 percent |
| 20 dB | 1 percent |
| 30 dB | 0.1 percent |

Engineers use dB because losses simply add. Fiber, splices and a splitter can each be written in dB and summed, arithmetic you can do on a tailgate.

## dB versus dBm

Here is where the minus sign comes from. A power meter reads dBm, power compared with a fixed reference of one milliwatt. Zero dBm is one milliwatt. Minus 3 dBm is half a milliwatt. Minus 30 dBm is one microwatt. So minus 23.4 dBm is not negative light; it is a small but healthy amount of power.

The rule I give every new tester: dBm is a level, dB is a difference. Subtract two dBm readings and you get a loss in dB. Mixing them up is the most common error on test sheets.

## Why we test at more than one wavelength

Because loss depends on wavelength, one reading never tells the whole story. Most access networks are tested at 1310 nm and 1550 nm, sometimes also at 1625 nm. A link that passes at 1310 nm but fails at 1550 nm almost always has a bend somewhere, because bends punish the longer wavelength more. The physics is identical in the United States, India and Australia; what differs is the paperwork, since each operator's acceptance specification sets the wavelengths and the pass threshold.

## Final thoughts

Decibels feel abstract until you tie them to the question that matters: how much light arrives at the far end, and is it enough? Which part of dB arithmetic confused you most when you started, and what finally made it make sense?
