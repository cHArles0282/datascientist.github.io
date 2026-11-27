---
title: "Living Units, Homes Passed and Take Rate Explained"
excerpt: "How fiber projects are sized and measured. Living units, homes passed, homes connected and take rate, and why the definitions matter."
categories:
  - "OSP design and engineering"
tags:
  - "homes passed"
  - "living units"
  - "take rate"
  - "homes connected"
  - "FTTH metrics"
header:
  image: /assets/images/posts/069-living-units-homes-passed-and-take-rate--card.png
  teaser: /assets/images/posts/069-living-units-homes-passed-and-take-rate--card.png
  og_image: /assets/images/posts/069-living-units-homes-passed-and-take-rate--card.png
queue_number: 69
---

Drive down a street with a new fiber cable on the poles and count the houses. Then count the houses that actually have a drop cable running to them. Then look at the apartment block on the corner and ask whether that counts as one, or as forty. You have just met the numbers every fiber project is measured by, and the arguments that follow them.

Sizing a network starts with counting, and counting is harder than it looks.

## Living units

A living unit (LU) is any address that could take a service: a house, a flat, a shop, a small office. A designer counts LUs inside a boundary before anything is built, using address databases, aerial imagery and site visits. The LU count drives everything downstream: splitter ports, distribution cable sizes and terminal counts.

Multi-dwelling units (MDUs) are where LU counts go wrong. An apartment block is one building but forty living units. A house with a converted garage might be two. Rules for counting these should be written down before the first design starts, or two designers will produce two different networks for the same street.

## Homes passed

A home passed (HP) is a living unit that the network has been built past, close enough that a drop can be installed without further construction. It is the first number that reflects real build progress rather than intent.

Operators differ on what "close enough" means. Some count a home as passed when the distribution cable is on the street. Others require a terminal with a free port within a set distance. The stricter definition is more useful to the people installing drops, so I prefer it. Whatever the rule, it must be stated, because homes passed is the number most often reported to investors and regulators.

## Homes connected and take rate

A home connected (HC) is a living unit with a drop installed and a working service. The take rate is homes connected divided by homes passed. It tells the operator how much of the built network is earning money.

The four numbers nest inside each other.

1. Living units: everything in the boundary that could be served.
2. Homes passed: the LUs the network has actually reached.
3. Homes connected: the HPs that have a drop and a live service.
4. Take rate: HC as a share of HP.

Terminology varies by market. In the United States, "homes passed" is the standard term even where many of the units are businesses. In Australia, the National Broadband Network (NBN) reports "premises ready to connect" and "premises activated", which map closely to homes passed and homes connected. In India, operators more often talk about homes passed and "home connects" or "activations", and MDU-heavy cities push the LU count far above the building count.

## Why the designer should care

It is tempting to treat these as reporting numbers for someone else. They are not. Designing for every living unit, when only a fraction will connect in the first years, means oversized cables and splitter ports sitting dark. Designing only for the expected take rate means running out of ports on a popular street. Most designs land in between: a splitter port for every LU, with distribution cable sized for growth.

## Final thoughts

Living units, homes passed, homes connected and take rate are simple ideas with slippery definitions. Agree the definitions early, write them down, and the rest of the project measures itself.

How does your team count an apartment block: one address, or one living unit per door?
