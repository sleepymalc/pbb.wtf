---
title: "$ ls ./Notes"
tags: ["math", "notes", "LaTeX"]
date: Updating
path: "posts/Notes"
excerpt: 📝 Notes for (mostly math) classes I took at the University of Michigan.
cover: "./preview.png"
---

# Note

These are the lecture notes I took, and if you're interested in the $\LaTeX$ code, have a look on [GitHub](https://github.com/sleepymalc/Notes). If you're interested in my setup, look at this [GitHub repo](https://github.com/sleepymalc/VSCode-LaTeX-Inkscape) or just [here](./VSCode-LaTeX-Inkscape).

## What's in here?

All notes are written in modern style $\LaTeX$ with explicit definition/theorem references and hyperlinks. Also, the drawing is done professionally and cleanly.

## Junior

### Fall 2021

#### Linear Programming (MATH561/IOE510/TO518 @Umich)

<p>
	<img src="./figures/MATH561.png" align="right" width="18%"/>
</p>

This is the first course in the series of graduate-level, large-scale and rigorous mathematical programming courses taught by [Jon Lee](https://sites.google.com/site/jonleewebpage/). Topics include **Duality Theorems**, the mathematical rigorous **Simplex Algorithm**, **Complementary Slackness**, **Large-Scale Linear Programming**, **Sensitivity Analysis**, and **Integer Programming** with their applications.

[\[pdf\]](./Notes/LinProg.pdf) [\[$\LaTeX$\]](https://github.com/sleepymalc/Notes/tree/main/MATH561-Linear-Programming)

> This course is not intended to teach you how to *hand-solve small-scale* linear programming problems, rather, it's intended to give a rigorous foundation of solving *large-scale* linear programming problems in an algorithmic way. We rely on `python` and `Gurobi` for examples to solve various problems in the assignments.

#### Analysis of Social Networks (EECS544/EECS444 @Umich)

<p>
	<img src="./figures/EECS544.png" align="right" width="18%"/>
</p>

This is a graduate-level course about social network analysis taught by [Vijay G Subramanian](https://subramanian.engin.umich.edu/), aiming at a rigorous mathematical understanding of various social network algorithms and theories. Topics include **Graph Partitioning Algorithms**, **Stochastic Processes**, **Random Graph Theory**, and **Algorithmic Game Theory**, including **Auctions** and **Matching Market Algorithms**.

[\[pdf\]](./Notes/SocNetAnalysis.pdf) [\[$\LaTeX$\]](https://github.com/sleepymalc/Notes/tree/main/EECS544-Analysis-of-Social-Networks)

> The course title makes this course's intended audiences rather narrow, but actually one can get a lot out of this course, especially some classical graph algorithms with theoretical analysis.

### Winter 2022

#### Algebraic Topology (MATH592 @Umich)

<p>
	<img src="./figures/MATH592.png" align="right" width="18%"/>
</p>

This is a graduate-level course taught by [Jennifer Wilson](http://www.math.lsa.umich.edu/~jchw/) about Introduction to Algebraic Topology. Topics include **CW-Complex**, **Fundamental Group**, **Van-Kampen Theorem**, **Homology**, and also their applications like [Lefschetz fixed-point theorem](https://en.wikipedia.org/wiki/Lefschetz_fixed-point_theorem).

[\[pdf\]](./Notes/AlgTop.pdf) [\[$\LaTeX$\]](https://github.com/sleepymalc/Notes/tree/main/MATH592-Introduction-to-Algebraic-Topology)

> Some topology and abstract algebra background is required, especially group theory. But other than that, the course is self-contained enough.

#### Real Analysis (MATH597 @Umich)

<p>
	<img src="./figures/MATH597.png" align="right" width="18%"/>
</p>

This is the graduate-level real analysis course taught by [Jinho Baik](http://www.math.lsa.umich.edu/~baik/Welcome.html). Topics include **Measure Theory**, **Hilbert Spaces**, **Banach Spaces**, **$L^p$ Spaces**, and some **Fourier Analyses**. While focusing on real measures, we did discuss signed and complex measures for completeness.

[\[pdf\]](./Notes/ReAnalysis.pdf) [\[$\LaTeX$\]](https://github.com/sleepymalc/Notes/tree/main/MATH597-AnalysisII)

> This course is pretty rigorous and well-structured and acts as a pre-requests for [functional analysis (MATH 602)](#functional-analysis-math602-umich). It's self-contained enough, and only need some previous exposure of mathematical analysis.

## Senior

### Fall 2022[^1]

[^1]: I also took Nonlinear Programming (MATH663/IOE611), but the professor provided excellent lecture slides, so I won't bother scribing it myself.

#### Randomness and Computation ([EECS572](https://mahdi.ch/eecs572/) @Umich, TA)

<p>
	<img src="./figures/EECS572.png" align="right" width="18%"/>
</p>

This is the advanced graduate-level theory course focused on randomized complexity and related topics taught by [Mahdi Cheraghchi](https://mahdi.ch/). Topics include various randomized algorithms, Randomized Complexity, Markov Chains, Random Walks, Expander Graphs, Pseudo-random Generators, and Hardness v.s. Randomness.[^2]

[\[pdf\]](./Notes/RandComp.pdf)

> Overall a rigorous course covering all background knowledge one might need to do research in the related fields. I'm grateful to be a teaching assistant for this course together with Neophytos Charalambides as an undergrad.

[^2]: Sorry for not being able to provide the source code due to the class policy.

#### Approximation Algorithms and Hardness of Approximation (EECS598-001 @Umich)

<p>
	<img src="./figures/EECS598-001.png" align="right" width="18%"/>
</p>

This is the graduate-level algorithm course taught by [Euiwoong Lee](https://web.eecs.umich.edu/~euiwoong/), which focuses on methods of designing and analyzing approximation algorithms, together with the theoretical background on showing the hardness of approximation. Topics include **Covering**, **Clustering**, **Network Design**, and **CSP**. We also discussed **Lasserre (SoS) Hierarchy**, **Unique Game Conjecture**, and **Probabilistic Checkable Proofs**.

[\[pdf\]](./Notes/AppxAlgo.pdf) [\[$\LaTeX$\]](https://github.com/sleepymalc/Notes/tree/main/EECS598-001-Approximation-Algorithms-and-Hardness-of-Approximation)

> This is one of the most exciting courses I have taken: algorithmic design, hardness of approximation and fancy topics such as *SoS hierarchy*, *PCP*, *UGC* are all fun to learn, especially the approximated complexity theory part.

#### Functional Analysis (MATH602 @Umich)

<p>
	<img src="./figures/MATH602.png" align="right" width="18%"/>
</p>

This is the graduate-level functional analysis course taught by [Joseph Conlon](http://www.math.lsa.umich.edu/~conlon/). The focus of this course is rather standard, including **Banach and Hilbert Spaces Theory**, **Bounded Linear, Compact, and Self-Adjoint Operators Theorem**, **Representation, Hahn-Banach, Open Mapping Theorem**, and **Spectral Theory**. We also covered some point-set topology along the way.

[\[pdf\]](./Notes/ReAnalysisII.pdf) [\[$\LaTeX$\]](https://github.com/sleepymalc/Notes/tree/main/MATH602-Real-Analysis-II)

> A rigorous course giving you the needed tools for analyzing function spaces. It'll give you a solid understanding on infinite dimensional vector space and how to deal with operators over these spaces.
