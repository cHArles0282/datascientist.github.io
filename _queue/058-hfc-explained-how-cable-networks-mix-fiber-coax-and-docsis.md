---
title: "HFC Explained: How Cable Networks Mix Fiber, Coax and DOCSIS"
excerpt: "How a hybrid fiber-coax network works, from headend to optical node to coaxial drop, what DOCSIS does, and why cable operators are pushing fiber deeper."
categories:
  - "Network architecture"
tags:
  - "HFC"
  - "hybrid fiber-coax"
  - "DOCSIS"
  - "cable broadband"
  - "optical node"
header:
  image: /assets/images/posts/058-hfc-explained-how-cable-networks-mix-fib-card.png
  teaser: /assets/images/posts/058-hfc-explained-how-cable-networks-mix-fib-card.png
  og_image: /assets/images/posts/058-hfc-explained-how-cable-networks-mix-fib-card.png
queue_number: 58
---

On an older suburban street you may see a silver box the size of a shoebox hanging from the pole strand, with thick aluminium-jacketed cable entering both ends. Lower on the same pole is a grey cabinet with an electricity meter on it. This is not a fiber network, but there is fiber in it. It is hybrid fiber-coax, and it still delivers broadband to millions of homes.

HFC is what the cable television industry arrived at when all-coax networks ran out of reach. The idea is to use fiber for the long haul and keep the existing coaxial cable for the last stretch into the neighbourhood.

## The path from headend to home

The signal takes a well-defined journey:

1. The headend is the cable operator's central site. It holds the video equipment and the cable modem termination system (CMTS), the equipment every cable modem talks to.
2. Fiber carries the full radio frequency (RF) spectrum from the headend to an optical node in the street, often several kilometres away.
3. The optical node converts light back into an electrical RF signal and launches it onto hardline coaxial cable.
4. RF amplifiers spaced along the coax boost the signal. They are powered through the coax from those street power supplies with meters.
5. Taps along the route pass a portion of the signal to each house over a flexible coaxial drop.
6. A cable modem or set-top box at the customer's end tunes to its channels.

Everything from the node onward is shared by every home on that node. Historically a node served several hundred to a couple of thousand homes.

## What DOCSIS does

DOCSIS stands for Data Over Cable Service Interface Specification. It is the set of standards that defines how data rides on RF channels alongside television. DOCSIS 3.0 bonded multiple channels together for higher speeds. DOCSIS 3.1 introduced orthogonal frequency-division multiplexing (OFDM), which packs data more efficiently and allows multi-gigabit downstream service. DOCSIS 4.0 pushes the usable spectrum up to 1.8 GHz and widens the upstream, with a target of up to 10 Gbps down and 6 Gbps up.

The upstream has always been the weak point. In the traditional North American band plan, the return path sat in just 5 to 42 MHz, a narrow sliver of noisy spectrum shared by the whole node. Mid-split and high-split plans widen that return band.

## Why operators keep pushing fiber deeper

Each amplifier in a cascade adds noise and a point of failure, and each node shared by too many homes adds congestion. The response has been node splitting, which cuts a node's serving area in half by adding fiber, and "fiber deep" or node-plus-zero designs that remove the amplifiers altogether. Take that to its conclusion and the coax is gone, which is why many cable operators now build fiber to the home (FTTH) in new areas.

## Regional differences

The United States has the largest HFC footprint and the most aggressive DOCSIS 4.0 plans. In Australia, NBN inherited HFC built by the earlier cable operators and runs DOCSIS 3.1 on it. In India, cable TV reaches a huge number of homes through local cable operators, but most were built for television only, and operators moving into broadband have generally overlaid fiber rather than upgrade coax.

## Final thoughts

HFC is a reminder that a network does not have to be pure fiber to be useful. It just has to keep moving the fiber closer to the customer. Is your home connection coax, fiber or something else?
