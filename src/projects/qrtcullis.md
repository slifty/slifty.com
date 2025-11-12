---
title: "QRTcullis"
description: "QRTcullis is a Massively Multiplayer Real Life Online RPG (MMRLOLRPG).  We wanted to create a dungeon explorer that had hooks into the real world.  Players explore forts by scanning a QR code \"portal\" with their mobile device.  Once the code is scanned the person's character appears at the entrance of a level (which is rendered on that mobile device).  Nearby friends and strangers can join in too, wandering around the fort together."
featuredImage: "/assets/images/2012/08/QRlogo_6-e1345568973951.png"
---

## Video

## Long Description

This project was done as a 48 hour hack with a team of three people (myself, [Julia Ma](http://www.linkedin.com/in/joulesm), and [Boris Kizelshteyn](http://boris.kizelshteyn.com/)) for an HTML5 game creation competition. We didn’t win, but that’s only because I went insane at 5:00 in the morning and tried to fix our collision detection algorithm with only 15% mental capacity. I broke it even more. I think they forgave me, but I still kick myself.

REGARDLESS!!! QRTcullis is awesome. Our goal was to think about what mobile gaming could look like. We wanted to incorporate things into the game that simply couldn’t exist using more traditional technologies (e.g. consoles or PCs). We started from scratch and used technologies that we had never used before (NodeJS and MongoDB) because we hate ourselves.

Levels are built with tiles. Tiles can have attributes, modifiers, and scripts (e.g. “move up 500 points over two seconds”). In order to prevent cheating, everything is processed on the server side and animation commands are sent to the client using sockets. We came up with a set of attributes and scriptable actions a tile could have, so as the player explores she finds deadly pigs wandering around, and tornados.

Less than half of the vision was actually implemented — for instance we wanted to be able to tie tile-scripts to sensors (so, for instance, a door opening in the real world would trigger a door opening in the fort). There is still a lot of potential for this idea, and I’m hoping some day there will be a reason to develop it again.

## Technologies

-   HTML / CSS
-   jQuery
-   NodeJS
-   SocketIO
-   MongoDB

## Testimonials

> I don’t get it, what am I supposed to do?  
> – Anyone, after being shown a QR code