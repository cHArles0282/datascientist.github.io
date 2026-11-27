---
title: "GIS and Design Software for Fiber Network Planning"
excerpt: "How AutoCAD, ArcGIS, QGIS and Comsof fit together in fiber design, from survey data to construction drawings and network records."
categories:
  - "OSP design and engineering"
tags:
  - "GIS fiber design"
  - "AutoCAD telecom"
  - "QGIS"
  - "ArcGIS"
  - "Comsof fiber planning"
header:
  image: /assets/images/posts/070-gis-and-design-software-for-fiber-networ-card.png
  teaser: /assets/images/posts/070-gis-and-design-software-for-fiber-networ-card.png
  og_image: /assets/images/posts/070-gis-and-design-software-for-fiber-networ-card.png
queue_number: 70
---

On a job site, the design arrives as a few printed sheets or a PDF on a phone. Nobody there cares which software made it. Back in the office, that same design has passed through three or four different programs, each holding a different piece of the truth: where the streets and homes are, where the cable goes, and what the crew should build. Choosing those tools, and moving data between them cleanly, is a large part of a designer's working life.

## Two families of software

Fiber design tools fall into two broad families. Computer-aided design (CAD) tools draw precise geometry on a sheet. Geographic information system (GIS) tools store features with real-world coordinates and attached data. A CAD line is a line. A GIS line is a cable segment that knows its fiber count, owner, install date and end closure.

Most teams use both. CAD produces the construction drawings that crews build from. GIS holds the network as a database that the operator will query for decades. Automated planning tools sit in between.

| Tool | Family | Typical role in fiber design |
|---|---|---|
| AutoCAD | CAD | Drafting construction sheets, callouts, title blocks |
| ArcGIS | GIS, commercial | Enterprise network records, analysis, map publishing |
| QGIS | GIS, open source | Base mapping, survey data, lighter analysis, no licence cost |
| Comsof Fiber | Automated planning | Generating routes, clusters and cable counts from a base map |

## How the pieces fit together

A typical flow starts with GIS. Address points, road centrelines, parcel boundaries and existing pole or duct data are loaded as layers, with field survey data added on top. QGIS or ArcGIS are the usual homes for this stage.

Automated planning comes next. A tool such as Comsof takes the base layers, the living unit points and a set of design rules, such as split ratio and maximum drop length, and produces a candidate network: serving area boundaries, feeder and distribution routes, terminal locations and cable sizes. The designer then reviews and adjusts it. The software is fast, but it does not know that the alley it chose is a private driveway.

Drafting follows. The approved routes are exported to CAD, where drafters add pole numbers, footages, callouts, splice references and sheet layout to produce the low-level design. AutoCAD, often with a telecom add-on, is the common choice.

Finally, the as-built design goes back into GIS as the permanent record.

## File formats are the real workflow

The programs matter less than the formats that move between them. Shapefiles and GeoPackage files carry GIS layers. DWG and DXF carry CAD geometry. KML and KMZ files are the shared language of field teams, because they open in free mapping apps on any phone. A designer who can move data between these formats without losing attributes is worth more than one who knows every menu in a single tool.

Practice varies by region. In the United States, CAD-based construction prints remain the deliverable most contractors expect, with GIS used for records. In India, KMZ route files and CAD drawings are the everyday currency, and QGIS is popular because it is free. In Australia, the National Broadband Network (NBN) rollout was GIS-heavy from the start, with design packs delivered as spatial data as well as drawings.

## Final thoughts

Learn one tool from each family, learn the file formats that connect them, and never trust an automated route until you have looked at it on street view. The software is a fast assistant, not a designer.

Which tool did you learn first, CAD or GIS, and would you choose the same order again?
