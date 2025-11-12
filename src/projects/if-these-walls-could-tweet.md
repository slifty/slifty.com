---
title: "If These Walls Could Tweet"
description: "What if your living room had a Twitter feed?  If These Walls Could Tweet is a set of sensors that can send messages on Twitter when triggered.  Now when the lights go out your room can tell the world how it feels about it."
featuredImage: "/assets/images/2012/08/F_i6.jpeg"
---

## Long Description

This was my final project in [How to Make Almost Anything](http://fab.cba.mit.edu/classes/MIT/863.10/people/dan.schultz/). The idea was originally an artistic/troll project: I wanted to create a modern day printing press. You would line up the letters, spread the ink, and press it onto paper. The message would go on the paper as you would expect, but the type blocks would secretly be digital, and the message would also go directly onto Twitter.

I decided to change course because, while that application was a nice statement about legacy media, it seemed that abstracting the interaction might be more useful. It turned out that group members had talked about the idea of connecting more things to the internet and [using Twitter as a way for those things to communicate](http://blog.johnkestner.com/post/388081897/social-networking-for-lonely-objects) long before I had arrived.

I wanted to be able to swap out sensors, so I designed three types of circuit:

-   **A hub** which did the communication with the Python that sent out tweets.
-   **Chain-able receivers** which could be connected together, allowing for any number of sensors to be added.
-   **Sensor modules** which could be plugged into receivers. These would be responsible for measuring whatever the sensor measured and triggering the hub to send tweets.

I made four sensor modules. I started with a simple four-state button that you could set to hold a static value (e.g. “happy, sad, bored, excited”). Then I moved onto using a light sensor, a temperature sensor, and then I wrapped up with a proximity sensor. This kit was enough to warrant a mascot (the pet rock I had created as an earlier project) and tape the proximity sensor on his head. He talked about all sorts of things, like when people walked by, or when he felt lonely, or when it got too dark.

Behind the googley eyes, sensors would trigger events when their readings changed significantly. After an event trigger, the hub would then ask all of the modules to share their messages to the world, and those messages would be passed to a Python script over USB. The Python would then send it to Twitter.

Honestly, I spent most of my time learning to make the circuits (and make them modular), so I wasn’t able to implement the full vision. That vision would have included wireless functionality, direct communication with Twitter (bypassing python), a more robust set of logical operators (e.g. “count the number of people that entered a room”), additional sensors, and far more pithy quotes.

Basically what I wanted it to look like was [Twine](http://supermechanical.com/twine/), which came a year later from the two Info Eco alums who had originally explored this space.

## Posts and Press

-   [My How to Make Almost Anything blog post](http://fab.cba.mit.edu/classes/MIT/863.10/people/dan.schultz/final.html)

## Technologies

-   C
-   Milling Machines (to create the traces)
-   Sensors, solder, and microcontrollers
-   Python

## Testimonials

> What is this, some kind of party? Don’t you know the neighbors are trying to sleep?  
> – Your living room