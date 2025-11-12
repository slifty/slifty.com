---
title: "Learning Lab Final Project: ATTN-SPAN"
date: 2011-08-09
categories:
  - ideas-projects
  - knight-mozilla-learning-lab
  - work
  - ideas-projects
tags:
  - attn-span-2
  - bookmarklet
  - c-span
  - government
---

## Part 1: Introduction

[ATTN-SPAN Intro](http://vimeo.com/27480773).

## Part 2: Prototype and Development Plan

**The Good News:** I created a proof of concept [prototype of the ATTN-SPAN platform](http://bit.ly/qt8q4e) powered by the [Metavid](http://metavid.org/) project.

**The Bad News:** Metavid is having a lot of stability issues right now, so you probably won’t be able to use my prototype. [I made a screen cast just in case.](http://vimeo.com/27473310)

Relying on a 3rd party for the most important aspect of an application is a major risk; one that I must mitigate. This brings me to my first batch of design work: the content scraper.

### Scraping, Slicing, and Scrubbing C-SPAN

How do you get from a TV channel to a rich video archive and how do you get there automatically? The goal is to convert C-SPAN into a series of overlapping video segments that are identified in terms of state, politician, topic, party, action, and legislative item. Some of this is straightforward and some of it might be impossible, but here’s an overview of the planned nuts and bolts:

1.  DirecTV offers TV content in a format that is easy to record digitally and [VLC](http://www.videolan.org/) is a free tool that can do that recording. Combine the two and we can download C-SPAN streams into individual files that are primed and ready for analysis.
2.  Once a video file is in our clutches we can use VLC once again to separate out the video from the Closed Captioning transcript.
3.  Now we have a transcript and a raw video file. Next we register all of this information (in a database) so that we can look it all up later, and then convert the video file in to streaming-friendly formats and store it alongside the original recording.
4.  C-SPAN consistently shows a graphic on the bottom of the screen that says who is talking, their state, their party, and what is being debated. By using a technique called [Optical Character Recognition (OCR)](http://en.wikipedia.org/wiki/Optical_character_recognition) we can pull this text out of the video image. Once pulled, we can add that to our database so that we can access all of this information for any moment in the video.
5.  At this point we have most of the information we need, but there is still room for fine tuning. We can use audio levels and the closed captioning transcripts to try to identify moments of inactivity, normal dialogue, and heated dialogue.

These steps are enough to split up and categorize C-SPAN footage into an organized video database, but there are still more ways to flag special moments in the footage. For example, we may want to identify changes in speaker emotion in order to give our algorithms the ability to craft more engaging episodes. This is possible through the work of [Affective Computing](http://affect.media.mit.edu/) group at the MIT Media Lab, a group which has developed several tools that perform emotional analysis using facial recognition.

We may also want to identify specific legislative action (e.g. “calling a vote”). This could be accomplished by looking for key words in the transcript (e.g. “call a vote”) and possibly through common patterns in the audio signal (maybe there are identifiable sounds, such as a gavel hitting the table). Both of these concepts require additional research.

### Creating a Profile and Constructing an Episode

If video events are the building blocks then viewer interests are the glue. The creation of a personalized episode requires two things: A user account, and a context. The user account provides general information like where you live, what issues you have identified as important, and (if you are willing to connect with Twitter or Facebook) what issues your circles have been discussing lately.

The context comes from time and cyberspace. Every night, after congress closes their gates, your profile is used to create a short, rich video experience designed to contain as much relevant content from that day as possible. At this point you might get an email begging you to watch, or maybe you log in on your own because you are addicted to badges and points and you want as much ATTN-SPAN karma as you can get.

There is another way to access this content though, and that is through the web sites you visit anyway. Imagine if you could read an article about the National Debt on the New York Times (or in a chain email) and actually see quotes from your own senators in the report. What if you could supplement the national report with a video widget that lets you browse what your house members had to say when they controlled the floor during the debt debates.

From a technical perspective this isn’t that far fetched. [Truth Goggles](/2011/08/introducing-truth-goggles/), one of my other projects, is a [bookmarklet](http://en.wikipedia.org/wiki/Bookmarklet) that will analyze the web page you are viewing, fact check it, and rewrite the content to highlight truths and lies. This impossible feat is fairly similar to what I’m proposing here.

### Adding Rich Information

Once an episode is pieced together we can look up the information surrounding the video to know who is talking and what they are talking about. What else can be added and how do we get it? Existing APIs offer some good options:

-   **Contact Information** – Thanks to the [Sunlight Labs Congress API](http://services.sunlightlabs.com/docs/Sunlight_Congress_API/) it is possible to get the contact information for any member of congress on the fly. Thanks to VOIP services it is possible to create web-based hooks to call those people with the click of a button.
-   **Campaign Contributions** – The New York Times offers a [Campaign Finance API](http://developer.nytimes.com/docs/campaign_finance_api/) which can help you understand where the person on screen gets his or her money.
-   **Voting Records** – The New York Times also offers a [Congress API](http://developer.nytimes.com/docs/read/congress_api) that will make it possible to know vote outcomes from related bills as well as information about the active speaker’s voting records.
-   **Truth and Lie Identification** – My [Truth Goggles](/2011/08/introducing-truth-goggles/) project can be easily adapted to work with snippets from video transcripts. This will allow ATTN-SPAN to take advantage of fact checking services like PolitiFact and NewsTrust.

This is a good start, but I would also like to show links to related news coverage and create socially driven events based on community sentiment (for instance to track moments that caused people to get upset or happy). This won’t come for free, but it should be accessible given the right interface design.

## Part 3: A Note to the Newsies

So that’s the idea and the plan. What’s the value?

It seems plausible that ATTN-SPAN, a system that analyzes primary source footage and pulls out any content that is related to a particular beat could be useful as a reporters tool, but what about your subscribers? ATTN-SPAN can augment an individual article so that it hits everybody close to home. Suddenly one article becomes as effective as two dozen. Moving past text, for larger organizations with a significant amount video footage ATTN-SPAN can be tweaked to use your programming instead of (or in addition to) C-SPAN.

At this point I have to warn you that this is not the first nor will it be the last project to work with C-SPAN. A 2003 demo out of the Media Lab used C-SPAN as one of several sources of information in a platform aimed to provide citizens with [Total Government Awareness](http://web.mit.edu/newsoffice/2003/gia.html). [Metavid](http://metavid.org/), the platform I used in my initial prototype, already makes C-SPAN more accessible by enabling searches and filters. The list surely goes on.

So why is this a more powerful project? Well, the real goal of ATTN-SPAN isn’t to get more people watching C-SPAN. In fact I tricked you: this project isn’t about government awareness at all. It’s actually part of an effort to make indisputable fact (“blunt reality” and “primary source footage”) a more prominent part of the media experience without requiring additional effort from the audience. Newsrooms do an amazing job of reporting events and providing insight, but for deeper stories there simply isn’t enough time or money to cover everybody’s niche without going beyond the average person’s attention span.

Thus ends my pitch.

_The code for both prototypes mentioned in this post can be found on github: [ATTN-SPAN](https://github.com/slifty/ATTN-SPAN) and [Truth Goggles](https://github.com/slifty/Critical). Please forgive any dirty hacks. I would be thrilled if anybody wants to offer suggestions or even collaborate. On that note, please get in touch on Twitter [@slifty](http://twitter.com/slifty)._