---
title: "ATTN-SPAN"
description: "ATTN-SPAN watches C-SPAN because nobody else is willing.  It figures out who is talking, what they are talking about, and who they represent.  From this it creates short custom episodes."
featuredImage: "/assets/images/2012/08/attn-span.png"
---

## Video

## Long Description

ATTN-SPAN was my final project in a future-of-TV course called Social Television. My goal was to figure out a way to make C-SPAN not completely suck. Fun fact: this was almost my thesis project.

The plan was to take C-SPAN, processes it, tag the moments of video with as much metadata as possible, and use those moments to create a compelling consumption experience. Where would the data come from? Three places:

-   **Closed Captioning** – C-SPAN is closed captioned. The captions are full of typos, but they can be used for general analysis (e.g. guessing what topics are being discussed).
-   **Video Processing** – OCR (Optical Character Recognition) is a process that takes an image and looks for words. On C-SPAN, text consistently appears in the lower left hand corner of the screen to state names of politicians, bills, states, and political parties. Face recognition is another possible technique.
-   **Audio Processing** – there are a few algorithms that can detect different voices in a conversation. They might not be able to tell you what is being said, but you can at least get a sense of who is talking.

From these streams I can do things like find all content that was spoken by YOUR senator. It might not sound that interesting but it actually does make the content significantly more relevant.

I made a quick prototype using an existing project called [Metavid](http://metavid.ucsc.edu/). This service handled most of the above processing for me, so I could focus on creating a fast hack to show what it would be like to have an episode of only your senator. I eventually hoped to do all the heavy lifting myself (rather than rely on a third party).

The prototype was a reasonable success, although it didn’t end up being insanely compelling. This was partially due to implementation and partially due to the fact that Metavid started acting unstable and was slow to process new footage.

Had I continued to work on ATTN-SPAN I would have designed an API so that newsrooms request custom generated episodes. Those episodes would be displayed along-side their political coverage. Imagine if you could read about new policies and see exactly what ~~your~~ senator said on the floor about the topic, right there, embedded in the article. This concept of automatically filtered primary source content almost made its way into Truth Goggles. It still might some day.

## Technologies

-   PHP
-   MySQL
-   jQuery

## Posts and Press

-   [My learning lab proposal](/2011/08/learning-lab-final-project-attn-span/)

## Testimonials

> I had no idea that C-SPAN was so interesting! Oh wait no this is still really boring.  
> – The American Public