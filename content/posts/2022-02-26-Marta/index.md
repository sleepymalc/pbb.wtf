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

Every time I heard about this, I doubt they haven't seen [TotalFinder](https://totalfinder.binaryage.com/) before. Though I can certainly write another paragraph introducing [TotalFinder](https://totalfinder.binaryage.com/) to you.
But sadly, while Apple is moving on to M1 chips, [Totalfinder](https://totalfinder.binaryage.com/) is too old to keep up with the pace to be compatible with this new chip architecture. Indeed, it stops updating and is now free to everyone since it's not maintained anymore.
There are two things [Totalfinder](https://totalfinder.binaryage.com/) done well which outperforms Finder:
1. Global hotkey support. It can be open *anywhere* by user-defined shortcut. This is useful but can be achieved by other apps, such as [Alfred 4](https://www.alfredapp.com/).
2. Multiple tabs supports with double panels display. This is especially useful if you need to move things around by keyboard. If you're using Finder, then you'll need to open multiple windows to achieve this, but now you can do the same thing with only one active window.
After some surfing, I found another alternative, [Marta](https://marta.sh/). It's better in some ways compare to [Totalfinder](https://totalfinder.binaryage.com/), but not that convenient in others. Nevertheless, it's *free*, *natively support*, and most importantly, *it's cute*!

The author of [Marta](https://marta.sh/) [Yan Zhulanow](https://yanex.org/): "this cute fox stands for quick and smart, just like [Marta](https://marta.sh/)".
<p align="center">
	<img src="./icon-hand-draw.png"/>
</p>

# 🦊 Marta - A Finder 🦊
As a developer and hardcore mathematician, I barely use pen and paper to write stuff, even if doing math. (Yes, this means I typeset my course note in $\LaTeX$ also, check [here](https://github.com/sleepymalc/Notes)) And 
to be efficient enough, I hate moving my hand off my keyboard, including using a Trackpad or mouse. You may ask, "Ok, so what? You can use arrow keys moving around in Finder too!" Well, this is true, in some sense. If 
you only use Finder to navigate around your files, then it may be sufficient for your usage. But if you need to open multiple tabs and want to access them quickly, then Finder is **not** the way to go for sure. It's extremely 
slow to open multiple windows and let it float around your workspace and try to use a mouse/Trackpad to drag files around. Instead, I would like to do all these in a single window in a well-organized manner.

# Configuration
## Navigating 


## Copy/Cut


## Create New Files/Folders



## Double Panels



## Default Editor



## Preview



## Global Hotkey



## Personal Configuration
Let's see the configuration file.
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

