---
title: "BOM vs BOQ in Fiber Projects, With Examples"
excerpt: "Bill of materials and bill of quantities sound alike but serve different people. Here is how each is built and used on a fiber network project."
categories:
  - "OSP design and engineering"
tags:
  - "bill of materials"
  - "bill of quantities"
  - "BOM vs BOQ"
  - "fiber project costing"
  - "telecom procurement"
header:
  image: /assets/images/posts/068-bom-vs-boq-in-fiber-projects-with-exampl-card.png
  teaser: /assets/images/posts/068-bom-vs-boq-in-fiber-projects-with-exampl-card.png
  og_image: /assets/images/posts/068-bom-vs-boq-in-fiber-projects-with-exampl-card.png
queue_number: 68
---

Two reels of cable sit in a yard next to a trench that is not yet dug. The reels were ordered from one list. The trench will be paid for from another. Both lists came out of the same design, and both have the word "bill" in their name, which is where the confusion starts.

The bill of materials and the bill of quantities are related documents with different readers and purposes. Mixing them up costs money, usually when something is counted twice or not at all.

## The bill of materials

A bill of materials (BOM) is a list of every physical item needed to build the network: cable by type and length, closures, terminals, splitters, cabinets, pedestals, strand, conduit and consumables. Each line has a description, a unit of measure, a quantity and usually a part number from the operator's approved product list.

The BOM comes from the low-level design (LLD). The designer counts every closure on the drawings, adds up every cable length with slack, and tallies the small hardware that hangs off each pole. Its readers are procurement and the warehouse. The question it answers is "what do we buy and deliver to site?"

## The bill of quantities

A bill of quantities (BOQ) is a list of work items, each measured in a unit that can be priced: metres of trenching by surface type, metres of aerial cable placed, poles attached, splices made, closures installed, square metres of footpath restored. Each line has a quantity and a unit, and the contractor enters a rate against it.

The BOQ also comes from the LLD, but is organised by activity rather than item. Its readers are the estimators, the contractor and the project manager who later certifies payment. The question it answers is "what work is done, and how much of it?"

| | Bill of materials | Bill of quantities |
|---|---|---|
| Lists | Physical products | Work activities |
| Typical line | Splice closure, 1 each | Fiber splice, 48 each |
| Includes labour | No | Yes, within the rate |
| Main reader | Procurement, warehouse | Contractor, estimator, project manager |
| Used for | Ordering and stock control | Tendering, contract, progress payment |

A single design element shows up in both. One closure is one line on the BOM. On the BOQ it becomes a closure installation, a set of splices and perhaps a pole attachment, each priced separately.

## Where practice differs

In the United States, many operators and contractors use a unit-based system where each construction activity has a code and an agreed price. People may just say "units" rather than BOQ, but the idea is the same. In India, Australia and other markets with a British construction heritage, the BOQ is a formal contract document, often prepared by a quantity surveyor, and tenders are priced line by line against it.

The BOM is handled more consistently across markets, because a reel of cable is a reel of cable wherever you are.

## The mistake I see most often

Slack. The BOM length includes slack for splicing and coiling. The BOQ placement length is usually the route length only. Copy one figure into the other and the project either buys too little cable or pays for metres that were never placed. A close second is contractor-supplied consumables appearing on both lists.

## Final thoughts

Think of the BOM as the shopping list and the BOQ as the work order. Both come from the same drawings, but they are read by different people for different reasons, and keeping them separate keeps the budget honest.

Does your team produce the BOM and BOQ from the same design file, or are they built independently?
