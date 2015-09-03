---
title: preface_to_the_api_design_guide
permalink: preface_to_the_api_design_guide.html
layout: default
---
Preface to the API Design Guide
===============================

Share to:
---------

[![Facebook logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/facebook.png)](http://www.facebook.com/sharer.php?u=https%3A//www.dto.gov.au/blog/preface-api-design-guide&t=Preface%20to%20the%20API%20Design%20Guide "Share on Facebook") [![Twitter logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/twitter.png)](http://twitter.com/share?url=https%3A//www.dto.gov.au/blog/preface-api-design-guide&text=Preface%20to%20the%20API%20Design%20Guide "Share this on Twitter") [![LinkedIn logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/linkedin.png)](http://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.dto.gov.au/blog/preface-api-design-guide&title=Preface%20to%20the%20API%20Design%20Guide&summary=A%20design%20guide%20with%20developer%20empathy.&source=Digital%20Transformation%20Office "Publish this post to LinkedIn") [![email logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/email.png)](mailto:?subject=Preface%20to%20the%20API%20Design%20Guide&body=https%3A//www.dto.gov.au/blog/preface-api-design-guide "Share via email")

07/08/2015 - 11:06am

Author: 

Chris Gough

A design guide with developer empathy.

Like websites, shop-fronts and call centres, APIs (Application Programming Interfaces) could be viewed as simply another channel for delivering services online. APIs power many of today’s websites and mobile apps, and are becoming increasingly important in the digital economy. This is because APIs can be incorporated into downstream applications, whereby third-parties reuse and recombine them in creative ways. Good APIs strip a digital service down to its simplest possible form, so that the value of the service can be amplified through third-party reuse.

The principle of user-centred design is at the core of website and application development. It’s about ergonomics; can a user “consume a digital service” without bad design getting in their way? Getting this right requires empathy for users, backed by evidence regarding user-preferences. Although a well known principle, it is not always well practised.

In some ways, developer empathy is exactly the same; developers are people too, and the users of web APIs. The key difference is that when developers use an API, they often create additional value for many people. A well designed end-user experience results in a single good user experience. A well-designed API on the other hand can result in many good user experiences, often enjoyed by those the original service designer did not envision.

> We have developer empathy. If our interfaces are hard to use, we consider that a bug. We are an engineer-led company. Everything we do tries to be compatible with our API.
>
> —Steve Mayzac, Elasticsearch (around 6.20 into <https://www.youtube.com/watch?v=uxfvNwl_MGc>).

User empathy is focused on ergonomics at the point of delivery. Developer empathy is focused on painless systems integration. Good API design is still fundamentally about ergonomics, but the context is different. As a user, successful design has the quality of affordance (obviousness, “don’t make me think”). For developers, good API design also incorporates this quality (through idioms and good documentation). Further, good API design allows developers to integrate their applications with your systems in a decoupled manner; they are able to reuse the resources exposed by your API in previously unimagined ways. Lastly, good APIs are stable and adhere the ‘principle of least surprise’: developers are able to rely on your API to behave in a predictable manner.

The gold standard in developer empathy is found in thriving open source projects. Collaboration, peer review and a responsive community are the hallmarks of such projects. Organisations that do well in this space nurture their relationship with developers as though their survival depends on it (quite often because it does). This does not describe Australian Government IT of today, but hopefully describes the “government as a platform” of tomorrow. Some things are certain: APIs are important, they can generate additional and significant value, developer empathy is critical to successs and we need all the help we can get.

The DTO planned to release a draft API design guide describing contemporary best practices in API design and developer empathy. The final document would be mandatory policy that all Commonwealth agencies must follow, and that citizens could be entitled to expect. The purpose of releasing a draft was to get feedback, but at the last minute we had a better idea...

We want feedback from developers, right? So we figured: why not convert it to a developer-friendly format, published in a version control system with a public ticket system for issues and support, and invited our users to help us make it better?

Done.

> -   read <https://apiguide.readthedocs.org/>
> -   discuss <https://github.com/AusDTO/apiguide/issues>
> -   kanban <https://waffle.io/AusDTO/apiguide>
> -   fork <https://github.com/AusDTO/apiguide.git>

[![Facebook logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/facebook.png)](http://www.facebook.com/sharer.php?u=https%3A//www.dto.gov.au/blog/preface-api-design-guide&t=Preface%20to%20the%20API%20Design%20Guide "Share on Facebook") [![Twitter logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/twitter.png)](http://twitter.com/share?url=https%3A//www.dto.gov.au/blog/preface-api-design-guide&text=Preface%20to%20the%20API%20Design%20Guide "Share this on Twitter") [![LinkedIn logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/linkedin.png)](http://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.dto.gov.au/blog/preface-api-design-guide&title=Preface%20to%20the%20API%20Design%20Guide&summary=A%20design%20guide%20with%20developer%20empathy.&source=Digital%20Transformation%20Office "Publish this post to LinkedIn") [![email logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/email.png)](mailto:?subject=Preface%20to%20the%20API%20Design%20Guide&body=https%3A//www.dto.gov.au/blog/preface-api-design-guide "Share via email")

Related blogs
-------------

[Recruitment campaign to find Australia's best tech talent](foi_act_and_information_publication_scheme.md)

[Your homepage is not your front door](foi_act_and_information_publication_scheme.md)

[Open and secure](foi_act_and_information_publication_scheme.md)

Comments (9)
------------

David Ives replied on Wed, 2015-08-12 08:09 [Permalink](../comment/1foi_act_and_information_publication_scheme.md#comment-1606)

Comment: 

It is good to see some work on UX improvements. There seems to be a growing trend - in web and software UIs - to litter the page with information and menus, without any real structure. Simplicity is important.

-   [reply](https://www.dto.gov.au/comment/reply/1081/1606)

![Chris Gough's picture](../sites/g/files/net466/f/pictures/picture-1476-1439264217.png "Chris Gough's picture") Chris Gough replied on Wed, 2015-08-12 13:20 [Permalink](../comment/1foi_act_and_information_publication_scheme.md#comment-1621)

Comment: 

Are you saying the layout of the draft API guide is uncluttered? Thanks but I can't take any credit for that, just adopted the most popular template from readthedocs. Within DTO we base our work on research into what users actually need, and product teams are structured so there's a UX person involved in every iteration. Trying to bolt UX onto something at the end doesn't seem to work very well.

-   [reply](https://www.dto.gov.au/comment/reply/1081/1621)

Craig Thomler replied on Wed, 2015-08-12 08:54 [Permalink](../comment/1foi_act_and_information_publication_scheme.md#comment-1611)

Comment: 

It's a good start & I am absorbing the detail before commenting in Github.

I was surprised that the Secure API section was a 'TODO' as even in a draft this will be of key interest to a number of agencies with secure processes. Seeing this fleshed out, even with the DTO's broad thinking in the area, would help focus agency thoughts and feedback.

There is substantial need to attract feedback from private and not-for-profit sectors who would consume and use government APIs, to avoid baking in an approach which restricts API use.

I wil promote the draft through my startup circles as they contain people with a great deal of experience both in creating & consuming APIs.

It would be valuable for the DTO to also take targeted approach to engage software providers who might consume government APIs (such as for accounting packages) - leaving it up to people finding the online draft (when many many not yet even know about the DTO) could present issues down the track.

I'd also suggest running online & faceto face sessions both with gov IT people (which I assume you're already doing) and with external entities to solidify what you intend, build interest & engagement and seek feedback. A few targeted articles in IT press would assist as well - don't rely on a journalist writing it for you (their spin may not reflect your intent).

I also hope that the DTO is planning a change program around any mandatory implementation of APIs, as it will take time and education to get government IT teams all thinking in a similar vein & shifting their approach to accommodate it. This is a very big change and needs top to bottom buy in - not just from IT people - if you want to embed the approach.

I presume you have timelines for adoption of APIs and metrics for the success of the process (not just for individual APIs as in the doc), and it would be preferable to release these plans in draft for discussion as well as the specification.

Cheers

Craig

-   [reply](https://www.dto.gov.au/comment/reply/1081/1611)

![Chris Gough's picture](../sites/g/files/net466/f/pictures/picture-1476-1439264217.png "Chris Gough's picture") Chris Gough replied on Wed, 2015-08-12 13:02 [Permalink](../comment/1foi_act_and_information_publication_scheme.md#comment-1616)

Comment: 

\> I was surprised that the Secure API section was a 'TODO'...

I agree it's a big and important topic. The question was; should we wait and publish later, or push out something incomplete now? The internal conversation about security seems to be caught up in a few bespoke edge-cases, feedback from people with a wealth of real world experience would be very helpful.

\> It would be valuable for the DTO to also take targeted approach to engage software providers who might consume government APIs...

That's a good suggestion, but I suspect it's not sufficient. API "discoverability" is an important quality, but we need to achieve it in an open way. I've raised a ticket for this specific suggestion, and hope that over time other ideas will surface too.

<https://github.com/AusDTO/apiguide/issues/38>

\> I also hope that the DTO is planning a change program around any mandatory implementation of APIs

You are right about the pragmatics of change, but we are encouraging APIs not mandating them (or any other technical architecture). The mandate will be "if you are doing an API, you must conform with this and that, and you should conform with these other things unless you have a good reason not to" (not "you must do an API").

We don't actually have timelines for adoption and metrics yet, but if/when we do we'll document them in a transparent way.

This part of your comment is really making me scratch my head:

\> This is a very big change and needs top to bottom buy in - not just from IT people - if you want to embed the approach

I don't have any insight into non-IT people's involvement in API design, production or consumption. Can you elaborate?

-   [reply](https://www.dto.gov.au/comment/reply/1081/1616)

Tom Worthington replied on Mon, 2015-08-17 10:15 [Permalink](../comment/1foi_act_and_information_publication_scheme.md#comment-1736)

Comment: 

The "Preface to the API Design Guide" is very well written, but I could not find a link to the actual "API Design Guide". Has the guide been written? If not, I suggest doing that first and worry about the preface later. Otherwise this starts to look like an episode of ABC TV's "Utopia". ;-)

-   [reply](https://www.dto.gov.au/comment/reply/1081/1736)

![Chris Gough's picture](../sites/g/files/net466/f/pictures/picture-1476-1439264217.png "Chris Gough's picture") Chris Gough replied on Mon, 2015-08-17 17:12 [Permalink](../comment/1foi_act_and_information_publication_scheme.md#comment-1756)

Comment: 

Thanks for the compliment Tom, and I'm sorry if the link to the guide itself wasn't obvious. It came as a surprise to me, but you are actually not the first person who read the blog post and missed the links at the end. Maybe it would have been better if I had embedded the links in the text rather than finishing with a bullet list.

To answer your question, yes the guide does exists however it is incomplete, it is a work in progress. This work is managed with a version control system called git, using a "social coding" web site called GitHub. These links at the bottom of the article are for people that use git, in case they want to observe or participate in our work.

-   fork <https://github.com/AusDTO/apiguide.git>
-   discuss <https://github.com/AusDTO/apiguide/issues>

The first link is for full read access to the work in progress, including a complete revision history (who changed what, when and with comments about why). The second link allows anyone to see the "ticket system" we use to record  issues and suggestions (etc.). They also allow anyone (with a free GitHub account) to raise tickets or participate in these discussions. It also supports people offering contributions through a mechanism called "pull requests" that is one of the ways that developers collaborate using the git tool-chain.

The "kanban <https://waffle.io/AusDTO/apiguide>" link at the bottom of the article is another view of the same tickets which highlights which ones we are currently working on, and what ones have been closed recently. This is live/real-time view we use to communicate with our colleagues about the progress and management of our work on the apiguide.

Finally, the "read <https://apiguide.readthedocs.org/>" link at the bottom of the blog post is to the latest version of the API Design Guide. This automatically gets rebuilt and published moments after someone makes a change to the code in GitHub, which is nice but there is clearly a deficiency: Right now, the content under DIGITAL SERVICE STANDARD link on the dto.gov.au web site does not incorporate the API design guide. This is temporary, we are looking for a nice way to resolve that at the moment.

-   [reply](https://www.dto.gov.au/comment/reply/1081/1756)

Tony Edwards replied on Wed, 2015-08-19 12:28 [Permalink](../comment/1foi_act_and_information_publication_scheme.md#comment-1771)

Comment: 

I see this as a good approach apart from the "mandatory" expectation. It would be good to make it mandatory though this implies it is perfect, which could be subjective and open to conjecture.
 As a more community based evolution, I suggest considering "accreditation" as a way of getting buy in. Reward and recognise those who deliver complying services that apply the API Guide and possibly provide the right to display an accrediation logo.

-   [reply](https://www.dto.gov.au/comment/reply/1081/1771)

Dean replied on Tue, 2015-08-25 10:47 [Permalink](../comment/1foi_act_and_information_publication_scheme.md#comment-1931)

Comment: 

Do you have example of an application that the DTO has produced that applies these principles?

-   [reply](https://www.dto.gov.au/comment/reply/1081/1931)

Paul Wojcik replied on Mon, 2015-08-31 10:55 [Permalink](../comment/1foi_act_and_information_publication_scheme.md#comment-1991)

Comment: 

Good start.

I think we need to provide greater detail on the key decision points when choosing which Ubiquitous Standards we use. Standards change and there is often more than one.

We need to make sure SOAP/XML is in that set, and a cross comparison with RESTful / JSON will help with making the right decision. It often becomes a religious discussion for techo's when comparing standards, so it would be good to provide an evidence based approach and not just a 'thou shalt'.

I also think that these design guides need to make particular reference to applying best practices within the Australian Government framework, eg ASD ISM top 4, or the privacy principles. Templates and guidance for Dept of Finance two pass process would also help agencies a great deal as well. I am sure there are many more.

-   [reply](https://www.dto.gov.au/comment/reply/1081/1991)

Add new comment
---------------

Your name

Comment (mandatory)

[More information about text formats](../filter/foi_act_and_information_publication_scheme.md)

### Plain text

-   No HTML tags allowed.
-   Web page addresses and e-mail addresses turn into links automatically.
-   Lines and paragraphs break automatically.

Leave this field blank

Save

Preview

