---
title: "Multi-Agent Pickup and Delivery with Individual Deadlines"
tags: 
  - "scheduling"
  - "algorithm"
date: Jan 2020 - Dec 2021
path: "research/mapd-deadline"
excerpt: We study the multi-agent pickup and delivery problem with task deadlines, where a team of agents execute a batch of tasks with individual deadlines to maximize the number of tasks completed by their deadlines. Existing approaches to multi-agent pickup and delivery typically address task assignment and path planning separately. We take an integrated approach that assigns and plans one task at a time taking into account the agent states resulting from all the previous task assignments and path planning. We define metrics to effectively determine which task is most worth assignment next and which agent ought to execute a given task, and propose a priority-based framework for joint task assignment and path planning. We leverage the bounding and pruning techniques in the proposed framework to greatly improve computational efficiency. We also refine the dummy path method for collision-free path planning. The effectiveness of the framework is validated by extensive experiments.
selected: true
cover: "./preview.png"
venue: "WI-IAT 2021 (Full Paper) / SOCS 2021 (Extended Abstract)"
authors:
  - "Xiaohu Wu"
  - "<u>Yihao Liu</u>"
  - "Xueyan Tang"
  - "Wentong Cai"
  - "Funing Bai"
  - "Gilbert Khonstantine"
  - "Guopeng Zhao"
links:
  - name: "pdf"
    file: "./wiiat21.pdf"
  - name: "extended abstract"
    file: "./socs21.pdf"
  - name: "code"
    url: "https://github.com/tc-imba/MAPD-TD"
---

Multi-Agent Pickup and Delivery with Individual Deadlines

