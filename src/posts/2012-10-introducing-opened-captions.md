---
title: "Introducing Opened Captions"
date: 2012-10-25
featuredImage: "/assets/images/2012/10/OC.png"
categories:
  - best
  - ideas-projects
  - work
tags:
  - c-span
  - drunk-sapn
  - introduction
  - opened-captions
  - knight-mozilla-opennews
---

I made something awesome last week: [Opened Captions](http://openedcaptions.com/).

[![](/assets/images/2012/10/OC.png "OC")](/assets/images/2012/10/OC.png)

At face value it just looks like a live feed of C-SPAN’s Closed Captions. This alone is actually pretty cool if you think about it, especially if you are a deaf political junkie who sits far away from the TV and can’t read the closed captions.

Of course there is more. The real excitement comes when you contemplate what’s happening to get those words to appear on your screen.

This system unlocks and syndicates a real-time dataset that used to be a pain in the ass to access. Now anyone can build applications and visualizations that update before those crafty politicians have even finished making their points. This post explains why Opened Captions is worth hacking with, what it takes to use it, and how it works.

## What is it Good For?

The Internet is filled with real-time updates triggered by online activity, but it still feels like magic when we see automatic updates driven by the real world. Opened Captions makes it easy for programmers to use live TV transcripts as an input.

_Note: version .001 only supports a single channel (and my server is pointed to C-SPAN). Eventually the protocol should expand to allow multiple channels._

Let’s consider C-SPAN. If a computer knows what is being said on C-SPAN this very second, it can do things like:

-   Change the background of your email client to reflect the issues being debated right this moment on the senate floor.
-   Generate modified, more amusing, transcripts by replacing key words and phrases with Tolkien lore (i.e. C-SPAN for Middle Earth)
-   Search through lyrics and generate a C-SPAN medley for you to rock out to while voting.
-   Send SMS messages 24/7 [commanding you to “drink”](http://openedcaptions.com/drunk-sapn) when certain phrases are spoken on air.

There are also possibilities that aren’t ridiculous. For instance, you could make tools that…

-   Improve the transcript by [automatically adding contextual information](http://openedcaptions.com/cardtext), such as definitions and histories thefted from Wikipedia.
-   Send emails with transcript snippets whenever a specific representative or state is being discussed on TV so you know what’s going on.
-   Parse out paraphrases of known fact checks and insert a credibility layer over the transcript feed (real time fact-checking).
-   Draw parallels between what is being said on TV and what is being said on Twitter.

I could go on and on and on. There is just so much potential!

## The Backend

Behind the stream is a first stab at a distributed architecture for Closed Captioning live-feeds. Opened Captions servers can pull a CC stream over a serial port, or (more likely) they will connect to an existing Opened Captions server and pull the stream from there. What that means in de-jargon is that anybody can set up a server that does exactly what mine is doing, even if they don’t have access to hardware, software, or a live TV stream.

When I say exactly, I mean it — your new project runs the same code as mine, and will serve the feed too. People can connect their servers to yours in the same way you connected yours to mine. Practically speaking this architecture means a few things:

1.  Once your amazing mashup gets popular it won’t break my server. Your application is syndicating the captions to your users. I serve the captions to you, _you_ serve them to the world!
2.  Your server creates a fork of my stream. Want to modify the text so the politicians sound drunk? Add extra layers of information to the message payload? Translate the captions to Klingon? Go for it. If your tweaks happen server side then others can build their apps from your stream to modify it further.
3.  You don’t have to rely on anyone else for the Closed Captions. If you want to spend some extra time setting up your own scraper you can point your server to that source instead of a third party. You have total control.

## Check ‘Em

Wondering if this is worth your time? Well, it doesn’t require much of it. The service takes about two minutes to set it up if you already have [Node.js](http://www.node.js/) and [Git](http://git-scm.com/downloads) installed on your computer. Here’s a video to prove it:

Installation instructions can be found [in the readme](https://github.com/slifty/opened-captions/blob/master/README.md) and you can always get in contact with me [through the blog](http://www.slifty.com/contact) or [on twitter](http://www.twitter.com/slifty).