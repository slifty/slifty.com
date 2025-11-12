---
title: "Introducing Truth Goggles"
date: 2011-08-01
categories:
  - work
  - ideas-projects
tags:
  - demo
  - truth-goggles
---

I’m working on a magical button.  This button, when pressed, will tell you (an average person who just wants to know what is happening in this crazy world) what is true and what is false on the web site you are viewing. I have a fair amount of the platform finished already and you can [check it out here](http://critical.istheinternetabigtruck.com/). **Be warned: Right now it only knows one fact. I’m workin’ on it!**  Reading a news article?  Click the button and see how much you can trust it. Reading an email from Uncle Jim saying that the sky is falling?  Not so fast Uncle Jim!  Oh wait… no nevermind it turns out he’s right this time.

Anyway, I wanted to explain a bit about how this all works, which will in turn help me organize my thoughts on what the next steps are going to be.  First, some important terminology:

A **Claim** is a general statement that is intended to be factual but, in reality, could use a bit of fact-checking by a third party (i.e. it is not trivially true).

A **Snippet** is an instance of a claim — it is the place where a claim is referenced, for example, a newspaper article or a tweet.

A **Verdict** is the truth of a claim — this is determined by fact checking organizations who have spent a lot of time looking at the big picture and coming to a logical conclusion.

For instance, if the statement “The U.S. government calculates inflation without adding in the price of food and energy” is a claim, then this would be an example of a snippet (With the context being the entire snippet, and the content being “the government removed food and energy prices from its measure of inflation to hide rising prices”):

> While advising his Fox News viewers to talk about inflation at their Thanksgiving dinners, Glenn Beck falsely claimed that the government removed food and energy prices from its measure of inflation to hide rising prices, that a survey showed economists are “worried” about inflation, and that Social Security recipients are not receiving a cost-of-living adjustment because the government “changed the calculation.”

Want to see it in action? Try clicking this link: [Apply Truth Goggles](javascript:var%20criticalDomain='http://critical.istheinternetabigtruck.com';var%20s=document.createElement\('script'\);s.type='text/javascript';document.body.appendChild\(s\);s.src=criticalDomain+'/critical.min.js';void\(0\);) **(Be warned, it doesn’t work in Internet Explorer at all right now)**

Each claim will have many snippets, but each snippet will have one claim.  A snippet has context (for instance the entire tweet) and content (the portion of the tweet that is a paraphrase of the claim).

So where does a Claim come from, and how does it get associated with snippets?

## The Birth of a Claim

Claims are pulled from fact checking services such as [NewsTrust](http://newstrust.net/truthsquad) and [Politifact](http://www.politifact.org/).  This gets me:

-   The claim’s text
-   The claim’s verdict (true, mostly true, mostly false, false, under evaluation)
-   The URL for more information about the claim’s verdict (If you want to know WHY something is true or false)
-   Additional information links (sites that provide information about the claim)
-   Additional context (descriptions, words, tags, etc. which will allow us to understand what the claim concerns)

At this point we have the claim and a bunch of information surrounding the claim.  So how does a claim become linked to a snippet?  And how do snippets get identified on a web page?  These are the difficult questions for this project and they have a few possible solutions.

## Creating snippets

First off, a snippet is automatically created for each claim — the automatically generated snippet is simply one that has the claim as both the content and the context. (i.e. the claim “Cows turn purple once every three years at midnight” would have a snippet of the exact same text, so that if anyone directly wrote that snippet it would be properly identified).

That’s great, but there might be snippets that reference the claim without using any of the same words.  For instance there might be a paragraph on color changing cows with the sentence “bovines turn violet about three times a decade” or the even more linguistically convoluted “Unlike dogs, cows are known to change their color.”  Both of those represent new snippets that are related to the cow claim.  How do we link them up?

There are three basic flavors of answer: automatically, by hand, or a mix of the two (semiautomatically).  Going by hand is not ideal because that puts a lot of reliance on the end user to be willing to spend a lot of time digging through claims and snippets and connecting the dots.  Going automatically would be wonderful, but it kind of requires a computer to be able to understand language — as you might expect, this is not an easy problem.  This is where the hybrid becomes attractive.  For a given proposed snippet the computer can do its best to identify any claims that it think really might be related.  Then it can ask the user to help out if they are willing.  Then, if the user says so, the snippet can be associated with the claim and down the line it will know for sure.

## Associating snippets to content

Once we have a database of claims and snippets we want to be able to associate them with the web content that a user sends in for analysis.  (i.e. when you click your truth goggles button and the server runs through the content looking for snippets so that it can highlight claims.  I have two choices here: I can either do the simple and reliable method of looking for perfect matches (i.e. a snippet has to perfectly match the text) or I can try to be a little more clever.  In this case I am going to the less clever route, because the whole point of the snippet \*creation\* process is to cover the cases where there is text that is really close to a snippet.

The next steps are:

-   Designing and implementing the snippet creation process
-   Designing an interface to present the verdicts and claim information in more detail
-   Writing scripts to update the claims with the latest results from fact checking databases

The long term ways that this project could be expanded are:

-   Incorporating social media to aid in claim and verdict mining
-   Adding in the ability to view news through the lens of RELATIVE truths rather than just the attempted absolute truth.  For instance, what would a superliberal democrat believe?  What would a tea party member believe?  What do people from Ohio think?

And with that, it’s time to continue hacking away!