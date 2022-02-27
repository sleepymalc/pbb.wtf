---
title: "Finder().replace_by(\"Marta\")"
tags: ["macOS", "app"]
date: 2022-02-26
path: "posts/Marta"
excerpt: Marta, a powerful Finder alternatives. It let you control your file flow complete by keyboard. 
cover: "./preview.png"
---

# Introduction
I have been using macOS for a straight 4 years now, though most of the design choices made by excellent Apple engineers are easy to use, and even if it's not the case, there are at least some alternatives. But Finder is different.
I asked lots of my macOS friends, and nearly all of them think Finder is fine, "it's fast and easy to use."

Every time I heard about this, I doubt they haven't seen [TotalFinder](https://totalfinder.binaryage.com/) before. Although I can write another paragraph introducing [TotalFinder](https://totalfinder.binaryage.com/) to you,
but sadly, while Apple is moving on to M1 chips, [Totalfinder](https://totalfinder.binaryage.com/) is too old to keep up with the pace to be compatible with this new chip architecture. Indeed, it stops updating and is now free to everyone since it's not maintained anymore.
There are two things [Totalfinder](https://totalfinder.binaryage.com/) done well which outperforms Finder:
1. Global hotkey support. It can be open *anywhere* by a user-defined shortcut. This is useful but can be achieved by other apps, such as [Alfred 4](https://www.alfredapp.com/).
2. Multiple tabs support with double panels display. This is especially useful if you need to move things around by keyboard. If you're using Finder, then you'll need to open multiple windows to achieve this, but now you can do the same thing with only one active window.
After some surfing, I found another alternative, [Marta](https://marta.sh/). It's better in some ways compared to [Totalfinder](https://totalfinder.binaryage.com/), but not that convenient in others. Nevertheless, it's *free*, *natively support*, and most importantly, *it's cute*!

The author of [Marta](https://marta.sh/) [Yan Zhulanow](https://yanex.org/): "this cute fox stands for quick and smart, just like [Marta](https://marta.sh/)".
<p align="center">
	<img src="./icon-hand-draw.png"/>
</p>

# 🦊 Marta - A Finder Alternative 🦊
As a developer and hardcore mathematician, I barely use pen and paper to write stuff, even if doing math. (Yes, this means I typeset my course note in $\LaTeX$ also, check [here](https://github.com/sleepymalc/Notes)) And 
to be efficient enough, I hate moving my hand off my keyboard, including using a Trackpad or mouse. You may ask, "Ok, so what? You can use arrow keys moving around in Finder too!" Well, this is true, in some sense. If 
you only use Finder to navigate around your files, then it may be sufficient for your usage. But if you need to open multiple tabs and want to access them quickly, then Finder is **not** the way to go for sure. It's extremely 
slow to open multiple windows and let it float around your workspace and try to use a mouse/Trackman to drag files around. Instead, I would like to do all these in a single window in a well-organized manner.

<p align="center">
	<img src="./demo.png"/>
</p>

# Features
Here, I'm going to briefly introduce some basic, but powerful features which make [Marta](https://marta.sh/) standout. For the full documentation, please check the official [docs](https://marta.sh/docs/) for reference.

The core functionality in [Marta](https://marta.sh/) is implemented as *action*, which can be realized as a command which will do something, and this can be combined with a shortcut. We'll soon see what this means.

## Navigating 
In Finder, you can use arrow keys to navigate through folders, namely 
*  `←` : Move to the parent folder
*  `→` : Move in the folder if the current focus is on a folder
* `↑/↓`: Move up and down.

You can do not only the same, but more with [Marta](https://marta.sh/)! The definition of the right key in [Marta](https://marta.sh/) in default is the $\texttt{right}$ *action*
```JSON
"Right" "core.move.right"
```
which essentially do the same thing as in Finder. But rather, you can redefine (yes, you can **complete redefine** all the key-bindings) it as 
```JSON
"Right" "core.open"
```
which can not only open a folder, which will bring you to that folder, but if your current focus is on a file, you can open it by a single `right` key! This makes life much easier, since if you want to 
open a file in Finder, you'll need to use `Cmd + o` instead.

One thing that is worth mentioning is that [Marta](https://marta.sh/) set `←` as `core.move.left`, which is a bit awkward if you are used to Finder. So instead, I change it to 
```JSON
"Left" "core.go.up"
```
which is more natural for me. 

## Create New Files/Folders
By default, you can create **any** types of file in [Marta](https://marta.sh/) by the following $\texttt{new.folder}$ and $\texttt{new.file}$ *actions*:
```JSON
	"F7" 		"core.new.folder"
    "Shift+F7" 	"core.new.file"
```
You can bind it to your favorite key-bindings to match your own habits. For me, since [Totalfinder](https://totalfinder.binaryage.com/) follows the same shortcut as Finder, hence I change it to 
```JSON
	"Shift+Cmd+n"   "core.new.folder"
    "Shift+Cmd+f"   "core.new.file"
```
while `Shift + Cmd + n` is the default shortcut to create a new folder in Finder, but there is no such shortcut, or I should say, there is no easy way to create a new file in Finder, hence you get another 
useful shortcut!
For example, if you want to create a simple `.txt` file, you can just type `Shift + Cmd + f`, then we will see 
<p align="center">
	<img src="./create-new-file.png"/>
</p>
then you can type the name of the file (with extension name for completeness), then you're good to go!
<p align="center">
	<img src="./create-new-file-2.png"/>
</p>

We see that we're done!
<p align="center">
	<img src="./create-new-file-3.png"/>
</p>

Now, after creating files/folders, the next question is, how to open them?

## Open
As we mentioned before, we can open the file by `→`, but there is some subtly here, let me explain.
### Compressed file
Interestingly, [Marta](https://marta.sh/) let you go *directly in* a `.zip` file and see the content in it. What if you want to do something else about it? Like, open it by other apps to unzip? By default, we have the following.
```JSON
    "Cmd+Return" "core.open.with"
```
This allows you to open a file with different apps. Personally, I use [Keka](https://www.keka.io/en/), which is a portable, powerful but light-weight file archiver. Say I just zipped the newly created `text.txt` file and want to 
unzip it, I can just simply press `Cmd + Return`, then we will see the following

<p align="center">
	<img src="./open.png"/>
</p>

Then I can just use arrow keys to select [Keka](https://www.keka.io/en/)
<p align="center">
	<img src="./open-2.png"/>
</p>
Hit the enter, then we have 
<p align="center">
	<img src="./open-3.png"/>
</p>

See that `text 2.txt`? That is the unzipped file!

### Projects
For those developers, I bet you'll need to open an **entire folder** very often. And as far as I know, there is no easy way to do this in Finder. But in [Marta](https://marta.sh/), you can use the $\texttt{edit}$ *action*:
```JSON
    "F4" "core.edit"
```
As you might already observe, I tend to define my keybinding with the keyword's first alphabet being the same as the first alphabet of the functionality this keybinding stands for. Hence, rather than remember this weird `F4` functional key, I use 
```JSON
    "Cmd+e"	"core.edit"
```

What this action $\texttt{edit}$ is really doing is that after you specify an **text-editor**, which you can specify in the configuration file, it'll open whatever you're focusing on within that app. For example, I use [Visual Studio Code](https://code.visualstudio.com/) as 
my primarily IDE, so I define 
```JSON
environment {
    textEditor "Visual Studio Code"
}
```
So, if you now want to open a project, you can simply press `Cmd + e`, then it'll open this folder within your favorite IDE you specified! 

### Preview
You might already notice, [Marta](https://marta.sh/) doesn't provide rich support of figures as your visual tool for file organization. But as in Finder, you can always press `Space` to open/close a quick *preview* (it's formally called *quick look*) to see 
what this file actually is.

## Double Panels
If you follow all these until now, you might have one question: "So when the core feature - *Double Panels* comes into play?" Here it comes, namely when you want to move your file around. This is the most complex section, hence I leave it to the very end. Let's start!
### Copy

### Move

### Clone Left/Right (folder)

## Search Action
Here comes to an end of this brief introduction for [Marta](https://marta.sh/). Though you might feel overwhelming for now, but there is actually a very nice feature provided natively in [Marta](https://marta.sh/) which helps find all the 
*actions* quickly when you forget the keybinding. When you press `Shift + Cmd + P`, a search bar named *Search Action* will pop-up like this: 
<p align="center">
	<img src="./search-action.png"/>
</p>

Then, you can type any action you want. For example, in [Open Compressed file](./posts/Marta#compressed-file), I didn't mention how I zip that `test.txt`. Indeed, there is a built-in *action* in [Marta](https://marta.sh/), but since I didn't compress files 
that often, hence I do not assign a keybinding for this. Instead, I can simply leave my focus on the file I want to zip (potentially multiple files, which can be selected by using `Shift + ↑/↓` as you expected) and then press `Shift + Cmd + p`, search for `Compress`:
<p align="center">
	<img src="./search-action-2.png"/>
</p>

Then you just press `Enter`, it'll zip the file for you automatically! 

## Personal Configuration
Let's see the configuration file. To open the configuration file, you can simply press `Cmd + ,` in [Marta](https://marta.sh/). And to apply all my configurations, copy the following codes into the **Right** panel of the configuration file. The left hand 
side of the configuration file is the default config for reference.

```JSON
behavior {
    theme "Dark"
    
    actions {
        core.trash.confirm false
        
        core.lookup.mode "substring"
    }
    
    table {
        circularSelection true
        iconSize 24
    }
}

keyBindings {
    "Return"        "core.rename"
    "Right"         "core.open"
    "Left"          "core.go.up"
    
    "Shift+Cmd+n"   "core.new.folder"
    "Shift+Cmd+f"   "core.new.file"
    
    "Cmd+e"         "core.edit"
    "Shift+Cmd+x"   "core.move.inactive"
    "Cmd+o"         "core.open"
    "Cmd+x"         "core.move"
    
    "Shift+Cmd+t"   "core.terminal.activate"
    
    "F4"            null
    "F6"            null
    "F7"            null
    "Shift+F7"      null
    "F8"            null
    "Cmd+y"         null
    "Backspace"     null
}

environment {
    textEditor "Visual Studio Code"
}

setup {
    actionBar [
        "core.edit"
        "core.open"
        "core.open.with"
        "core.rename"
        "core.new.folder"
        "core.new.file"
        "core.trash"
        "core.preview"
    ]
}

etty {
    theme "SolarizedLight"
    fonts {
        normal [ "Fira Code" 12]
    }
}
```
### Theme
One thing I didn't bring up is that there are actually different themes you can choose from, here is some from the [official document](https://marta.sh/docs/configuration/themes/): 
1. Kon
<p align="center">
	<img src="./kon.png"/>
</p>

2. Dark
<p align="center">
	<img src="./dark.png"/>
</p>

3. Classic
<p align="center">
	<img src="./classic.png"/>
</p>

4. Sakura 🌸
<p align="center">
	<img src="./sakura.png"/>
</p>

I actually quite like the look of Sakura 🌸, but since I use dark mode throughout all application, hence I just give up on this... Definitely try it out! To change the theme, 
you can either just work in the configuration file, or to [search the $\texttt{Switch Theme}$ action](./posts/Marta#search-action):
<p align="center">
	<img src="./switch-theme.png"/>
</p>

# Conclusion
Overall, I think [Marta](https://marta.sh/) provides excellent customizabilities, while still easy enough for simple use. If you think you need an extra boost of productivity, 
or even just want to try out new applications, [Marta](https://marta.sh/) is definitely worth giving it a shot!