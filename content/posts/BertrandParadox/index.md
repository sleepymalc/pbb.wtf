---
title: "bool p = 0.8;"
tags: ["math", "random"]
date: 2022-05-28
path: "posts/BertrandParadox"
excerpt: "🧠 Extend logic logically: The right way of doing probability."
cover: "./preview.png"
---

# Introduction
I'm working with probability intensively in the past few months, I think it's time to say something.

## Classical Probability
In modern mathematics, there are essentially two ways of building everything from ground up: one is set theory (e.g., [ZF-set theory](https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory)), another is type theory (e.g., [HoTT](https://en.wikipedia.org/wiki/Homotopy_type_theory)).
But these two are just subfields of *Mathematical logic*: People have a clear idea that given $A,B$,[^1] either 
$$
A\implies B\text{ or } A\;\not\!\!\!\!\implies B
$$
is true, and one of them must be true, but not both.

[^1]: Regardless what $A$ and $B$ is, which depends on the content (i.e., under ZF-set theory or HoTT).

Now, someone comes in and said: "*What about our information is not **complete**? I suppose that I can at least deduce how **true** $P\colon A\implies B$ is if I have some information about $A$ and $B$?*"
The idea of *probability* then kicks in: We try to *assign* a real value $p\in[0,1]$ between $0$ and $1$ to *measure*[^2] how true something is with some slackness.

[^2]: The word *measure* is chosen since Measure Theory is really the underlying backbone of probability theory.

But something gets a bit sloppy here. In classical probability theory and the number of possible outcome of some experiment is finite, say $N$, and we have no information about whether one outcome will be more likely than others, 
then we just assign each outcome with a probability $p=1/N$ evenly without problems, which is called **the principle of indifference**.

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
While infinity is an (potential) issue, but there's in fact something more serious and fatal. Consider the following experiment: Given a circle and an equilateral triangle inscribed in it, what is the probability that a random chord is longer than a side of the triangle?

<p align="center">
	<img src="figures/0.png"/>
</p>


While the problem may seem innocent at the first look, but there's an interplay between infinity and different viewpoints of probability. Nevertheless, let's try to solve this.

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

### Interpretation
In the view of frequentist probability, the original problem is not well-defined in the sense that we don't know *what exactly is the experiment corresponding to random chords*.
As shown in above, random endpoints, midpoints and radial point methods all make sense, and who know whether these three are all *reasonable* random experiment? Maybe there are more, we just don't know.

In particular, we see that the difference between midpoints and radial point methods is extremely subtle: the reasoning and the key feature (uniqueness of a chord corresponds to a midpoint) are the same, but just with different *process*
the answer is different.

But for someone who believes that there is a ***right way*** to do probability in every scenario (Bayesian probability 👀), this problem is well-defined enough in the sense that, the probability should reveal what's the state of our knowledge 
of a particular problem and how much can we exploit it and make it into our expectation of belief, so the probability in its own nature should be able to answer questions with subtly (in this case, not well-specified random experiment).

# Discussion
## Intuition of the Issue
An intuitive way to see why $\infty$ causes this paradox is the following: Imaging you can really *randomly* choose chords on a circle, and let's say we label every chord with a number and then choose a random number instead.[^3]

We first note that there are clearly uncountably possible different chords, so we may label every chord with a real number between $[0,1]$.[^4] Then, the ambiguity immediately arises: How should we assign the pairing between the real 
number and the chords? The thing is, since they are infinitely many real numbers and chords, we're extremely flexible in terms of assigning them. For example, I can make $[0,0.999999]$ pairing with chords that's all chords passing 
the center of the circle (namely all diameters), while make $[0.999999,1]$ pair with all other chords or another way around. Effectively, we're **choosing the distribution** in this pairing, making us biased toward some chords 
hence not uniformly random.


[^3]: This will not bring in additional complexity if we do it in isomorphic way.
[^4]: Under the [Continuum hypothesis](https://en.wikipedia.org/wiki/Continuum_hypothesis) with ZFC set theory, $\mathbb{R}$ is the smallest possible set to do this.

## Critique on Bayesian Probability
[Edwin Thompson Jaynes](https://en.wikipedia.org/wiki/Edwin_Thompson_Jaynes)[^5] is very opinionated about the **right way** to do statistic or to interpret probability (in a Bayesian way), so he come up with the idea of **maximum ignorance**
principle in order to tackle this paradox. Basically, maximum ignorance says that we can't assume anything if the problem is not specified, and he argued that we can use such principle to do probability without any ambiguity.

So in this case, the answer should be the same with respect to translation (since we should be able to move our circle in the space) and scale (we can scale the circle in the space) invariant.
Indeed, in one of his work, he concluded that the radial points method is the correct one to model this since it equipped with *translational* and also *scale* invariant.[^6]

[^5]: Who wrote the book [Probability Theory-The Logic of Science](https://bayes.wustl.edu/etj/prob/book.pdf).
[^6]: He basically argued that the radius points method has translational and scale invariant by a geometric argument, which is fine.

The truth is that, this idea of maximum ignorance which induces *scale* and *translation* invariant can still yield other answer since it still depends on the underlying procedure of random selection that one uses. In particular, Alon Droy 
shows that each of the solutions can be derived using rotational, scaling, and translational invariance, hence the maximum ignorance principle is just as subject to interpretation as the principle of indifference itself.

## Dealing with Randomness with $\infty$
> This is the only section where abstract is involved

From the discussion, how do we know that we're safe when dealing with things like "*choosing ___ randomly*"? The answer is, if there is a clear *symmetry* of that space, and we want our distribution to be *invariant* to that symmetry.

For example, if we say *choose a real number in $[0,1]$ randomly*, there should be no ambiguity. This is due to the fact that for $[0,1]$, there is one symmetry which is clear: the translation.
<p align="center">
	<img src="figures/trans_inv.png"/>
	<figcaption>For any little interval, moving it will not change its topological structure.</figcaption>
</p>

Hence, a uniform distribution with respect to this randomness need to be translational invariance as well. 
<p align="center">
	<img src="figures/dist_trans_inv.png"/>
	<figcaption>The green distribution is uniform, while the orange one is not.</figcaption>
</p>

In a formal algebraic language, the invariant with respect to the symmetry corresponds to whether the <u>group of symmetry acts ***transitively*** on the space</u>.[^7] In the above uniform example, we can choose any $\Delta$
such that it can take me from $a$ to $b$ by setting $a+\Delta\coloneqq b$, where $a,b\in[0,1]$. Hence, as long as the space we're working on has a clear symmetry while this symmetry acts transitively (with the technical *compactness* condition),
we're safe.

[^7]: An additional condition is that the space must be *compact* in order to be safe, but it's a bit technical here.

As in our example, we're trying to find a group of symmetry which acts as *transitively* on the space of **chords** as possible. In first two methods, we have rotational symmetry, but Jaynes argued that they're not the answer since 
only rotational symmetry is not enough.
<p align="center">
	<img src="figures/rot.png"/>
	<figcaption>Only rotational symmetry does not act transitively on chords since a shorter chord can't be transformed into longer one and vice versa.</figcaption>
</p>

While for the last method, we have translational symmetry in addition as shown by Jaynes. And we immediately see that with translational symmetry, we can turn any chord into another by translation and rotation.
<p align="center">
	<img src="figures/rot-trans.png"/>
	<figcaption>We transform the orange chord into the blue one by first rotating the circle and then translation it in the space.</figcaption>
</p>

# Final Words
Personally, though I like the idea of **extended mathematical logic** interpretation of probability such that probability as a model of knowledge, but I think that this is asking something beyond its capability. 