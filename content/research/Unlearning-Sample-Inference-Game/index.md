---
title: "Towards Reliable Empirical Machine Unlearning Evaluation: A Game-Theoretic View"
tags:
- "Deep Learning"
- "Unlearning"
- "Game Theory"
date: 2024-04-17
# Jan. 2024 - Apr. 2024
priority: 20240417
path: "research/Unlearning-Sample-Inference-Game"
excerpt: "We design the first game-theoretic efficient machine unlearning evaluation metric with provable properties."
selected: true
cover: "./preview.png"
links:
#   - name: "GitHub"
#     url: "https://github.com/sleepymalc/Travel-the-Same-Path"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2404.11577"
# authors:
#   - name: "**Pingbang Hu**\*"
#   - name: "Yiwen Tu\*"
#     url: "https://www.linkedin.com/in/%E4%B9%89%E6%96%87-%E6%B6%82-5951a124b/"
#   - name: "Jiaqi Ma"
#     url: "https://jiaqima.github.io/"
---

## Introduction

Despite the fast-paced development of the *machine unlearning* community, the evaluation of the performance of machine unlearning algorithms remains a big open problem due to the lack of a unified framework and rigorous justification. In this work, we theoretically formalized the *unlearning sample inference game* for provable and reliable empirical evaluation of machine unlearning algorithms, tackling one of the most foundational problems in this field.

## Unlearning Sample Inference Game

The idea is simple: you split the data into three parts called *retain* set, *forget* set, and *test* set, and request the defender to learn on the retain set plus the forget set, and then unlearn the forget set at the end. On the other hand, you throw a bunch of data to the adversary from either only the forget set or the test set, and let the adversary guess which set we're using. Intuitively, if the forget set's information is left in the unlearned model, then the adversary can just feed the data we throw to it to the unlearned model, and infer something non-trivial.

<div align="center">
	<img src="./figures/flow.png"/>
</div>

### Nice Properties
