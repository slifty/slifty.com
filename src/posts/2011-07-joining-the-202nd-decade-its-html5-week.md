---
title: "Joining The 202nd Decade: It’s HTML5 Week!"
date: 2011-07-26
categories:
  - work
tags:
  - attn-span-2
  - learning
  - knight-mozilla-opennews
---

I have two new missions for the week: become an HTML5 and CSS3 guru, and go back to make sure [my projects on github](https://github.com/slifty) (there aren’t many at the moment) are well organized.  These goals were both inspired by three recently acquired heroes of mine: [Chris Heilmann](http://ps.ht/n7y6Ol), [John Resig](http://bit.ly/q2FFlo), and [Jesse James Garret](http://ps.ht/qGQ7G7) — all guest speakers last week for the Mozilla Knight Learning Lab.

The HTML5 goal didn’t take much prodding because it’s something I should have done last year.  I delayed because jQuery was meeting my needs in terms of prototypes and I was cramming my head full of nodejs, arduino, OSX and terminal magic, git and mercurial, Python, Matlab, how to make almost anything, and all sorts of nerdly things that I should have picked up during my undergrad years but somehow avoided.

What convinced me this time – aside from the fact that it is clearly the future of the web – is that my project for the Learning Lab, a C-SPAN analysis and summary tool called ATTN-SPAN, is pretty much exactly the kind of project that HTML5 is supposed to improve.

The fit is probably best explained by going over the **three major hurdles I face for this project:**

1.  How do I collect and store the video content?
2.  How do I processes and personalize the video content?
3.  How do I present the video content?

Item 1 is partially solved thanks to some of the great researchers here at the Media Lab – and thanks to the [metavid project](http://www.metavid.org/).

Item 2 is going to be tricky, but that’s a can of worms that has very little to do with HTML5.  I’m hoping that I can turn the videos into an “event based” organization, where events are automatically identified things such as “senator A smiles” “senator B says X” “senator C shows a picture of grazing cattle.”  I also want to leave room for user defined events such as “senator D says something I disagree with.”

Item 3 is where this week’s lectures become particularly important, for implementation, HTML5 is where video presentation and interaction suddenly becomes much more flexible.   The events described earlier in this post are going to drive an “personalized episode generation” algorithm which, for a given individual from a given state, will create a series of C-SPAN timestamps associated with video clips and all sorts of metadata.

As for design… Well, lets just say that clearly I’m going to have to spend some time re-watching that lecture by Jesse James Garret.  I’m going to take a few hours this week when I’m not reading up on HTML5 or creating buttons that allow you to discover the truth about anything online (link to this one coming soon) to do some wireframes for the ATTN-SPAN UX.