---
title: "Introducing CivOmega: An Effort to Democratize Government Data"
date: 2013-06-23
categories:
  - ideas-projects
  - work
tags:
  - data
  - government
  - hackathon
  - transparency
---

<figure class="aligncenter">
  <img src="/assets/images/2013/06/logo.png" alt="Civomega">
  <figcaption>You may want to skip this boring post and just <a href="http://www.civomega.com/">check out the site</a>.</figcaption>
</figure>

Over the past 24 hours I worked with an amazing team to start building a Siri for government. Well, [Wolfram Alpha](http://wolframalpha.com/) is more like it, but you probably have a better sense of what Siri is. The site is called [CivOmega](http://www.civomega.com/) and it allows you to ask any question™ you want about civics. The system will do its best to get you an answer.

I can’t speak for the team, but I’ll let you know why I proposed this idea at a hackathon about open data. I’ll even use big letters:

## Open Data Sucks

People have talked about making government data more accessible for approximately 500 yea[](https://en.wikipedia.org/wiki/Internet_service_provider)rs. The hope is that if you can find data about the way your government operates, you can shed light on interesting patterns and stories. It’s all about transparency and accountability. It’s a beautiful concept. It’s wonderful for society.

But actually data is pretty crappy. It’s dirty and boring: just a bunch of numbers and rows and tables. This kind of stuff doesn’t usually tell you much without a lot of very laborious prodding and exploration. Don’t believe me? Fine. [Go find out for yourself](http://data.dc.gov/). If you managed to get anything interesting out of that link then you have too much time on your hands.

The ONLY thing that civic data has going for it is that programmers tend to build cool hacks using it. I guess every once in a while you get a groundbreaking piece of journalism out of it too but I’ll ignore that for the sake of argument.

## It’s Also Elitist

Here’s another problem: programmers have awesome, special tools to access data. These tools are called “Application Programming Interfaces” (also known as an APIs). An API is just a standard way for computers to ask each other for information.

A human version of this plays out every time you go to a restaurant and order from a menu. You look at the list of what you can ask for, you ask for what you want, and eventually you either get your food or you get impatient and start throwing your silverware at other patrons.

In my analogy the food is data and you and the chef are computers. The waiter is the API and the menu is the documentation. I guess the restaurant is the Internet and the restaurant’s manager is [the NSA](http://en.wikipedia.org/wiki/National_Security_Agency) or something. The silverware don’t really fit in.

The point is that the COOL stuff happens because of these APIs. Too bad nobody real knows what the hell an API is or how they could possibly go about using it. Don’t believe me? [Go find out for yourself](http://sunlightfoundation.com/api/). If the stuff on that page gave you access to data then you’re a nerd.

If nerds and people who have too much time on their hands are the only ones who can use government data then it won’t change the world. Plus, why should those people get to decide what is and isn’t important?

## Humanizing Government Data

And so we come back to CivOmega. This is an attempt to give people with normal, human questions the ability to benefit from the data that so many have worked their asses off to expose. It makes it possible for a human to interact with an API in the same way they might interact with their waiter: by asking questions. Users can type in questions about the government and it attempts to provide answers.

It is built on a programming language called Python and the way it works is pretty simple. A programmer who understands an API can write some code that knows how to answer certain question patterns. For instance I made it possible to ask the question “What bills are about \[X\]” where X can be any phrase you want. If you ask that, CivOmega will talk to the appropriate APIs to get you the answer you want. Then it will tell you what it learned.

The beauty of this setup is that any other programmer can spend a few minutes teaching the system to answer new kinds of questions. For instance maybe someone knows about an environmental dataset and wants you to be able to ask questions about natural disasters (how many forest fires happened in California last year?). That person could easily unlock that resource.

If you’re a developer, go take a look at the repository and consider [adding a module](https://github.com/pudo/dataomega). If you are a master of NLP please get in touch with me so we can improve the way people ask questions. If you don’t know what either of those sentences meant, please just go [check out the site](http://www.civomega.com/).