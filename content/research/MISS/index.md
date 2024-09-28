---
title: "Most Influential Subset Selection: Challenges, Promises, and Beyond"
tags:
- "Trustworthy"
- "Data Attribution"
- "Optimization"
date: 2024-09-25 -0500
priority: -20240925
path: "research/MISS"
excerpt: "We consider the *most influential subset selection* (MISS) problem and identify various failure modes of the greedy-based algorithm used by the community, and prove that being \"adaptive\" helps in a non-obvious way."
selected: true
cover: "./preview.png"
links:
#   - name: "GitHub"
#     url: "https://github.com/sleepymalc/Travel-the-Same-Path"
  - name: "NeurIPS 2024"
    url: "https://nips.cc/virtual/2024/poster/93494"
authors:
  - name: "Yuzheng Hu"
    url: "https://scholar.google.com/citations?user=cVVimVcAAAAJ&hl=en"
  - name: "**Pingbang Hu**"
    url: "https://pbb.wtf/"
  - name: Han Zhao
    url: "https://hanzhaoml.github.io/"
  - name: Jiaqi Ma
    url: "https://jiaqima.github.io/"
---

## Brief Summary

How can we attribute the behaviors of machine learning models to their training data? While the classic [*influence function*](https://arxiv.org/abs/1703.04730) sheds light on the impact of individual samples, it often fails to capture the more complex and pronounced collective influence of a set of samples. To tackle this challenge, we study the Most Influential Subset Selection (MISS) problem, which aims to identify a subset of training samples with the greatest collective influence. We conduct a comprehensive analysis of the prevailing approaches in MISS, elucidating their strengths and weaknesses. Our findings reveal that influence-based greedy heuristics, a dominant class of algorithms in MISS, can provably fail even in linear regression. We delineate the failure modes, including the errors of influence function and the non-additive structure of the collective influence. Conversely, we demonstrate that an adaptive version of these heuristics which applies them iteratively, can effectively capture the interactions among samples and thus partially address the issues. Experiments on real-world datasets corroborate these theoretical findings, and further demonstrate that the merit of adaptivity can extend to more complex scenarios such as classification tasks and non-linear neural networks. We conclude our analysis by highlighting the inherent trade-off between performance and computational efficiency, and providing a range of discussions.
