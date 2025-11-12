---
title: "Wall Paper"
description: "Wall Paper is a horizontal line of monitors (12 feet / 16,000 pixels wide) able to stare longingly at you, track your position, and update the information it presents based on where you are standing. This pretty much makes it the Sting of screens because every move you make, every step you take, it is watching you."
featuredImage: "/assets/images/2012/05/MIT-2-082-e1345499223586-1024x1024.jpg"
---

## Long Description

Wall Paper allows users to explore information by navigating through physical space.

This demo has undergone several iterations but the overall architecture has remained consistent: there is a browser-based client (JavaScript / HTML / CSS) separated across eight windows, a server (NodeJS) which listens for position updates and manages state, and a sensor component (Python / C) which does the actual position tracking.

The first iteration used infrared (IR) sensors and Arduino to track about 10 points evenly distributed across the eight displays. This provided approximately one data point per screen. A “newspaper” was spread across the screens so that each one displayed a section title. To read a given section you would walk up to the appropriate screen. The sensors would detect you, pass that detection onto the client, and an article from the screen’s section would fade in an article for you to read.

The second iteration replaced the IR sensors with a Microsoft Kinect, resulting in a much higher resolution depth map. Instead of the 10 depth points I now had access to closer to 1000, and I could track positions far more consistently. The interface was also replaced to display a bar-chart representing 20 years of reporting by the New York Times. Each month had a bar broken into four colors representing coverage of “Afghanistan,” “Iraq,” “Wall Street,” and “Protests.” You could walk up to a part of the screen to learn about a specific month, and as you got even closer you could see headlines for each of the four content types scrolling across your section of the display.

Of course, it was also used to mess with people. There was a time when the content would get smaller as people walked closer.

## Technologies

-   Arduino
-   C
-   HTML / CSS
-   jQuery
-   NodeJS
-   Python

## Testimonials

> So what you’re saying is that this project has failed both in terms of user experience, and in terms of graphic design?  
> – Henry Holtzman