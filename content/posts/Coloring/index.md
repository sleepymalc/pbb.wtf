---
title: "G.color()"
tags: ["math", "random"]
date: 2024-12-19
path: "posts/Coloring"
excerpt: 🎨 coloring a 3-colorable graph.
cover: "./preview.png"
---

## Coloring a 3-Colorable Graph

In the Fall 2024 semester, I took an advanced graph algorithm course at University of Illinois Urbana-Champaign just for fun. The space here is too little, so I'll ask you to move to my [note](./Notes/#topics-in-graph-algorithms-cs598---latex) to get a better idea of the course.

### Background

Here, I want to share something more specific: the final project I and [Sean Liu](https://zhxnliu.me/about/) work on, which is basically a literature review of a cute line of work about **graph coloring**. The problem is as follows: *given a 3-colorable graph, in polynomial time, color this graph using as few colors as possible*. In particular, we're interested in the number of colors we need. Recently, Professor [Kawarabayashi](https://kklab.nii.ac.jp/en/), who I know during my intern at NII, worked on this problem extensively and got several exciting results on this problem, where they are able to break the natural barrier of $\widetilde{O} (n^{0.2})$ colors down to $\widetilde{O} (n^{0.19747})$ colors[^1].

[^1]: <https://arxiv.org/abs/2406.00357>

We take this opportunity and review the literature, try to grasp the idea of the overall algorithms that leads to this breakthrough. The [report](./report.pdf) is available, which is self-contained enough as a starter.
