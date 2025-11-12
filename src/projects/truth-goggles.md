---
title: "Truth Goggles"
description: "Truth Goggles identifies fact-checked content on the web, reminding you when it is most important to think carefully. It is a credibility layer designed to increase your ability to reach a well-formed understanding of the world, using journalism to raise red flags."
featuredImage: "/assets/images/2012/10/TG-1024x450.png"
---

## Long Description

Truth Goggles was my master’s thesis at the MIT Media Lab. This means that I spent a lot of time exploring the many challenges behind an idea like this, and attempting to solve at least some of them. There are three gigantic hurdles to jump:

1.  **Fact Database** – What should be used as ground truth? How do you identify it? Is there enough of it? I ended up realizing that there aren’t many universally believed truths, and I want the system to be accessible to a diverse audience. It needs to contain as many well-explained and thoughtful verdicts as possible. I decided that for the first round a truth source needs to do things: have a reputation of neutrality (i.e.both sides call them biased or neither side calls them biased), and explain the reason behind their verdicts.
2.  **Paraphrase Detection** – There are thousands of ways to say the same thing, how do you identify known fact-checks with slightly different phrasing? This is a challenging problem because it mans computers need to understand language. Luckily there are a lot of smart people exploring this space, so I can use existing tools to get part of the way there.
3.  **Human Brains** – Assume we have a perfect system that is able to identify fact checked phrases 100% of the time. Would you trust it? Would you use it? What if it told you that you were wrong, would it change your mind? A system that isn’t usable isn’t worth building.

I focused on this third problem (human brains) because I like thinking about people more than algorithms. I tried to design the system to make it easy to swap out better algorithms and data sets down the line, but my experimentation revolved around the user experience.

The result of my thesis was a [prototype](http://truthgoggl.es/demo.html) and a gigantic document. The front end is written in JavaScript and jQuery. It scrapes the page and sends it to a credibility API written in PHP. That API checks against known instances of paraphrases and also sends the text to a “fuzzy matching” API that is currently written in Python.

The prototype can be used anywhere online, but it doesn’t do any intelligent paraphrase detection at this point so chances are it won’t be useful in most places. The study results were promising, and indicated that credibility layers could very well help people think more carefully and in more nuanced ways.

There is still a lot to do for Truth Goggles, and the project is not dead! It’s also clear that people love the idea of an automated bullshit detector.

## Papers, Posts, and Press

This got a huge amount of coverage, here are some highlights.

-   [The first piece by Nieman Lab](http://www.niemanlab.org/2011/11/bull-beware-truth-goggles-sniff-out-suspicious-sentences-in-news/)
-   [El Tiempo](http://www.eltiempo.com/tecnologia/actualidad/ARTICULO-WEB-NEW_NOTA_INTERIOR-10825845.html)
-   [CBC Interview](http://www.cbc.ca/strombo/technology-1/you-can-handle-the-truth.html)
-   [La Vanguardia](http://www.lavanguardia.com/tecnologia/20111128/54239479160/un-programa-para-ser-mas-criticos-con-lo-que-leemos.html)
-   [The Register](http://www.theregister.co.uk/2011/11/28/mit_truth_goggles/)
-   [Tech Crunch](http://techcrunch.com/2011/11/28/true-or-false-automatic-fact-checking-coming-to-the-web-complications-follow)
-   [NPR Interview](http://www.npr.org/2011/11/27/142821487/truth-goggles-double-checks-what-politicians-say)
-   [The second piece by Nieman Lab](http://www.niemanlab.org/2012/07/are-you-sure-thats-true-truth-goggles-tackles-fishy-claims-at-the-moment-of-consumption/)
-   [Boing Boing](http://boingboing.net/2012/07/12/apply-truth-goggles-learn-tru.html)
-   New Scientist (Volume 215, Issue 2882, 15 September 2012, Pages 44–47)
-   [Wired UK (November 2012)](http://www.wired.co.uk/magazine/archive/2012/11/start/internet-lies)
-   [Introducing Truth Goggles](/2011/08/introducing-truth-goggles/)
-   [Achievement Unlocked: Thesis](/2012/05/achievement-unlocked-thesis/)
-   [Truth Goggles Study Results](/2012/06/truth-goggles-study-results/)

## Technologies

-   jQuery
-   MySQL
-   Python
-   PHP

## Testimonials

> Oh shit.  
> – Politicians