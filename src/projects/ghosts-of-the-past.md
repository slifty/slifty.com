---
title: "Ghosts of the Past"
description: "Ghosts of the Past lets you use your iPad as a lens into the past (or into an augmented present).  Panoramic images are overlaid on top of the locations where they were taken.  Couldn't make it to your brother's wedding?  No problem, just use Ghosts!"
featuredImage: "/assets/images/2012/08/gotp-1024x1024.jpeg"
---

## Video

## Long Description

This project was a collaborative effort by myself, [Julia Ma](http://www.juliama.com/), and our undergraduate researcher Nat Atnafu. It started off as a course project for “Eccescopy” taught by [Ken Perlin](http://en.wikipedia.org/wiki/Ken_Perlin), which was about social augmented reality. Our argument was that looking into the past is totally social, it’s just time lapsed!

The system is made up of a web server (written in PHP and MySQL), where you can upload and annotate panoramas, and an iPad client (written using OpenFrameworks) that accesses and renders those panoramas. The user must calibrate the panorama by orienting the iPad so that the space being displayed matches the location of that space.

After calibration, the iPad tracks rotation and updates the portion of the panorama that appears on screen. This creates the illusion that the iPad acts as a looking glass into the past. You can see people and objects that used to exist in the space in front of you standing right there.

Although Ghost panoramas are never perfectly aligned, it gets “close enough” for your eye to believe it. We can get away with this because you aren’t able to focus on the iPad screen and the real-world background at the same time. The fact that the scale might not be quite right or that the image is offset by a few degrees won’t actually disrupt the experience.

It also turns out that this approach can be used to create other AR experiences. Normally you need to figure out where the camera is actually pointing with very high levels of accuracy if you want to create a compelling effect. By using an existing panorama you don’t need to be pixel perfect in the real world any longer, you can just use the pixels from the photo and be done with it.

We imagined several use cases for Ghosts. The original intent was to make it easy to capture and re-live community or personal events. If you took a panorama of a wedding, or of a block party, you could use Ghosts of the Past years later to remember what the event was like. This is pretty much supported in full.

You could also use the AR potential of Ghosts to provide more information, or to show hidden objects. We worked with Jim Vrabel, a local historian, to create a few panoramas with “information points.” Users could then stand in special locations in downtown Boston and learn more about the buildings by pointing their iPad at the right spot.

You can also manipulate the panorama itself using photo editing tools to create some interesting effects. We worked with the MIT Museum to create a few panoramas that spliced in old photos of artifacts working in their original space. As you viewed the panorama in the museum, you would see the objects sitting in the lab with scientists working around them.

There are some obvious next steps. The first is geofencing using the iPad’s GPS, so that only nearby panoramas can be picked, and so that people can be guided to stand in the optimal spot for viewing. The second is auto calibration using the iPad’s compass, so that images are oriented properly without any effort on the part of the user.

## Technologies

-   C++ / OpenFrameworks
-   PHP
-   MySQL

## Testimonials

> Hasn’t this been done already?  
> – My Advisors