---
title: "Light Source and Power Meter Test for Fiber Links"
excerpt: "The simplest end-to-end fiber test: referencing, the one-jumper method, a step-by-step procedure, and the mistakes that produce wrong loss figures."
categories:
  - "Testing and quality"
tags:
  - "optical power meter"
  - "light source test"
  - "insertion loss test"
  - "OLTS"
  - "fiber acceptance testing"
header:
  overlay_image: /assets/images/posts/044-light-source-and-power-meter-test-for-fi-photo.jpg
  overlay_filter: 0.55
  teaser: /assets/images/posts/044-light-source-and-power-meter-test-for-fi-photo.jpg
  og_image: /assets/images/posts/044-light-source-and-power-meter-test-for-fi-photo.jpg
queue_number: 44
---

Two technicians, two ends of a feeder cable, one phone call. "I'm on fiber seven, 1310, go." "Reading minus eight point two." They write it down, swap jumpers and move to fiber eight. No screens full of curves, just a laser in a box at one end and a detector in a box at the other. This is the light source and power meter test, often shortened to LSPM, and it is the most honest test there is.

An optical time domain reflectometer (OTDR) estimates loss from backscatter. The power meter estimates nothing. It puts a known amount of light in one end and measures what comes out the other. The difference is the insertion loss of the link, which is what the loss budget predicted and what the equipment cares about.

## The idea of a reference

The source does not produce a perfectly known power, so the test starts by measuring it. Connect the source to the meter with a short test jumper and tell the meter that this reading is zero. Insert the link between the jumper and the meter, and the display now shows the loss of the link in decibels. A combined instrument that does this at both ends is an optical loss test set, or OLTS.


<figure>
  <img src="{{ "/assets/images/posts/044-light-source-and-power-meter-test-for-fi-diagram.jpg" | relative_url }}" alt="Diagram: Light Source and Power Meter Test for Fiber Links">
  <figcaption>Light Source and Power Meter Test for Fiber Links</figcaption>
</figure>

## The procedure

1. Inspect and clean every connector that will be mated, including those on your test jumpers.
2. Turn the source on and let it stabilise; set the same wavelength on source and meter.
3. Connect source to meter through one test jumper and set the reference to zero.
4. Leave that jumper attached to the source until the whole test is done.
5. Connect the jumper to the link under test, and the meter to the far end with a second jumper.
6. Record the loss at each required wavelength, typically 1310 nm and 1550 nm, and in both directions if the specification asks.
7. Compare each result to the link loss budget and flag anything close to the limit.

## Why the one-jumper reference matters

This is the one-jumper reference method, and it is preferred for a reason. The reference is taken with a single connection, so when the link is inserted, both of its end connectors are included in the measured loss. Two- and three-jumper references quietly remove one or both end connectors from the result, making a link look better than it is. The operator's acceptance document usually names the method, and results are not comparable if you pick a different one.

## Mistakes I see on real test sheets

Wrong wavelength on one instrument is the classic; the meter reads a number either way, so nobody notices. Mating an angled physical contact (APC, green) connector to an ultra physical contact (UPC, blue) one produces a large loss and can damage both end faces. Recording dBm instead of dB happens when a technician forgets to reference. Comparing the 1550 nm result against the 1310 nm limit is a desk error rather than a field one.

In the United States a simpler variant is common for drops: a single power reading at the customer's optical network terminal (ONT) against a threshold. In India I have seen the same on high-volume rollouts. It is quick, but no substitute for a referenced insertion loss test on feeder and distribution sections.

## Final thoughts

The power meter test is boring, and that is its strength: it answers the one question that matters with no interpretation required. Which do you trust more for sign-off, the OTDR trace or the power meter, and why?
