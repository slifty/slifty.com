---
title: "The Glass Infrastructure"
description: "The Glass Infrastructure makes it easy for people to understand what is going on in a building.  It is a network of large touch screen displays set up throughout the MIT Media Lab which allow anyone to explore the network of groups, people, and projects at the lab.  Thanks to RFID it also knows who is using the screen."
featuredImage: "/assets/images/2012/09/gi2.jpeg"
---

## Video

## Long Description

The Media Lab gets a lot of visitors. People bring in friends and family, sponsors send representatives, and others just wander in off of the street. The Glass Ingrastructure is designed to help anyone quickly and effectively explore the kind of work being done in the building without having to bother us. Basically, grad students really just don’t like talking to people if they can avoid it.

The system is made up of about 30 giant touch screens, wired to mac minis and RFID readers. They are located throughout the Media Lab’s old and new buildings, and display maps, projects, and other applications.

When I arrived the Glass Infrastructure had a fairly linear interface. Each screen displayed a rotating list of nearby projects based on where it was placed. Our goal was to redesign the entire thing, building on the systems already set up. We had a pretty large team too (about nine people) working on various parts of the product.

We wanted to reflect the relationship between people and projects without overwhelming the user. There also needed to be a way for people carrying RFID tags to “favorite” different projects, and view a list of their favorites on the bottom of the screen. After weeks of discussion and thrown out designs we came up with the molecule interface.

I spent most of my time working on client side middleware, middle learning a bit more about jQuery at the same time. The backend was a RESTful API that worked with the database in addition to some fancy Natural Language Processing (NLP) tech which automatically found project relationships based on their descriptions.

The design that we came up with is still in use today, and the Glass Infrastructure has become a core part of the visitor experience at the Media Lab. We have also set up a few screens in other parts of the world (Spain, for instance) so that sponsor companies can have a window into the work being done here.

## Technologies

-   jQuery
-   CSS3

## Papers, Posts and Press

-   [The Glass Infrastructure: Using Common Sense to Create a Dynamic, Place-Based Social Information System](/assets/images/2012/09/GIPaper.pdf) (Havasi, 2011)

## Testimonials

> You know what would be better than asking me? Going over and prodding that screen over there.  
> – Media Lab Grad Students