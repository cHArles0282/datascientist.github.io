---
title: "Bidirectional OTDR Testing and the Gainer Problem"
excerpt: "Why a one-direction OTDR trace can show a splice gaining light, how averaging traces from both ends gives the true splice loss, and how to run the test."
categories:
  - "Testing and quality"
tags:
  - "bidirectional OTDR"
  - "OTDR gainer"
  - "splice loss measurement"
  - "fiber acceptance testing"
  - "OTDR averaging"
header:
  image: /assets/images/posts/048-bidirectional-otdr-testing-and-the-gaine-card.png
  teaser: /assets/images/posts/048-bidirectional-otdr-testing-and-the-gaine-card.png
  og_image: /assets/images/posts/048-bidirectional-otdr-testing-and-the-gaine-card.png
queue_number: 48
---

Two trace printouts are spread on the hood of a truck. Both show the same splice at the same distance. On one, the splice appears to add light, a small step upwards of about 0.08 dB. On the other, taken from the opposite end, the same splice loses 0.25 dB, well over the acceptance limit. The splicer says the joint was perfect. The inspector says it fails. They are both looking at the truth, and both are wrong.

That upward step is called a gainer, and it is the best argument for testing from both ends.

## Why a one-direction trace can lie

An OTDR (optical time domain reflectometer) does not measure the power passing through a splice. It compares the backscatter level before and after the splice and treats the drop as the loss. That works perfectly when the fiber on both sides is identical.

Fibers are rarely identical. Cables from different manufacturers or batches can have slightly different mode field diameters and backscatter coefficients. When light crosses from a fiber that scatters less into one that scatters more, the backscatter level jumps up and the OTDR reports a gain. From the other direction it jumps down and the OTDR reports more loss than exists. The splice has not changed. Only the viewpoint has.

## The averaging fix

The error is equal and opposite in the two directions, so the true splice loss is the average of the two. Using the traces from the hood of the truck:

| Event | Loss from end A | Loss from end B | Bidirectional average |
|---|---|---|---|
| Splice at closure 3 | minus 0.08 dB (gainer) | 0.25 dB | 0.085 dB |

The splice passes. Without the second trace it would have been cut out and redone, probably producing another gainer from the same mismatch, and the argument would have started again.

This is also why a splice between standard G.652 fiber and bend-insensitive G.657 fiber, common at the transition to a drop, so often looks suspicious from one end. Averaging makes it sensible.

## Running the test properly

Fit a launch cable at the near end and a receive cable at the far end, so the end connectors sit inside the measured section from both directions. Use the same wavelengths, pulse width, range and index of refraction from both ends, or the events will be hard to match. Name files by fiber number and direction; a folder of unnamed traces is nearly worthless a month later. Use analysis software that aligns the events and computes the averages, and report the averaged loss per splice while keeping both raw traces.

With a single technician, the loopback method works well: loop two fibers together at the far end and test the pair from one end, so the OTDR sees each splice from both sides in one trace.

## When it is required

Bidirectional testing is standard on feeder, backbone and long-distance routes where every splice is judged individually. On distribution and drop sections, many operators accept a single-direction trace plus a power meter result, since end-to-end loss is what the budget cares about. I have seen this split applied much the same way in the United States, India and Australia; the differences are in report format rather than method.

## Final thoughts

A gainer is not a miracle, and a 0.25 dB splice from one end is not a failure until the other end has had its say. Have you ever had a splice redone three times before someone finally tested from the other direction?
