---
title: "Common Fiber Faults and How Technicians Locate Them"
excerpt: "Breaks, macrobends, bad splices and dirty connectors, what each looks like on an OTDR, how fiber distance is matched to the street, and the tools used."
categories:
  - "Testing and quality"
tags:
  - "fiber fault location"
  - "fiber break"
  - "OTDR fault finding"
  - "visual fault locator"
  - "fiber identifier"
header:
  overlay_image: /assets/images/posts/049-common-fiber-faults-and-how-technicians--photo.jpg
  overlay_filter: 0.55
  teaser: /assets/images/posts/049-common-fiber-faults-and-how-technicians--photo.jpg
  og_image: /assets/images/posts/049-common-fiber-faults-and-how-technicians--photo.jpg
queue_number: 49
---

A backhoe is parked beside a fresh trench, and a few metres of orange duct lie in the spoil, torn open at one end. Somebody's phone is already ringing with the outage report. Nobody needs an instrument to find this fault. Most fiber faults are not so polite. They hide inside a closure, under a cable tie, or in a locked patch panel, and the only clue is a number on a screen.

I have come to think of fault finding as a short list of suspects, each with a signature.

## The usual suspects

| Fault | OTDR signature | Usual cause |
|---|---|---|
| Complete break | Large reflection, then noise | Excavation, vehicle strike, rodents |
| Macrobend | Non-reflective loss, far larger at 1550 nm | Cable tie, pinched door, tight coil |
| Bad fusion splice | Non-reflective loss, same at both wavelengths | Poor cleave, dirt, misalignment |
| Cracked fiber or air gap | Reflection where a splice should be | Mishandling, closure stress |
| Dirty or damaged connector | Reflective, high loss at a connector | Contamination, mismatched connectors |

The pattern worth memorising is the wavelength test. A loss that grows at the longer wavelength is a bend. A loss that is the same at both is a splice. A reflection where there should be none is a crack or an air gap, or a flat ultra physical contact (UPC) connector mated to an angled physical contact (APC) one.


<figure>
  <img src="{{ "/assets/images/posts/049-common-fiber-faults-and-how-technicians--diagram.jpg" | relative_url }}" alt="Diagram: Common Fiber Faults and How Technicians Locate Them">
  <figcaption>Common Fiber Faults and How Technicians Locate Them</figcaption>
</figure>

## Turning a distance into a place

The OTDR (optical time domain reflectometer) gives a distance along the fiber. The street gives a distance along the cable, and they are not the same. Fiber inside a loose-tube cable is slightly longer than the cable, and the route includes slack coils the map may not show. Over a long route the difference can reach tens of metres, enough to dig in the wrong place.

The fix is to work from known events. Closures appear on the trace at distances that match real splice points, and the fault is measured from the nearest one. Sheath markings on the cable then confirm the position on site. A good as-built record with slack lengths noted makes this quick; a bad one makes it a guess.

## The rest of the toolkit

A visual fault locator (VFL) is a bright red laser that makes a nearby break or tight bend glow through the coating inside a closure or patch panel. A fiber identifier clamps on and detects live traffic through a tiny induced bend, confirming which fiber is which before anyone cuts it. A power meter at the customer end answers the simplest question: is there enough light or not?

Identity matters as much as distance. Most cables follow the TIA-598 colour sequence of blue, orange, green, brown, slate, white, red, black, yellow, violet, rose and aqua for tubes and fibers, but some use other codes, so check the datasheet first.

## Preventing the biggest one

Excavation damage is the most expensive fault on the list. In the United States, the national 811 call-before-you-dig system makes locating buried plant a required step, and Australia has a similar service. India has no equivalent, and in my experience dig-ins are more common, so marker tape and good route records matter even more there.

## Final thoughts

Every fault leaves a signature, and most of the time the instrument is telling you what it is before you leave the office. What is the strangest cause of a fiber fault you have ever confirmed in the field?
