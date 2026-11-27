---
title: "Handhole vs Manhole vs Vault in a Fiber Network"
excerpt: "The difference between a handhole, a manhole and a vault in fiber networks, covering size, access, safety rules and where each one is used."
categories:
  - "Underground infrastructure"
tags:
  - "handhole vs manhole"
  - "fiber vault"
  - "underground fiber access"
  - "confined space manhole"
  - "OSP design"
header:
  overlay_image: /assets/images/posts/002-handhole-vs-manhole-vs-vault-in-a-fiber--photo.jpg
  overlay_filter: 0.55
  teaser: /assets/images/posts/002-handhole-vs-manhole-vs-vault-in-a-fiber--photo.jpg
  og_image: /assets/images/posts/002-handhole-vs-manhole-vs-vault-in-a-fiber--photo.jpg
queue_number: 2
---

Downtown, at a busy intersection, a crew sets cones around a round cast-iron cover, drops a tripod and a ventilation blower beside it, and a technician in a harness climbs down a ladder. Three blocks away on a residential street, another technician kneels on the grass, lifts a rectangular lid with a hook, and works with both arms in the hole. Same network, same fiber, very different structures.

The words handhole, manhole and vault get used loosely. The distinction matters because it drives cost, safety procedure, and what can physically be done at that point in the route.

## Handhole: work from the surface

A handhole is a shallow box, usually no more than about 36 inches deep, that nobody enters. A technician opens the lid and works from above. It holds splice closures, slack loops, and drop connections, and it serves as a pull point on a duct run. It is the cheapest access structure, so on distribution routes you will find them every few hundred feet. The main hazards are manual handling and traffic.


<figure>
  <img src="{{ "/assets/images/posts/002-handhole-vs-manhole-vs-vault-in-a-fiber--diagram.jpg" | relative_url }}" alt="Diagram: Handhole vs Manhole vs Vault in a Fiber Network">
  <figcaption>Handhole vs Manhole vs Vault in a Fiber Network</figcaption>
</figure>

## Manhole: a person goes in

A manhole is an underground room, typically precast concrete, with a neck and a round cover at the surface. A person climbs down a ladder and works inside. Duct banks enter on several walls, cables are supported on racks, and large splice cases are mounted on those racks. Manholes belong on backbone and feeder routes in cities, especially at junctions where duct banks meet.

In the United States, a manhole is treated as a permit-required confined space under Occupational Safety and Health Administration (OSHA) rules. That means atmospheric testing, forced ventilation, an attendant at the surface, and a rescue plan before anyone enters. That procedure is the real cost of a manhole.

## Vault: room for equipment

A vault is a larger or purpose-built chamber that houses equipment rather than just splices. Think of a below-grade splitter cabinet, an entrance facility under a building, or a chamber with doors and steps rather than a single round cover. In telecom the term is applied loosely, and in some regions vault and manhole are interchangeable. In my experience, vaults appear in historic districts where above-ground cabinets are not permitted, and at large building entrances.

## Choosing between them

| | Handhole | Manhole | Vault |
|---|---|---|---|
| Access | From the surface | Person enters by ladder | Person enters, often by hatch or stairs |
| Typical depth | Up to about 36 inches | Several feet, full standing height | Varies, often standing height |
| Typical use | Drops, distribution splices, slack, pull points | Duct bank junctions, backbone splice cases | Below-grade equipment, building entrances |
| Safety | Manual handling, traffic control | Confined space permit, gas test, ventilation | As for manhole, plus equipment hazards |
| Relative cost | Low | High | Highest |

Terminology shifts by country. In India, "chamber" and "manhole" often cover both the small and the large structure, and many are built on site in brick or reinforced cement concrete (RCC). In Australia the small box is a pit, classified by a size number, and manhole is reserved for the entry type.

## Final thoughts

A good rule is to specify the smallest structure that lets the next technician do the job safely. Put manholes where duct banks converge, handholes everywhere else, and vaults only when equipment has to go underground. Where have you seen a manhole placed when a handhole would have done the job, or the reverse?
