---
title: "CivOmega"
description: "CivOmega is an attempt to give people with normal, human questions the ability to get answers from government data. It's like a Mad Lib but useful."
projectUrl: "http://civomega.com/"
featuredImage: "/assets/images/2015/03/civomega_small-1024x344.png"
---

## Long Description

CivOmega makes it easy to convert government data and APIs into resources for people who didn’t spend half their lives learning to program. For instance I made it possible to ask the question “What bills are about \[X\]” where X can be [any phrase you want](http://civomega.com/?a=chicken&q=what%20laws%20are%20about%20{topic}?). Behind the scenes CivOmega knows how to go out and talk to the appropriate datasets at which point light shines down from the heavens and angels sing to you about congress.

Lots of data has been published, but it’s hard for non-technical constituents to benefit from it. Now, thanks to CivOmega, when a new dataset is released to the developer community, someone could spend a few extra hours to unlocking all sorts of new questions and answers through CivOmega.

The system is built in Python, and the first version of this was created during a 24 hour hackathon at the MIT Civic Media Conference in 2013. Since then it has been rewritten with a more attention to code quality and extensibility thanks to a grant from the [Sunlight Foundation](http://sunlightfoundation.com/).

A CivOmega module is made up of three parts:

1.  **Question patterns.** These patterns are used to guide a user to questions that the system knows through the main CivOmega interface. When a user asks a question that fits that pattern, CivOmega creates a structured object and passes it to the module that knows the answer. (Example: { “politician”: “John McCain”, “issue”: “Campaign Finance” })
2.  **Mapping Logic.** Custom logic takes the structured data extracted from a pattern by CivOmega and uses it to look up answers. (Example: using the Sunlight Foundation’s congress API to get a list of all bills about Campaign Finance that were supported by John McCain.)
3.  **Answer Templates.** The result of that search is packaged and sent to an HTML / JavaScript / CSS template, which renders the answer in whatever format is most appropriate (as determined by the module author).

## Papers, Posts, and Press

-   [Introducing CivOmega: An Effort to Democratize Government Data](/2013/06/introducing-civomega-an-effort-to-democratize-government-data/) (slifty.com)
-   [The alpha of CivOmega: A hack-day tool to parse civic data and tell you more about Beyoncé’s travels](http://www.niemanlab.org/2013/07/the-alpha-of-civomega-a-hack-day-tool-to-parse-civic-data-and-tell-you-more-about-beyonces-travels/) (Nieman Lab)
-   [Projects from the OpenNews-MIT JHack Day](https://source.opennews.org/en-US/articles/projects-opennews-mit-hack-day/) (Source)
-   [CivOmega Wants Your Open Data APIs to Help Fuel Search Engine](http://www.programmableweb.com/news/civomega-wants-your-open-data-apis-to-help-fuel-search-engine/2013/07/19) (Programmable Web)
-   [OpenGov Voices: CivOmega: Making Government Data Useful to Everyone](http://sunlightfoundation.com/blog/2013/09/20/opengov-voices-civomega-making-government-data-useful-to-everyone/) (Sunlight Foundation)

## Technologies

-   Python
-   jQuery

## Testimonials

> Oh good, answers to questions I’ll never ask.  
> – The American Public