---
title: "assert wpm < efficiency"
tags: ["random"]
date: 2023-07-25
path: "posts/How2TypeFast"
excerpt: ⌨️ How to type?
cover: "./preview.png"
---

## Introduction

Do you think typing fast, i.e., achieving a high wpm (high word-per-minutes), is the only way to be efficient/productive? If you do, then this compact, 5-mins read post will blow your mind, making you *even faster*.[^1]

[^1]: In the sense of efficiency, go without saying.

### Mentality

What I'm going to share is not about how you can be fast in regular typesetting, e.g., achieving wpm 150 in [monkeytype](https://monkeytype.com). Rather, it's about some of the most fundamental editing-related key remaps I have done.

> If you have read the post about [VSCode-LaTeX-Inkscape](./VSCode-LaTeX-Inkscape) and are still wondering how I can typeset these [notes](./Notes) in class, here it is: this is my only secret left.

Before walking through my key remaps one by one, I want to give you the mentality you should have when adapting my settings: Your hands should move **as little as possible**. You might already hear this multiple times, but you should bring this to an **extreme**, i.e., staying your hand on the main row (i.e., right index finger on `f`, left index finger on `j`) is the *bare minimum* you should achieve.

Let me ask you: *How do you typically delete a character?* If you

<p style="text-align: center;">use <code>delete</code> (<code>backspace</code>) with your right little finger traveling across 2 columns and 2 rows,</p>

then you should keep reading.

### Tool matters

First thing first, please get yourself a good keyboard. I use [HHKB](https://happyhackingkb.com/) Professional Hybrid Type-S personally. It's fast, elegant, and customizable.[^1]

### The Setup

I will use macOS and [Karabiner-Elements](https://karabiner-elements.pqrs.org/) as our working example, but the same concept should be easily ported to other operating systems. The following is a snapshot of my setting.

<div align="center">
	<img width="80%" src="figures/Karabiner-Elements.png"/>
</div>

You can easily import these settings [at the end](#import-settings), which can be used as your own setting's starting point. Now, let's walk through them one by one.

## Arrow Keys

## Math-Related Characters

## Escape, Left and Right Shift

## Import Settings

I don't know any easy (i.e., 1-click) way to import setting from a profile with [Karabiner-Elements](https://karabiner-elements.pqrs.org/), but the basic steps are the following.

1. Open [Karabiner-Elements](https://karabiner-elements.pqrs.org/), go to *Misc* and click on *Export & Import*.
    <div align="center">
		<img width="80%" src="figures/sourcecode-1.png"/>
	</div>
2. Copy [`Alone.json`](./How2TypeFast/Alone.json), [`Double.json`](./How2TypeFast/Double.json), [`Right-Cmd.json`](./How2TypeFast/Right-Cmd.json) into `.config/karabiner/assets/complex_modifications`.[^2]
    <div align="center">
		<img width="80%" src="figures/sourcecode-2.png"/>
	</div>
3. Again open [Karabiner-Elements](https://karabiner-elements.pqrs.org/), go to *Complex Modifications* and click on *Add rule*.
	<div align="center">
		<img width="80%" src="figures/sourcecode-3.png"/>
	</div>
4. You should be able to enable these rules easily.
	<div align="center">
		<img width="80%" src="figures/sourcecode-4.png"/>
	</div>

[^2]: If you came from [VSCode-LaTeX-Inkscape](./VSCode-LaTeX-Inkscape#karabiner-elements), then you add [`Inkscape.json`](./How2TypeFast/Inkscape.json) into `.config/karabiner/assets/complex_modifications`.
