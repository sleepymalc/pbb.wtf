---
title: "Modeling Fair Redistricting Commissions"
tags:
- "Algorithmic Game Theory"
- "Fairness"
date: Jan 2023 - April 2023
path: "research/modeling-fair-redistricting-commissions"
excerpt: "We resolved *Gerrymandering* by a simple (dumb) voting scheme..."
selected: true
cover: "./preview.png"
links:
  - name: "pdf"
    url: "./Modeling-Fair-Redistricting-Commissions.pdf"
---

## Introduction

In the last semester of my bachelor's journey, I decided to take a course about algorithmic game theory. In the end, I did this fun, small project with [Henry Fleischmann](http://www-personal.umich.edu/~henryfl/index.html), where we managed to prove something *nontrivial* regarding *gerrymandering*.[^1] The ultimate goal is to design a voting mechanism (also referred to as *social-choice function*) that is ***fair***.

[^1]: Not all redistricting plans are created equal; when the redistricting process is commandeered by partisan actors drawing maps to maximize their electoral gains, the act is colloquially referred to as *gerrymandering*.

## The Balanced Mechanism

### Social-Choice Function

The usual model of a voting scheme is known as the [*social-choice function*](https://en.wikipedia.org/wiki/Social_choice_theory#Social_choice_functions) under the context of algorithmic game theory. The basic idea is to collect everyone's preferences profile and return a final result, and in our project, we want to design a social-choice function that collects every's preferences for maps, and returns one at the end.

### Fairness

As one might expect, defining *fairness* is not a trivial thing to do. In our example, we want to achieve at least the following:

1. Group Strategy Proof: A generalized notion of [strategyproofness](https://en.wikipedia.org/wiki/Strategyproofness), where even if a group of voters colludes to misreport their preferences, there's no way they can improve their utility (i.e., achieving their goal such as selecting a map which is biased to a particular party). In other words, even if a group of people can collude, being truthful is the best strategy.
2. Unbias: We want to always select an unbiased map, which we refer to as a *neutral map*.

## Conclusion
