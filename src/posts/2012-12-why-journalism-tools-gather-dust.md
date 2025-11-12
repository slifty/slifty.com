---
title: "Why Journalism Tools Gather Dust"
date: 2012-12-31
featuredImage: "/assets/images/2012/12/wat-225x300.png"
categories:
  - best
  - work
tags:
  - newspapers
  - open-source
  - knight-mozilla-opennews
  - quizzler
  - the-boston-globe
  - the-new-york-times
---

The planets have finally aligned on one of my early assignments at The Boston Globe. The project is called Quizzler, and it is by no means going to change anything. It’s a quiz system—something the producers ultimately want because it will generate page views. It has been done.

This post is not about Quizzler, it is about my quest to answer the question “why are we building this from scratch?” It’s about observed realities regarding cross-newsroom collaboration, insights from upper management of The New York Times, and some major hurdles for open source in legacy media organizations. Prepare to explore the deep, dark, and relatively unspoken depths of technological openness in newsrooms.

## We want something similar to…

I was introduced to Quizzler back in August. That first meeting was generally uneventful; we sat in a room. I listened to [Miranda Mulligan](https://twitter.com/mirandamulligan) skillfully duke it out with the project’s newsroom sponsor to explain that no, the first version won’t have custom “you are a 95% Vampire” sharable Facebook messages. I listened to the sponsor vocalize concern that there would never actually be a second version. I decided that both of them were probably right.

Eventually someone said something so shocking that I literally spat out my drink and fell out of my chair at the same time. It wasn’t intended to stand out—I don’t even know who said it. Ready? Brace yourself. Here it is: “Have you seen the Academy Awards tool by The New York Times? Eventually we will want something similar to that.” No wait that wasn’t it.

The New York Times is the parent company of The Boston Globe. They own the Globe in the same way humans own their children.

OK here’s the exchange.

**Me:** “Can we use some of their code?”

**Someone:** “We would have to pay them for that.”

**Me:**![Wat.](/assets/images/2012/12/wat-225x300.png)

Their response implied two things. First, that The New York Times would charge their kid for the digital equivalent of food. Second that the anticipated costs were high enough that it would be cheaper to rebuild this tool from scratch (again) than it would be to explore the possibility of reusing existing code.

Before you call child protection services, hold on. The situation is complex.

_**EDIT:** To be clear, I quickly learned that the Times would not have charged us a dime._

## Actually, this sounds completely reasonable

“Meh.” you say, “so The Boston Globe and The New York Times don’t share code, what’s the big deal?” A fair response, but trust me when I say the deal is big. If the deal was a rapper it would be notorious.

Here’s why: Starting from an existing code base instead of starting from nothing is often the difference between “having time to innovate” and “not.” If you are using technology as a core part of your business and you aren’t set up to experiment then you’re doing it wrong and you will become obsolete.

Borrowing code is kind of like being airdropped into the middle of a marathon; sure, you have to take a moment to figure out where you are and what direction to go, but now you have time to run in circles laughing like a crazy person before winning the race.

There’s more! If you borrow code then you are more likely to be familiar with what the rest of the world is doing. If you share code then you are going to build your systems with an emphasis on reuse and extensibility (i.e. correctly). If you regularly borrow AND share code then you are building a community around whatever it is you do.

What I’m trying to say is that if newspapers can buy into the mantra of openness—even just internal openness—they can kill about thirty birds with one stone.

But they usually don’t.

## Why not? Are they idiots?

There are many reasons these organizations don’t trade bytes, none of which have to do with the original “we would have to pay for it” claim.

### Reason 1: Wildly Different Technology Stacks

I lied to you earlier when I said the Globe was like a child to the Times–they’re more like middle-aged lovers. They didn’t grow up together or meet in college. They are two independent entities that recognized their love later in life, which means they have fundamentally different infrastructures.

One uses Java and PHP, the other uses Python, Ruby, and NodeJS. They have incompatible content management systems. They disagree on deployment policies, quality control processes, needs, and third party libraries. It’s like they come from two stubborn families that speak completely different languages and eat very different foods. They aren’t going to start casually sharing cook books.

### Reason 2: Internal Politics

If a full team dedicates three months to creating a new public-facing interactive, will they want to just give it away? If you are a manager do you want to rely on favors from an external team to accomplish your goals? If you are a coder do you want to be judged for the quick last minute hacks you had to throw into the project?

The answer to these questions, and many more like them, is “hell no.”

### Reason 3: Moving Costs and Learning Curves

Most technologies are dirty piles of duct tape with a shiny chrome finish. This makes them difficult to deploy and hard to understand. This is especially true among newspapers.

![tent](/assets/images/2012/12/tent-150x150.png)

Packaging code in a way that strangers can use could take hours, days, or weeks depending on how much the developers cared about portability when they built it. I’m basically describing the difference between moving a campsite and a home. Newsroom developers don’t tend to have camping on the brain when rushing to meet looming deadlines.

## Words from On High

Fine, so there are real reasons that code sharing between the Globe and the Times is a lost cause, but what does that mean for the industry? If financial allies with serious resources don’t share code, what are the chances that other newsrooms around the world will look outside their walls for help? Maybe this is why so many open source journalism tools are gathering dust.

I talked to [Rajiv Pant](https://twitter.com/rajivpant) (CTO) and [Marc Frons](http://en.wikipedia.org/wiki/Marc_Frons) (CIO) of The New York Times about code sharing and the role of open source in their company. For context: the Times is very progressive compared to other newsrooms when it comes to innovation and openness. They have a [blog dedicated to their open source inititatives](http://open.blogs.nytimes.com/), there is a [suite of APIs](http://developer.nytimes.com/docs) that provide civic data, and they do a good job of [telling people about what they do](http://source.mozillaopennews.org/en-US/organizations/new-york-times/).

Unfortunately they are also leading an industry that is forced into “deadline driven technology” and without a supportive institutional strategy, open source and reusable code are just nice-to-haves. Developers must ask themselves if they have time to meet the organization’s needs while also contributing to open source. Sometimes this means the same tools get built multiple times, but such is the nature of deadlines. Plus, as Marc was quick to point out, reinventing the wheel can be a good thing so long as the new one is slightly different.

<figure class="aligncenter">
  <img src="/assets/images/2012/12/wheels.png" alt="Wheel Store">
  <figcaption><a href="http://source.mozillaopennews.org/">Source</a>: The Wheel Superstore. (Illustration by <a href="http://www.lyladuey.com/">Lyla Duey</a>)</figcaption>
</figure>

But wouldn’t it be nice if all these new wheels could be used again and improved upon over time? Rajiv identified three factors that a project needs in order to be realistically used again by an organization like the Times.

Your code has to be…

1.  **Established** – Is it safe to rely on your creation? How long will your project stay active, and how long after you move on will it stay useful?
2.  **Extensible** – Your solution won’t meet all needs. How easy is it to improve? What kinds of features can be added?
3.  **Easy to Integrate** – Will this play with existing systems and tools? Can it be skinned to look like it belongs?

In short, it doesn’t matter how powerful you think your code is: if it is difficult or risky to adopt, it will stay an orphan.

None of those points should come as a surprise, but they should probably be considered gospel to anyone developing anything—open or closed—in any newsroom. Just ask yourself “would the Times use this if they needed it?” If the answer is yes then you’ve made something that will last; otherwise you might as well get out the broom now.

_**Note:** Since I’m sure you are worried, the Times doesn’t actually charge the Globe for code. And yes, we are writing Quizzler from scratch._