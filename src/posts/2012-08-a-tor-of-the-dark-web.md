---
title: "A Tor of the Dark Web"
date: 2012-08-17
categories:
  - best
  - hobbies
  - work
tags:
  - anonymous
  - censorship
  - cia
  - dark-web
  - government
  - ogres
  - tor
  - tor-project
  - trolls
---

Tell me if you’ve been in this situation: you’re chatting about online anonymity with your wife and the other Knight-Mozilla Fellows over a pizza in Florence. A quiet-spoken stranger who had been sitting across the room walks up to your table and says “are you all here for the Tor hackathon?” You respond “why yes, yes we are!”

He goes on to explain that he is a journalist writing about Tor. He also tells us that he bets that the CIA and the Italian Secret Service are going to have moles there. What he obviously meant to say was “I work for the CIA and I’ve been watching you now for quite some time.”

It’s possible that he didn’t actually work for the CIA. His name and photo checked out under the website he claimed to write for. It was probably just a one-time job. Even if this isn’t true, even if a network of government spies didn’t track my position across Europe just to meet us in a restaurant, his comment set the tone for my weekend in Florence.

Tor is serious business.

## What the hell is Tor?

<figure class="alignright">
  <img src="/assets/images/2012/08/Tor_project_logo_hq-300x190.png" alt="">
  <figcaption>Did I mention Tor yet?</figcaption>
</figure>

[Tor](http://www.torproject.org/) is a program that makes you anonymous. This means that, for better or for worse, the big brothers, neighborhood hackers, and ad agencies of the world can’t tell what you are doing on the Internet without going through a _lot_ of effort and expense.

Is that too abstract? Here are some illustrative statements. \*Taps the microphone\*

-   A Tor user walks into a bar, the bartender says “who are you?”
-   How many Tor users does it take to screw in a light bulb? Only a few, but you’ll never know who did it.
-   I used Tor last night and now my wife says that she doesn’t even know who I am any more.

I’ll be here all night.

If you use Tor you become [Spartacus](http://www.youtube.com/watch?v=mOCsNrzlV2k). Tor takes everything you do, makes it look exactly like what everyone else is doing, and gets random computers on their network to do the talking for you. Ta-da! Now it is practically impossible to pin an action on you.

## The Original Need

I bet you wouldn’t have guessed that this idea was invented by The U.S. Navy. You would have? Oh.

Put on your paper sailor hat and I’ll explain. Imagine you are the king of the Navy and you’re going to war with your fleet of a thousand brand new Navy cars (I don’t really know how the Navy works). Being king, you are in the most important car of all because you’re calling the shots. You don’t want the enemy to know which vehicle is yours. You also don’t want them to know who is receiving orders because that could give away your tactics.

“I know,” you say, “I’ll encrypt everything so that they can’t see the content. Then they won’t be able to tell that my broadcasts are more important than others.”

Unfortunately for you, the enemy has fancy technology. They can’t decrypt messages but they are able to track where everything comes from and where it is going. They can’t tell what you’re saying, but they have all they need.

After about 5 minutes you think you’re doing well. Half of the enemy cars are already on fire! Yours explodes. “How did they do that?” you say in the afterlife. “Easy,” responds god, “they were able to see that your car was sending out the most messages. They knew exactly where you were.” Then he slaps you with a piece of linguini and drifts away.

To prevent this from ever happening again the Navy decided to invent the concept of an “Onion Network” (not to be confused with [The Onion Network](http://www.theonion.com/)). Now instead of having packets go directly from point A to point B, each one randomly hops around the fleet first. Because of encryption, the enemy can’t tell the difference between a new message and a “hop” message — they all look the same. It’s like running an invisible sprinkler in a thunderstorm.

Suddenly nobody but the sender and the recipient can figure out the end points of a message chain. Even the middle men (the ones doing the hops) don’t know the path. Each piece of the hop — each “layer” of the message — is encrypted with a different key, so the only thing a relay knows is who gave them the package and where it should go next.

Onions have layers too, that’s why this setup is called an _Onion_ Network. Get it? It’s like Shrek!

<figure class="aligncenter">
  <img src="/assets/images/2012/08/illustrationwithsignature-774x1024.jpg" alt="Trolls use the Internet, Ogres use Tor">
  <figcaption>Trolls use the Internet, Ogres use Tor. (Illustration by <a href="http://www.annebuckwalter.com/">Anne Buckwalter</a>)</figcaption>
</figure>

## What’s it Good For?

Tor has applications in the real world. You can buy drugs and guns, share illegal pictures, and hire assassins. Oh wait, I’m just describing Tor’s reputation (more on that later). Seriously, there are a lot of important situations where people have moral and compelling reasons to want anonymity.

Here are a few:

-   **Protecting witnesses and victims of domestic abuse.** Anyone who wants to be able to access the internet without being discovered by a third party can use Tor to defend against their stalkers.
-   **If you don’t like being tracked** [by your government](http://www.aclu.org/national-security/surveillance-under-usa-patriot-act), [Internet Service Providers](http://lifehacker.com/5923017/how-can-i-prevent-my-isp-from-tracking-my-every-move), or [search engines](http://donttrack.us/).
-   **Providing truly anonymous tips.** There are times when people need or want to [share information](http://www.wikileaks.org/) against the wishes of powerful and potentially dangerous forces (e.g. mafias, governments, or corporations).
-   **Safely bypassing censorship.** If you live in Syria, China, or [The United States of RIAA/MPAA](http://defendtheinter.net/), you might use Tor to access content from the outside world more safely.

These kinds of reasons explain why organizations with very good reputations, like the Knight Foundation, are [devoting resources to Tor](http://www.knightfoundation.org/grants/20121802/).

## The Dark Web

What I’ve just described is a spin on the way people access normal information online. If you point Tor Browser to Google you will see the same old Google, it’s just that now Google doesn’t know who you are. That’s powerful enough, but there’s more: Tor also lets you see hidden content on the Internet.

Using Tor is like entering a cheat code into real life and playing the lost levels. It is the digital equivalent of [platform 9 and 3/4](http://www.youtube.com/watch?v=xh95Ymn6F8c). This secret section of the Internet is possible because Tor users can _serve_ content anonymously too.

If you don’t know much about how the Internet works, believe me when I say that if a web site’s location is hidden it becomes essentially impossible to access. It would be like trying to visit someone’s house without knowing anything about where they live — not even the country. Tor gives you a blindfold and leads you there. You still don’t know where the house is, but at least you can visit.

Anonymous sites are accessed through something called an “onion address,” which is made up of a series of random letters and numbers. For instance, this is a “clean” version of Tor’s wikipedia: [3suaolltfj2xjksb.onion](http://3suaolltfj2xjksb.onion/hiddenwiki/index.php/Main_Page). Feel free to try clicking the link, it won’t work (Unless, of course, you are using the [Tor browser](https://www.torproject.org/projects/torbrowser.html.en)).

_Note: even if that link worked you wouldn’t see any terrible images. However, you need to use your brain before you start actually clicking around if you don’t want to get really upset._

That random looking string is used to find the server within the Tor network. Because the addresses don’t point to a real address on the Internet, there is no way to fully access this content without Tor. There are [services](http://onion.to/) you can use to get there without using Tor, but you lose all benefits of anonymity and content is often censored.

Onion addresses are the most fascinating part of Tor, albeit the most potentially disturbing. Rest assured that they don’t all lead to child porn, guns, and drugs. For example there is a secret version of [Twitter](http://lotjbov3gzzf23hc.onion.to/), a bunch of [blogs](http://utup22qsb6ebeejs.onion.to/), a [search engine](http://3g2upl4pq6kufc4m.onion.to/), and an [email service](http://jhiwjjlqpyawmpjx.onion.to/). There is even a secret version of 4chan (called Torchan), which I won’t link to because that one _does_ lead to child porn and drugs.

These types of content networks—ones that are served on top of the normal web so that you need special programs to reach them—are known as the [Dark Web](http://en.wikipedia.org/wiki/Dark_Internet). Not necessarily because the content is darker (it is), but because it is hidden from view and can’t really be searched and scraped as reliably.

## Implications of The Dark Web

Most uses for Tor become more potent with onion addresses. Anonymous servers are just as protected from higher powers as anonymous users. If Amazon suddenly started selling illegal drugs they would get in trouble. If a Tor marketplace started selling illegal drugs, the law would have to figure out a way to find them first.

This power applies to legitimate uses as well. If a government official wanted to contact The Boston Globe with a corruption leak, he or she could use Tor to create a gmail account anonymously. The government could then subpoena Google, and Google might be willing to give away the information they have. They won’t know much, but now things like account access patterns and full email logs would be fair game.

If the official had used Tormail then even Google wouldn’t know what happened. The government would have no course of action because there would be no service provider to ask. Every journalist in the world should be able to agree that there is no good reason for a watchdog to trust the organizations they are watching. Why should you trust in corporations and governments to keep sources safe?

Tor has a reputation because it has a lot of criminal content, but the social good that it supports is just so important (criminals will always be criminals). I’m working on a game called [Torwolf](https://github.com/slifty/torwolf) to simulate a few situations where Tor would be effective (if you have played Werewolf or Mafia, you can start to imagine what the game will be like). In the mean time, [read up on Tor](https://www.torproject.org/docs/faq.html.en) if you’re curious. Better yet, [go try it out](https://www.torproject.org/download/download-easy.html.en).

_**IMPORTANT EDIT:** while Tor is much better than nothing, it is neither foolproof nor perfect. If maintaining anonymity could be a matter of life / death / imprisonment, then you need to know more than what I could fit into the scope of this overview. [This paper is a good starting point](http://www.syverson.org/tor-vulnerabilities-iccs.pdf), but seriously, spend some time researching on your own._