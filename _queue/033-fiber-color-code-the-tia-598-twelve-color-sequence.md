---
title: "Fiber Color Code, the TIA-598 Twelve Color Sequence"
excerpt: "Learn the standard 12-color order for fibers and buffer tubes under TIA-598, how to find fiber number 87 in a cable, and where the code varies."
categories:
  - "Fiber cable and splicing"
tags:
  - "fiber color code"
  - "TIA-598"
  - "buffer tube colors"
  - "fiber optic color sequence"
  - "fiber identification"
header:
  image: /assets/images/posts/033-fiber-color-code-the-tia-598-twelve-colo-card.png
  teaser: /assets/images/posts/033-fiber-color-code-the-tia-598-twelve-colo-card.png
  og_image: /assets/images/posts/033-fiber-color-code-the-tia-598-twelve-colo-card.png
queue_number: 33
---

Open any splice closure and the first thing you notice is color. Twelve tubes fan out from the cable, each a different shade, and inside each tube are twelve hair-thin fibers in the same twelve shades again. A splicer can pick fiber number 87 out of a 144-count cable in seconds without a label, because the color sequence is fixed and everyone learns it early.

In my experience it is the single most useful thing a new designer can memorize. Splice diagrams, test reports and as-built records all assume you know it.

## The twelve colors

The sequence comes from TIA-598, the Telecommunications Industry Association standard for optical fiber color coding used across North America. The order is the same for individual fibers and for buffer tubes.

| Position | Color |
| --- | --- |
| 1 | Blue |
| 2 | Orange |
| 3 | Green |
| 4 | Brown |
| 5 | Slate |
| 6 | White |
| 7 | Red |
| 8 | Black |
| 9 | Yellow |
| 10 | Violet |
| 11 | Rose |
| 12 | Aqua |

Most technicians learn it with a mnemonic such as "Big Orange Gorillas Bite Small White Rabbits But Yellow Violets Really Attract." Any phrase works as long as the first letters stay in order. Slate is just a grey and rose is a pale pink, which trips people up in poor light.

## Finding a fiber by number

Fibers are numbered in the order of tube color first, then fiber color. Tube 1 is blue and holds fibers 1 to 12. Tube 2 is orange and holds fibers 13 to 24, and so on. To find any fiber, subtract one from its number and divide by twelve. The quotient plus one is the tube, and the remainder plus one is the fiber position.

Fiber 87, for example, gives 86 divided by 12, which is 7 with a remainder of 2. Tube 7 plus 1 is tube 8, black. Position 2 plus 1 is the third color, green. So fiber 87 is green in the black tube.

Cables with more than twelve tubes repeat the sequence with a marking, usually a black dashed stripe or ring on tubes 13 to 24. Fibers above twelve inside a single tube, which happens in 24-fiber tubes, are marked the same way.

## Ribbons and tubes with more than twelve fibers

In ribbon cable, each ribbon of twelve fibers follows the same color order from edge to edge. The ribbon itself carries a printed number or a color stripe to identify which ribbon it is. The same rule applies: ribbon number first, then fiber color within the ribbon.

## Where practice differs

TIA-598 is a North American standard, but the twelve color order has been adopted far beyond it and is common in Australia and much of Asia. It is not universal. Some European and Indian manufacturers ship cables with a different sequence, for example starting with red or placing the colors in a different order. On any project where I am not certain, I treat the cable data sheet as the only valid reference.

The same colors also appear on connector bodies and cable jackets, but with different meanings. A yellow jacket means single-mode fiber, not fiber number nine.

## Final thoughts

The color code is one of those things that looks trivial on paper and saves hours in the field. Learn the twelve colors, practice the tube-and-remainder arithmetic, and always confirm the sequence for cables from outside North America.

What mnemonic did you learn for the fiber color order, and does it still work for you?
