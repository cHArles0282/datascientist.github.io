---
title: "Laser Safety With Fiber: Why You Never Look Into the End"
excerpt: "Fiber networks carry invisible infrared laser light. Here is why staring into a connector is dangerous and the habits that keep fiber technicians safe."
categories:
  - "Safety, codes and standards"
tags:
  - "fiber optic laser safety"
  - "infrared light"
  - "1550 nm"
  - "visual fault locator"
  - "fiber inspection scope"
header:
  image: /assets/images/posts/086-laser-safety-with-fiber-why-you-never-lo-card.png
  teaser: /assets/images/posts/086-laser-safety-with-fiber-why-you-never-lo-card.png
  og_image: /assets/images/posts/086-laser-safety-with-fiber-why-you-never-lo-card.png
queue_number: 86
---

A technician opens a fiber distribution cabinet, unplugs a connector reporting an alarm, and holds it up to the light to check the ferrule. Nothing is glowing. Nothing is warm. Every instinct says it is safe to take a closer look.

That instinct is wrong, which is why laser safety training exists in every fiber organization I have worked with. The light in that connector is real, possibly powerful, and invisible to the human eye.

## Invisible is the whole problem

Fiber optic transmission uses infrared light. The common wavelengths in access and transport networks are 1310 nanometers (nm) and 1550 nm, with passive optical networks (PON) adding 1490 nm for downstream traffic in GPON and 1577 nm in XGS-PON. Human vision ends around 700 nm, so everything the network sends is invisible.

Visible light triggers the blink reflex before damage occurs. Infrared gives no warning. The lens still focuses it onto the retina, where it is absorbed as heat, and the retina has no pain receptors, so the first sign of damage may be a blind spot noticed days later.

## Where the higher powers hide

Not every fiber is equally dangerous. A transceiver in an office switch is low power. Other parts of the network are not.

| Source | Why it matters |
|---|---|
| Optical amplifiers in long-haul and metro links | Launch power many times that of a standard transceiver |
| RF video overlay transmitters at 1550 nm in older PON systems | Amplified to reach many homes at once |
| The feeder side of a PON splitter | Carries the combined downstream signal before it is split to 32 or 64 homes |
| An OTDR (optical time domain reflectometer) during a test | Sends pulses that may be unexpected at the far end |
| A visual fault locator (VFL) | Visible red light, bright enough to be uncomfortable |

Laser products and fiber systems are classified under International Electrotechnical Commission (IEC) standards. Most access ports are low hazard, but amplifier sites and feeder cables are treated as higher hazard and labeled accordingly.

## Habits that keep eyes and hands safe

The first habit is simple: assume every fiber is live until an optical power meter proves otherwise. It is the only tool that can tell you what is on a fiber.

The second is to inspect connectors with a video scope rather than a direct-view microscope. A video scope puts a camera between your eye and the fiber; a direct-view scope puts a magnifying lens there, which concentrates the light.

Third, cap every open port and disconnected connector. Dust caps protect the end face and the next person who walks past.

Fourth, respect the VFL. Its red light feels harmless, but it is still a laser and should never be pointed at anyone.

Finally, there are fiber shards. Every cleave leaves a sliver of glass thinner than a hair that enters skin unfelt and will not show on an X-ray. Work over a dark mat, collect shards in a sealed container, and keep hands away from eyes and mouth until washed.

These rules do not change between countries. An AT&T, NBN or Reliance Jio site uses the same wavelengths and the same physics.

## Final thoughts

Fiber safety is unusual because the most dangerous thing on the job cannot be seen, heard, felt or smelled. The habits are easy. The hard part is keeping them on the thousandth connector of the month.

What is one fiber safety habit you had to unlearn from an earlier job?
