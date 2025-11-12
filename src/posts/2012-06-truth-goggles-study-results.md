---
title: "Truth Goggles Study Results"
date: 2012-06-07
categories:
  - work
  - ideas-projects
tags:
  - academia
  - credibility
  - misinformation
  - truth-goggles
  - user-study
---

Last month, I ran a user study to test the effectiveness of [Truth Goggles](http://truthgoggl.es/) (a credibility layer/B.S. detector for the Internet). The tool attempts to remind users when it’s important to think more carefully. If you’re curious, you can check out [the demo page](http://truthgoggl.es/demo.html).[![Truth Goggles](/assets/images/2012/06/logo.jpg "Truth Goggles")](http://truthgoggl.es/)

Now that the study has officially concluded, the numbers have been crunched, and the thesis has been submitted, I want to share what I learned from the resulting data and feedback.

I’ll warn you upfront: All conclusions drawn here should be taken with a grain of salt. The participants were _not_ a random sample of the Internet, and as such, the results don’t reflect the general population. I think they are quite exciting nevertheless!

## The Questions

There are many ways that a tool like Truth Goggles could be considered successful. A bare minimum is that users should prefer it to the non-augmented consumption experience (you know, the kind you have normally). Another measure of success might reflect the number of claims that users explored when the tool was enabled, or maybe the quality of that exploration.

These questions are interesting, but they all require different study designs. Here is what I considered when putting the study together.

1.  **Did people use Truth Goggles?** It is difficult to accurately measure the use of a tool when working with a “captive” audience (i.e., study participants). Truth Goggles does not yet contain enough facts to be regularly useful in the real world, so the study had to simulate a reading experience and present articles with known fact-checked claims, so this question wasn’t explored too deeply.
2.  **Did people enjoy using Truth Goggles?** This study was run online, so the only way to get direct feedback was by asking users directly. I also gave participants a chance to choose to enable or disable Truth Goggles for the final few articles after the tool has been completely exposed to them. Presumably, if they hated the interface they would have disabled it.
3.  **Were users exposed to more fact checks?** In order to compare a change we must have a baseline and the ability to measure exposure. This study wasn’t quite comprehensive enough to address this directly, although I did keep track of how often users chose to view “More” information about a fact check (which took them directly to [PolitiFact’s](http://www.politifact.com/) site).
4.  **Did users engage with the fact checks?** To understand levels of engagement, the tool would need to keep track of what content was actually read and comprehended, as opposed to what content was simply rendered on a screen. Once again, tracking the use of the “More” button was a good indication of engagement.
5.  **How well did Truth Goggles enable critical thinking?** Although critical thinking doesn’t require a change of opinion, it seems reasonable to believe that a change of opinion does indicate thought. By measuring the drift in beliefs about fact-checked claims after using Truth Goggles, it was possible to better understand the interface’s ability to facilitate updated beliefs.
6.  **Did Truth Goggles affect levels of trust in consumption experiences?** This question is deeply relevant, but given the format of this study I did not attempt to measure trust in a robust way. I did give users an opportunity to comment on how they felt Truth Goggles affected their trust.

The final study design reflected aspects of each of these questions; however, “Did people enjoy using Truth Goggles,” “Did users engage with fact checks,” and “How well did Truth Goggles enable critical thinking” ended up getting the most focus.

## The Preparation

Before the study began I selected, tagged, and pre-processed 10 political articles to create a pool of content that I knew would have fact-checked claims in them. For the most part, this involved going through PolitiFact, Googling the phrases, and hoping that some good articles would show up. Most of what I used was published in 2012 and came from a variety of sources with varying degrees of credibility.

I also added some tracking features to Truth Goggles in order to better understand what was clicked and explored. This meant I would know when users viewed a fact check or when they would interact with other parts of the interface. Finally, I had to create the actual study website, which added some randomization and guided participants through the process.

## The Participants

The study was conducted online over the course of five days. Participants were recruited through email and Twitter. When I did the initial number crunching there were a total of 219 participants, 88 of whom completed the entire process. These numbers increased to 478 and 227, respectively, before the study officially concluded. This analysis reflects my thesis work, and only considers results from the original 88 participants who completed the entire study.

Unfortunately, the participant pool contained a disproportionate number of friends, individuals familiar with the concept of Truth Goggles, and professionals already aware of the challenges surrounding media literacy. The vast majority (about 90%) of those who actually completed the process were strong and moderate liberals. All of these biases were anticipated, but nevertheless they significantly limit the potential impact of the study.

## The Process

[![Stand back, I'm going to try science!](/assets/images/2012/06/science.png "science")](/assets/images/2012/06/science.png)From start to finish, the study took each participant around 20 or 30 minutes. After being shown the initial instructions, people were asked to rate 12 claims on a truth scale from 1 to 5. They only had 10 seconds per claim to answer, so this was really trying to get at a person’s gut reaction based on the information sitting in his or her head.

After the survey was completed, the treatments began. Everyone was shown a series of 10 articles which contained the previously rated claims. The first two articles were always shown with Truth Goggles disabled. The next six were presented with different Truth Goggles interfaces to help call out fact-checked phrases. For the final two articles, participants were able to choose one of the four interfaces (including “None”).

Once the article reading ended, participants were asked to re-rate the claims from the beginning of the study. At this point, they had been exposed to explanations and context for most of them, so this time they were supposedly providing “informed” answers as opposed to gut feelings. After the second round of ratings, the study wrapped up with a short exit survey, where participants had a chance to yell at me in the comments and tell me what they thought about the experience.

## The Irony

Before going any further, I want to be clear that Truth Goggles does not assume that fact-checking services are correct. To the contrary, the hope is that users will question fact checks just as much as they would question any source, and consider all evidence with scrutiny. This philosophy is problematic for evaluation, because it is difficult to measure belief accuracy without considering something to be “true.”

Lacking a better metric, the source verdicts (i.e., PolitiFact’s ratings) were used as grounding for accuracy for this analysis. This means that from an evaluation perspective, I considered interfaces to be more effective if users ended up with beliefs in line with PolitiFact’s verdicts. Since belief dissemination is not the goal of Truth Goggles, the system must eventually use more sources (e.g., [Factcheck.org](http://www.factcheck.org/) and [Snopes](http://www.snopes.com/)) to keep users on their toes.

## The Results

In my thesis, I slice and dice the study data in more ways than I care to think about. But this isn’t my thesis, so I’m going to spare everyone a lot of pain and stick to the high-level observations.

-   **Truth Goggles increased accuracy and decreased polarization.** Participants changed their beliefs about the fact-checked claims after reading the articles, regardless of whether or not a credibility layer was rendered. But without Truth Goggles those updates resulted in more polarization and less accuracy. In particular, when Truth Goggles was disabled people tended to become overly trusting of claims that appeared in articles. With Truth Goggles active, however, beliefs became nuanced and more accurate.
-   **When using credibility layers, people became less incorrectly skeptical but they remained just as incorrectly trusting.** Truth Goggles was able to help skeptics become more trusting when trust was appropriate, but was not as effective at convincing false believers that they should become more doubtful. This means that participants who were not already overly trusting of a claim would tend to update their beliefs in a way that resulted in more accuracy when using a credibility layer. If you incorrectly believed a claim, however, you weren’t likely to correct yourself.
-   **Normal reading caused people to become more incorrectly trusting but they remained just as incorrectly skeptical.** Without a credibility layer, participants who were not already overly distrusting of a claim would tend to overly trust that claim after reading its related article. This means that if someone was highly skeptical of a claim before reading the article, they wouldn’t change their minds. But if they were more neutral or already trusting, then seeing the claim in an article would cause them to believe it more strongly.
-   **Almost everyone enabled Truth Goggles when given a choice.** Only two out of the 88 participants who completed the study chose to view their final articles without using some variation of Truth Goggles. The vast majority of participants (70%) selected “highlight mode,” the least obtrusive of the three possible interfaces. These numbers unfortunately don’t mean much because it is entirely possible that participants simply wanted to play with the tool. They could be far worse, though.
-   **There were virtually no significant differences between the three interface types.** It was no surprise that “Highlight Mode” was the most popular, since it did nothing but highlight text and didn’t bully people into clicking things. Less anticipated was the fact that “Safe Mode” and “Goggles Mode,” which force exploration, did not outperform Highlight Mode. I suspect that this was a study artifact — forced interaction was unnecessary during the study because the novelty of Truth Goggles meant people might be curious enough to click regardless of the interface — but it was interesting nonetheless.

The short version of these results is that Truth Goggles helped combat misinformation, but there is still plenty of room for improvement. There also clearly needs to be a more comprehensive, longer-term user study.

For me, the big surprise was that that people were so prone to trusting content just because it appeared in an article or opinion piece. I was absolutely thrilled to see that effect get completely squelched through credibility layers. The results from the exit survey are also incredibly exciting, but that is a post for another day.