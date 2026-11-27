---
title: "OTDR Testing Explained and How to Read a Trace"
excerpt: "How an optical time domain reflectometer sends pulses down a fiber, what the trace shows, and the settings that decide whether your results mean anything."
categories:
  - "Testing and quality"
tags:
  - "OTDR testing"
  - "OTDR trace"
  - "fiber testing"
  - "launch cable"
  - "dead zone"
header:
  overlay_image: /assets/images/posts/043-otdr-testing-explained-and-how-to-read-a-photo.jpg
  overlay_filter: 0.55
  teaser: /assets/images/posts/043-otdr-testing-explained-and-how-to-read-a-photo.jpg
  og_image: /assets/images/posts/043-otdr-testing-explained-and-how-to-read-a-photo.jpg
queue_number: 43
---

It is nearly midnight in a splice van parked behind a cabinet. The only light is a screen showing a line that slopes gently downwards, with a few small steps and one tall spike near the right-hand side. The technician points at the spike: "That's your break, about four hundred metres past the last closure." To anyone new, it looks like a stock chart. To the technician, it is a map of the fiber.

That instrument is an optical time domain reflectometer, or OTDR, and reading its trace is a skill worth having even if you never operate one yourself.

## How an OTDR sees along the fiber

An OTDR works like radar. It fires a short laser pulse into the fiber and listens. Two things come back. The first is Rayleigh backscatter, the faint glow of light scattered backwards by the glass itself, arriving continuously as the pulse travels. The second is Fresnel reflection, a sharper echo from anywhere the light meets an abrupt change in refractive index: a connector, a crack or the end of a broken fiber.

The instrument converts the time of each echo into distance using the fiber's index of refraction (IOR). Enter the wrong IOR and every distance is wrong by the same proportion, a common source of arguments between test sheet and sheath markings.


<figure>
  <img src="{{ "/assets/images/posts/043-otdr-testing-explained-and-how-to-read-a-diagram.jpg" | relative_url }}" alt="Diagram: OTDR Testing Explained and How to Read a Trace">
  <figcaption>OTDR Testing Explained and How to Read a Trace</figcaption>
</figure>

## Reading the trace

| What you see | What it usually is |
|---|---|
| Steady downward slope | Normal fiber attenuation |
| Small step down, no spike | Fusion splice or a bend |
| Spike with a step down | Connector or mechanical splice |
| Large spike then noise | End of fiber, or a break |
| Step upwards (a gainer) | Splice between fibers with different backscatter |

The slope gives attenuation per kilometre. A bend looks like a splice, except that it is much worse at 1550 nm than at 1310 nm, which is why testing at two wavelengths is standard practice.

## Settings that decide whether the result is real

Pulse width is the main trade-off. A short pulse resolves events close together but cannot reach far. A long pulse reaches further but blurs nearby events into one. Related are dead zones, the short stretch after any reflection where the OTDR is blinded and cannot see a second event.

That is why launch and receive cables matter. A launch cable of a few hundred metres between the OTDR and the link moves the instrument's own dead zone out of the way so the first connector of the real link can be measured. A receive cable does the same for the last one. Skipping them is the most common reason a report looks fine but misses both end connectors.

## Where the OTDR fits

An OTDR measures from one end and infers loss from backscatter. It is superb for locating events, but it does not measure how much light actually reaches the far end. For that, a light source and power meter test is still required. In my experience the deliverables differ more by operator than by country: in the United States, India and Australia alike, a typical acceptance package includes traces at two wavelengths plus a power meter result, with bidirectional traces on backbone routes.

## Final thoughts

An OTDR trace is a story told in distance and decibels, and once you can read it, a fault that would take a day to find by guesswork takes an hour. What was the first trace feature that fooled you, and how did you learn to recognise it?
