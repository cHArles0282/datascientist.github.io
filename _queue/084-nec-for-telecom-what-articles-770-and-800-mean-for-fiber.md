---
title: "NEC for Telecom: What Articles 770 and 800 Mean for Fiber"
excerpt: "How the National Electrical Code treats fiber and communications cabling in buildings: listings, plenum and riser ratings, entrance rules and bonding."
categories:
  - "Safety, codes and standards"
tags:
  - "NEC Article 770"
  - "NEC Article 800"
  - "plenum rated fiber"
  - "OFNR OFNP"
  - "communications cabling code"
header:
  image: /assets/images/posts/084-nec-for-telecom-what-articles-770-and-80-card.png
  teaser: /assets/images/posts/084-nec-for-telecom-what-articles-770-and-80-card.png
  og_image: /assets/images/posts/084-nec-for-telecom-what-articles-770-and-80-card.png
queue_number: 84
---

Walk into the garage of an apartment building where fiber has just been installed and you will often find a small gray box on the wall near the electrical room. The black outdoor cable comes in from the street, stops at that box, and a different cable, usually yellow, continues into the building. That change is not a supplier preference. It is required by the electrical code.

The National Electrical Code (NEC), published by the National Fire Protection Association (NFPA) as NFPA 70, is adopted in some form across the United States. Two parts matter most to telecom people: Article 770 for optical fiber cables and raceways, and Article 800 and its companion articles for communications circuits.

## Where the NEC takes over

The NEC governs wiring on the premises side of the service point. Outside plant on poles and in the street falls under the National Electrical Safety Code instead. The moment a fiber cable enters a building, or a conduit attached to one, it becomes an NEC matter and the electrical inspector can ask to see it.

The code's main concern with low-voltage cabling is not shock but fire. Jackets burn, give off smoke and can carry flame from one floor to another. Nearly every rule in Articles 770 and 800 traces back to limiting that spread.

## Cable listings and fire ratings

Cables installed inside buildings must be listed, meaning tested by a recognized laboratory and marked for the space where they are permitted. For fiber the markings start with OF (optical fiber), followed by C for conductive, meaning the cable has metallic members, or N for nonconductive.

| Marking | Where it is permitted |
|---|---|
| OFNP or OFCP (plenum) | Air-handling spaces such as a ceiling void used for return air |
| OFNR or OFCR (riser) | Vertical shafts between floors |
| OFNG, OFN, OFCG, OFC (general purpose) | Ordinary spaces on one floor, not plenums or risers |

A higher rating can substitute for a lower one: plenum cable can go anywhere, but riser cable cannot go in a plenum. Copper communications cables follow the same pattern with CMP, CMR and CM markings. Outdoor cable is usually not listed at all, which is why it must stop near the point of entry. The commonly cited rule is that unlisted outside plant cable may run only a short distance, generally described as 50 feet, inside the building before transitioning to listed cable or entering a suitable raceway.

## Entrance, bonding and abandoned cable

Fiber cable with no metallic members needs no electrical protection. Armored or messenger-supported cable does, because a metallic sheath can carry lightning or a power fault into the building. The code requires those members to be bonded to the building's grounding system at the entrance, usually at an intersystem bonding termination near the electrical service. Copper circuits additionally need a listed primary protector.

One rule surprises people: accessible abandoned cable must be removed. Dead cable adds fuel load above the ceiling, and inspectors enforce this on renovations.

Australia handles this through AS/CA S009 for customer cabling alongside the AS/NZS 3000 wiring rules. In India the National Building Code and electricity rules cover similar ground, though enforcement for low-voltage cabling is less consistent in my experience.

## Final thoughts

Fiber carries no current, and new designers sometimes assume the electrical code ignores it. It does not. The jacket, the metallic strength members and the route through the building are all regulated.

Have you had a fiber installation fail an inspection, and what was the reason?
