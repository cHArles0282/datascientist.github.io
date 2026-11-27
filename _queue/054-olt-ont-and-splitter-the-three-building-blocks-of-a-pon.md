---
title: "OLT, ONT and Splitter: The Three Building Blocks of a PON"
excerpt: "What an OLT, an optical splitter and an ONT each do in a passive optical network, where they sit, which ones need power, and how they work together."
categories:
  - "Network architecture"
tags:
  - "OLT"
  - "ONT"
  - "optical splitter"
  - "PON components"
  - "FTTH equipment"
header:
  image: /assets/images/posts/054-olt-ont-and-splitter-the-three-building--card.png
  teaser: /assets/images/posts/054-olt-ont-and-splitter-the-three-building--card.png
  og_image: /assets/images/posts/054-olt-ont-and-splitter-the-three-building--card.png
queue_number: 54
---

Inside a central office there is a rack with a chassis full of line cards. Each card has a row of green connectors, and from each one a yellow patch cord disappears into an overhead tray. Follow any one of those cords out of the building and it will end up, several kilometres later, at a small box on the wall of someone's house. In between it will pass through exactly one more component that matters.

Those are the three building blocks of a passive optical network (PON): the OLT, the splitter and the ONT. Everything else is just cable.

## The OLT: the brain in the central office

OLT stands for optical line terminal. It is the active equipment at the operator's end, usually a chassis of PON line cards, where each port drives one PON tree. It ranges each ONT to learn how far away it is, assigns upstream time slots using dynamic bandwidth allocation (DBA), encrypts downstream traffic, and provisions each customer's services. It connects to the operator's core through Ethernet uplinks. OLTs are normally in a central office, but smaller versions can sit in a remote hut or cabinet closer to the customers.

## The splitter: the passive middle

An optical splitter takes one input fiber and divides the light across many outputs. There are two common types. Fused biconic taper (FBT) splitters are made by fusing fibers together and suit small ratios. Planar lightwave circuit (PLC) splitters are made on a glass chip and are the usual choice for 1:8 and above because their outputs are more evenly balanced. They have no power and almost nothing to go wrong. They live in a fiber distribution hub cabinet, a pole-mounted closure or a building riser, depending on the architecture. The loss is the price of sharing: roughly 3.5 dB for a 1:2 and around 17 dB for a 1:32.

## The ONT: the box on the wall

ONT stands for optical network terminal. It converts the optical signal back to Ethernet, and often also provides voice ports, Wi-Fi and TV outputs. It is powered by the customer, which is why a fiber phone line goes dead in a blackout unless there is a battery. You will also see ONU, optical network unit, in the standards. Strictly an ONT is an ONU serving a single customer, but the words are swapped freely. Each ONT registers with the OLT using a unique serial number, and nothing works until it is provisioned.

| Component | Where it sits | Needs power | Main job |
|---|---|---|---|
| OLT | Central office or remote hut | Yes | Controls the PON, uplinks to core |
| Splitter | Cabinet, closure or riser | No | Divides one fiber into many |
| ONT | Customer premises | Yes | Converts light to Ethernet and services |

## How practice differs by country

In the United States, older builds often used an outdoor ONT on the exterior wall with a separate indoor router. Newer builds favour an indoor ONT or a combined gateway. In India, the indoor combined ONT and Wi-Fi router is the standard installation. In Australia, NBN calls the ONT a network termination device (NTD), and it is installed indoors.

## Final thoughts

If you can explain what the OLT, splitter and ONT each do, you can explain any PON design, because every variation is just these three parts arranged differently. Which of the three would you rather be the one that fails at two in the morning?
