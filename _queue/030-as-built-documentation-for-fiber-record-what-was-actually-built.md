---
title: "As-Built Documentation for Fiber: Record What Was Actually Built"
excerpt: "As-builts record where fiber really went, not where the design said. What to capture, why it matters for locates and repairs, and how to make it happen."
categories:
  - "Construction methods"
tags:
  - "as-built documentation"
  - "fiber as-builts"
  - "redline drawings"
  - "GIS fiber records"
  - "OTDR test records"
header:
  image: /assets/images/posts/030-as-built-documentation-for-fiber-record--card.png
  teaser: /assets/images/posts/030-as-built-documentation-for-fiber-record--card.png
  og_image: /assets/images/posts/030-as-built-documentation-for-fiber-record--card.png
queue_number: 30
---

A repair technician pulls up to a street two years after the build, drawing in hand. The drawing shows a handhole at the corner. There is no handhole at the corner. After twenty minutes with a locator and a probe bar, it turns up under new mulch a few meters down the side street, where the crew moved it to avoid a tree root. Nobody wrote that down.

That is the gap between a design and an as-built, and a surprising amount of a network's long-term cost hides there.

## What an as-built is

An as-built is the record of what was actually constructed, as opposed to what was designed. On a fiber build it is not one drawing but a set of records that let someone who was not there find and work on the plant. Most operators now keep the route record in a geographic information system (GIS); redlines are the older method, marked-up design sheets showing every deviation.

| Record | What it captures | Who uses it later |
| --- | --- | --- |
| Route redlines or GIS update | Actual path, offsets from curb, depth at crossings | Locators, future designers |
| Structure records | Handhole, pedestal and pole locations, coordinates, photos | Repair crews |
| Conduit and duct records | Which duct holds which cable, which are spare | Future builds |
| Splice records | Fiber-by-fiber connections at every closure and splitter | Service activation, fault finding |
| Test results | Optical time-domain reflectometer (OTDR) traces and loss measurements | Acceptance, fault comparison |

## Why it matters

The first reason is locating. In the United States, when someone calls 811 before digging, the operator must mark its underground plant. If the record is wrong, the mark is wrong, and the next excavator cuts the cable. The second is repair. A fault distance on an OTDR trace is only useful if you know where it lands on the street. The third is growth. Every future design starts from the existing record; if it says a duct is spare and it is not, the design fails on day one.

There is also payment. On most builds the as-built package is a condition of final acceptance, and in my experience it is the most common reason a closeout is held up.

## What gets missed

The deviations that matter are small and easily forgotten: a bore that went deeper than planned, a closure placed one handhole along from the design, a splitter port swapped during activation, a slack loop coiled somewhere unexpected. None look important on the day. All cost hours later.

Practice varies. In India, as-builts on many access networks are still paper or scanned sheets, and fiber records and route records often live apart. Australian and US operators increasingly require a GIS update and digital splice records before the contractor is paid.

## How to make it happen

Collect it in the field, the same day, by the person who did the work: a photo of every open handhole with a tape in it, a global positioning system (GPS) coordinate, a measured offset from a fixed feature, and the splice sheet updated at the closure. Make this part of the daily routine, not a task left for the end, because by then nobody remembers.

## Final thoughts

A network is only as good as its record, because the record is what the next person has to work with. How does your team capture as-builts in the field, and does it survive to the final package?
