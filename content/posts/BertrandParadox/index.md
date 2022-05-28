---
title: "bool p = 0.8;"
tags: ["math", "random"]
date: 2022-05-28
path: "posts/BertrandParadox"
excerpt: "🧠 Extend logic logically: The right way of doing probability."
cover: "./preview.png"
---

> I'm working with probability intensively in the past few months, and some questions just naturally arose... I think it's time to say something.

# Introduction
> Required: *Probability*, *Abstract Algebra*. 

## Classical Probability
In modern mathematics, there are essentially two ways of building everything from ground up: one is set theory (e.g., [ZF-set theory](https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory)), another is type theory (e.g., [HoTT](https://en.wikipedia.org/wiki/Homotopy_type_theory)).
But these two are just subfields of *Mathematical logic*: People have a clear idea that given $A,B$,[^1] either 
$$
A\implies B\text{ or } A\;\not\!\!\!\!\implies B
$$
is true, and one of them must be true, but not both.

[^1]: Regardless what $A$ and $B$ is, which depends on the content (i.e., under ZF-set theory or HoTT).

Now, someone comes in and said: "*What about our information is not **complete**? Then I suppose that I can at least deduce how **true** $P\colon A\implies B$ is if I have some information about $A$ and $B$?*"
The idea of *probability* then kicks in: We try to *assign* a real value $p\in[0,1]$ between $0$ and $1$ to *measure*[^2] how true something is with some slackness.

[^2]: The word *measure* is chosen since Measure Theory is really the underlying backbone of probability theory.

But then something gets a bit messy here. In classical probability theory and the number of possible outcome of some experiment is finite, say $N$, and we have no information about whether one outcome will be more likely than others, then we just assign each outcome with a probability $p=1/N$ evenly without problems.

### Thought Experiment: When everything is finite
consider the experiment we're doing is *tossing coins*. If we know nothing about the coin and how others is going to toss that coin, then the probability should just be 
$$
p_{\text{head}}=p_{\text{tail}}=\frac{1}{2}.
$$

But if we have some information about that coin, says that that coin is made in a way such that two sides are both heads (we don't know this, but the people tossing it knows), then for us, 
$$
p_{\text{head}}^{\text{us}}=p_{\text{tail}}^{\text{us}}=\frac{1}{2},
$$
while for the person (call him $c$ for cheating 😡) tossing that weird coin, 
$$
p_{\text{head}}^{c}=1,\quad p_{\text{tail}}^{c}=0
$$
in this case. 
> What's really happening here is that, our information of that tossed coin is different from $c$. For $c$, there are really just one possible even outcome, while for us, there are two and there are no preferences whatsoever.

But now, if we consider the case that there are infinitely many possible outcomes, then what should we calculate the probability in *the right way*? 

### Thought Experiment: When $\infty$ involves
Let's consider the following experiment: There is a black box (you can't see what's inside) contains some dice with various sides, e.g., a usual $6$-sided die, 
a $15$-sided, etc. I'll randomly pick one and roll it (you still can't see this process). Now, what's the probability of the result being $8$?

"*There is just not enough information!*" you might say. But after the second though, a clever student will yell at me "*The probability is $0$ since there are infinitely many outcomes, and we can't distinguish them!*" 
Well, while this is true, I think this is a good example to let us aware that it gets tricker when infinity involves: sometimes, the answer may not be clear, ***AT ALL***.

> As a spoiler, the main reason that we're able to find out the answer of the above cases, is because of the *principle of indifference* is well-defined.


# Bertrand's Paradox
When infinity is more involved, the trouble comes along. Consider the following experiment: Given a circle and an equilateral triangle inscribed in it, what is the probability that a random chord is longer than a side of the triangle?

<p align="center">
	<img src="figures/0.png"/>
</p>


While the problem may seem innocent at the first look, but there are much more to say. Nevertheless, let's try to solve this.

## First Attempt: Random Endpoints
Let's try to find a random chord in a circle first. A natural way to do this is to randomly picked two points on the circle and link them together. We see that without loss of generality, we can assume that one of the 
randomly chosen endpoint coincides with one vertex of the inscribed triangle (otherwise we just rotate the triangle to make this the case). Then, **we randomly choose the second endpoint on the circle and make a chord between them**.

Observe that if the other chord endpoint lies on the arc between the endpoints of the triangle side opposite the first point, the chord is longer than a side of the triangle. 

<p align="center">
 	<img src="figures/1.png" />
	 <figcaption>If the second endpoint lies on the purple arc, it's shorter; otherwise (cyan) it's longer.</figcaption>
</p>

The length of the arc is one third of the circumference of the circle, therefore the probability that a random chord is longer than a side of the inscribed triangle is
$$
p_{\text{endpoint}}=\frac{1}{3}.
$$

## Second Attempt: Random Midpoints
But after a second thought, one can find out that there are multiple ways of choosing a random chord! We note that for every point in the circle, if we view it as the *midpoint* of a chord, that chord can be **uniquely determined**. 

Hence, by **choosing a random point in the circle** corresponds to determine a random chord. Again, without loss of generality, we may assume that one side of the inscribed triangle is parallel with the chosen chord. We then see 
that as long as the chosen midpoint is *outside the <u>inscribed circle</u> of the triangle*, the corresponding chord is shorter; otherwise it's longer.

<p align="center">
	<img src="figures/2.png"/>
	<figcaption>Again, purple corresponding to the shorter case and cyan corresponds to the longer case.</figcaption>
</p>

In this viewpoint, we see that the probability that a random chord is longer than a side of the inscribed triangle is equal to the ratio between the area of the inscribed circle and the area of the original circle, which is 
$$
p_{\text{midpoint}}=\left(\frac{1}{2}\right)^2=\frac{1}{4}.
$$

## Third Attempt: Random Radial Points
This is similar to the random midpoints method, but there is a subtle difference. Here, we first **choose a random radius** and again, without loss of generality, we may assume that one side of the triangle 
is perpendicular with that chosen radius. Then, we **choose a random point on that radius (a radial point)** and make it as the midpoint of the chord. The chord is unique as we mentioned in the random midpoints method, 
and from the same reason, if the chosen point is on the inner half of the radius, then the corresponding chord is longer, otherwise it's shorter.

<p align="center">
	<img src="figures/3.png"/>
	<figcaption>Purple corresponding to the shorter case and cyan corresponds to the longer case.</figcaption>
</p>

But we see that the calculation is different. The probability that a random chord is longer than a side of the inscribed triangle is equal to simply 
$$
p_{\text{radial-point}}=\frac{1}{2},
$$
since we choose that random point on the radius uniformly, and from elementary geometry, the edge of the triangle split the radius in half exactly.

## Experiment
I encourage that you try to simulate the above three *process* yourself [here](https://1-10000th.com/bertrand_paradox/).

## What's going on?
This is known as *Bertrand's Paradox*. Different **processes** of choosing a random chord correspond to different results, and every process seems correct.

What I'm going to say may disappoint you, but this is a philosophical question rather than a mathematical paradox: There are just (mainly) two different view points in probability, *frequentist probability* and *Bayesian probability*.

### Frequentist Probability
In the frequentist interpretation, probabilities are discussed only when dealing with well-defined random experiments. The set of all possible outcomes of a random experiment is called the sample space of the experiment. 
An event is defined as a particular subset of the sample space to be considered. For any given event, only one of two possibilities may hold: it occurs or it does not. The relative frequency of occurrence of an event, 
observed in a number of repetitions of the experiment, is a measure of the probability of that event. This is the core conception of probability in the frequentist interpretation.

A claim of the frequentist approach is that, as the number of trials increases, the change in the relative frequency will diminish. Hence, one can view a probability as the limiting value of the corresponding relative frequencies.

### Bayesian Probability
In contrast of frequentist interpretation, here, Bayesian probability is interpreted as reasonable expectation representing a state of knowledge or as quantification of a personal belief. Namely, this is the idea of 
***extension of propositional logic***, with the propositions' truth or falsity is unknown. 

> There are more subcategories in probability, but it's too involved...

### The *Right Way* to do Probability


## Discussion

# Further Reading
* [Bertrand's Paradox (with 3blue1brown) - Numberphile](https://www.youtube.com/watch?v=mZBwsm6B280)
* [More on Bertrand's Paradox (with 3blue1brown) - Numberphile](https://www.youtube.com/watch?v=pJyKM-7IgAU)