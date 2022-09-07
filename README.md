# Terminal Project Overview

## Purpose

Everybody (and their mothers) use Linktree or some other similar alternative for their bio link. Since it's incredibly overused, not to mention boring, I wanted to create something that was more unique. Since I soend all my time coding I figured a terminal theme would be a great design choice to represent me & my interests. 

## Design

I chose a dark background because dark themes are the best, plus most command lines have a dark background. I went with a monospaced font to mimic the type of font associated with code. Considering the command line is literally the ant-thesis of a GUI it certainly isn't winning any design contests, so I decided to inject some personality with a pink heart caret, matching pink anchor text and a little bit of ASCII art. 

## Technologies

Terminal Themed Links Page built with the [t.js library](https://mntn-dev.github.io/t.js/)

## Challenges

After watching the animation through for the 20th time while I was creating the site, I realized that repeat visitors certainly won't want to sit and wait for the entire animation to type out all of the text in order to get to the content. In an effort to avoid people simply leaving without accessing my links, I decided to add a "skip" function. 

This was not something that was built-in to the library that I used for the text animation, so I had to try to figure out how to implement this on my own. The library does have an option to insert text instantly by wrapping your text in < ins > tags. I thought I might be able to add a skip button with an event handler to add the < ins > tags around all of the text, to insert eertything immediately. Unfortunately, that didn't work and I couldn't find any answers in the documentation so I decided to go a different route.

Since I was already using Jquery for the typing animation I decided to use a Jquery solution for this problem. 

Duplicate the content & give each section a unique id: 
1. One section (id #main) includes the typing animation
2. The other section (id #skipped) is just the static text content
Then I use Jquery to toggle between them.

By default the #skipped section is hidden.
When the skip button is pressed the #main section (with the typing animation) is hidden instead, and the #skipped section is shown.
When the skip button is pressed, I also hide the skip button so that the user cannot toggle back to the animated version.
