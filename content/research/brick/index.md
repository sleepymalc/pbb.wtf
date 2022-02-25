---
title: "Minimal Service of Brick Schema"
tags:
- "os"
- "open source"
- "backend"
date: Oct 2020 - Present
path: "research/brick"
excerpt: We build a backend service based on brick schema to provide an interface between the underlying building hardware and developers. 
selected: true
cover: "./preview.png"
links:
  - name: "GitHub"
    url: "https://github.com/BrickSchema"
  - name: "code"
    url: "https://github.com/BrickSchema/brick-example-server"
---

# Introduction

> Brick is an open-source effort to standardize semantic descriptions of the physical, logical and virtual assets in buildings and the relationships between them. Brick consists of an extensible dictionary of terms and concepts in and around buildings, a set of relationships for linking and composing concepts together, and a flexible data model permitting seamless integration of Brick with existing tools and databases. Through the use of powerful Semantic Web technology, Brick can describe the broad set of idiosyncratic and custom features, assets and subsystems found across the building stock in a consistent matter.
> 
> Adopting Brick as the canonical description of a building enables the following:
> + Brick lowers the cost of deploying analytics, energy efficiency measures and intelligent controls across buildings
> + Brick presents an integrated, cross-vendor representation of the multitude of subsystems in modern buildings: HVAC, lighting, fire, security and so on
> + Brick simplifies the development of smart analytics and control applications
> + Brick reduces the reliance upon the non-standard, unstructured labels endemic to building management systems
> 
> From https://brickschema.org/

# Progress

Currently, we have built a minimal service which can handle most user operations on the building hardware. The service contains:

+ A FastAPI server which provides REST APIs to the service
+ The brick schema is handled by GraphDB with sparql
+ MongoDB is used to store basic user profile and data
+ PostgreSQL and TimeseriesDB are used to deal with continuous building data flow

Containerization is used everywhere in the project:

+ All services are sealed into configurable docker images
+ User applications are run in docker containers (docker in docker) to prevent malicious code from developers
+ A docker compose file is provided to deploy all services rapidly

# Future Work

Though the minimal service is out of box and ready to use, there are still many challenges before it can be published:

+ The minimal service only supports basic authorization, the permission of users are not well handled
+ We built the service based on many scalable tools, while the scalability of the service hasn't been evaluated
+ Security and privacy of the data should be guaranteed
