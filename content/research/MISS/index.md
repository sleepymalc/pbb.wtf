---
title: "Most Influential Subset Selection: Challenges, Promises, and Beyond"
tags: ["Trustworthy", "Data Attribution", "Optimization"]
date: 2024-09-25 00:00:00 -0500
priority: -20240925
path: "research/MISS"
excerpt: "We provide a comprehensive study of the common practices in the Most Influential Subset Selection (MISS) problem."
selected: true
cover: "./preview.png"
venue: "NeurIPS 2024 / ATTRIB 2024 @NeurIPS"
links:
- name: "arXiv"
  url: "https://arxiv.org/abs/2409.18153"
- name: "Poster"
  url: "./research/MISS/poster.pdf"
- name: "GitHub"
  url: "https://github.com/sleepymalc/MISS"
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

> [arXiv](https://arxiv.org/abs/2409.18153) | [GitHub](https://github.com/sleepymalc/MISS)

## Brief Summary

How can we attribute the behaviors of machine learning models to their training data? While the classic [*influence function*](https://arxiv.org/abs/1703.04730) sheds light on the impact of individual samples, it often fails to capture the more complex and pronounced collective influence of a set of samples. To tackle this challenge, we study the Most Influential Subset Selection (MISS) problem, which aims to identify a subset of training samples with the greatest collective influence. We conduct a comprehensive analysis of the prevailing approaches in MISS, elucidating their strengths and weaknesses. Our findings reveal that influence-based greedy heuristics, a dominant class of algorithms in MISS, can provably fail even in linear regression. We delineate the failure modes, including the errors of influence function and the non-additive structure of the collective influence. Conversely, we demonstrate that an adaptive version of these heuristics which applies them iteratively, can effectively capture the interactions among samples and thus partially address the issues. Experiments on real-world datasets corroborate these theoretical findings, and further demonstrate that the merit of adaptivity can extend to more complex scenarios such as classification tasks and non-linear neural networks. We conclude our analysis by highlighting the inherent trade-off between performance and computational efficiency, and providing a range of discussions.

## Citation

```bibtex
@inproceedings{hu2024most,
  author    = {Yuzheng Hu and Pingbang Hu and Han Zhao and Jiaqi W. Ma},
  title     = {Most Influential Subset Selection: Challenges, Promises, and Beyond},
  booktitle = {Advances in Neural Information Processing Systems},
  volume    = {37},
  year      = {2024}
}
```
