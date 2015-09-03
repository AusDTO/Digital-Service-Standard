---
title: building_better_services_with_analytics
permalink: building_better_services_with_analytics.html
layout: default
---
Building better services with analytics
=======================================

Share to:
---------

[![Facebook logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/facebook.png)](http://www.facebook.com/sharer.php?u=https%3A//www.dto.gov.au/blog/building-better-services-analytics&t=Building%20better%20services%20with%20analytics "Share on Facebook") [![Twitter logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/twitter.png)](http://twitter.com/share?url=https%3A//www.dto.gov.au/blog/building-better-services-analytics&text=Building%20better%20services%20with%20analytics "Share this on Twitter") [![LinkedIn logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/linkedin.png)](http://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.dto.gov.au/blog/building-better-services-analytics&title=Building%20better%20services%20with%20analytics&summary=The%20DTO%27s%20mission%20is%20to%20create%20digital%20services%20that%20are%20easy%20to%20find%20and%20use.%20Service%20analytics%20will%20give%20us%20the%20facts%20of%20what%20to%20fix%2C%20where%20to%20start%20and%20how%20we%27re%20doing.%20By%20service%20analytics%20we%20mean%3A&source=Digital%20Transformation%20Office "Publish this post to LinkedIn") [![email logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/email.png)](mailto:?subject=Building%20better%20services%20with%20analytics&body=https%3A//www.dto.gov.au/blog/building-better-services-analytics "Share via email")

02/06/2015 - 12:28pm

Author: 

Pia Waugh

The DTO's mission is to create digital services that are easy to find and use. Service analytics will give us the facts of what to fix, where to start and how we're doing. By service analytics we mean:

-   **web statistics** from tools like:
    -   Google Analytics, which is already heavily used across government
    -   agency hosted tools like Urchin, SmarterStats or Net Info
-   **anonymised application logs** for authenticated transaction services online
-   **social media and search statistics **
-   **helpdesk, face to face and telephony statistics** from various service desk and ticketing tools.  

We're building a view of these analytics across the whole of government so we can improve the total experience of dealing with government. The data will feed into our reporting, user research and design work and our ongoing improvements program. We're 100% committed to privacy and protect it by removing context, IP addresses and by depersonalising data before it is brought in to our system. **We don't want to know who users are. We want data on what users do.** For instance, if we can see that a lot of people have called regarding a topic, we can provide that information on a website so users can self-serve if they wish. If we know the most popular topics on a website, we can have the most impact by improving that information first. Once we know what content is popular, we can make sure that information can be reused on other websites and applications (government and non-government) where it can be useful.

We want the data to be accessible back to agencies in a machine-friendly API format, to integrate into their own reporting and business intelligence purposes so they can also make improvements. This may supplement agencies’ own reporting and, perhaps in some situations, could reduce the scope of data agencies need to collect themselves.We don't want to be locked in to any single tool or technology, as this would limit our ability to use best of breed solutions as they emerge. We are going to separate our data collection from the analysis and reporting tools and take an API-driven and modular design approach. This way we can adopt different analysis tools as we need them and incrementally improve the data collection and function over time.

We're building a disposable demo environment where we can test different ideas, APIs, reporting approaches and what works best across the various types of data sources we will draw from. Right now, we are focused on the data collection aspect, and are playing with Splunk, Sumologic and elastic search options. Any of these data collection tools can then feed into any number of analytics tools through APIs. We will, of course, be looking to the market soon to see everything on offer in this space and will share more of the tech thinking in a subsequent blog post.

 

Importantly, much of the data and analysis that we provide will be publicly available in aggregate via open APIs and public reporting. We'll publish our code on the AusDTO github. Anyone is free to use or modify it and we'd love to collaborate in this space. We are also looking at current initiatives around the world so we can build on the shoulders of giants, such as the recent release of the analytics for U.S. government websites (<https://analytics.usa.gov/>).

 

**What do you think?**

We'll publish more details over the coming weeks but we want to check our thinking and assumptions first, so tell us what you think about what we're doing. We'll follow up with more tech details over the coming week or two. What else should we check out? We'll also be holding a number of public consultations and consultative events over the next few months; so stay informed and involved by subscribing to the [DTO mailing list](http://govspace.us10.list-manage.com/subscribe?u=18f172213d32ca205c7e524bd&id=172d06cc83) or the [RSS feed](../feed).

[![Facebook logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/facebook.png)](http://www.facebook.com/sharer.php?u=https%3A//www.dto.gov.au/blog/building-better-services-analytics&t=Building%20better%20services%20with%20analytics "Share on Facebook") [![Twitter logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/twitter.png)](http://twitter.com/share?url=https%3A//www.dto.gov.au/blog/building-better-services-analytics&text=Building%20better%20services%20with%20analytics "Share this on Twitter") [![LinkedIn logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/linkedin.png)](http://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.dto.gov.au/blog/building-better-services-analytics&title=Building%20better%20services%20with%20analytics&summary=The%20DTO%27s%20mission%20is%20to%20create%20digital%20services%20that%20are%20easy%20to%20find%20and%20use.%20Service%20analytics%20will%20give%20us%20the%20facts%20of%20what%20to%20fix%2C%20where%20to%20start%20and%20how%20we%27re%20doing.%20By%20service%20analytics%20we%20mean%3A&source=Digital%20Transformation%20Office "Publish this post to LinkedIn") [![email logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/email.png)](mailto:?subject=Building%20better%20services%20with%20analytics&body=https%3A//www.dto.gov.au/blog/building-better-services-analytics "Share via email")

Related blogs
-------------

[Getting inside your head: Analysing search behaviours](../node/foi_act_and_information_publication_scheme.md)

[Where are we heading: A future state for user experience](../node/foi_act_and_information_publication_scheme.md)

[Government working with government: Lessons from OneGov](../node/foi_act_and_information_publication_scheme.md)

Comments (9)
------------

Drew Robinson replied on Tue, 2015-06-02 14:54 [Permalink](../comment/foi_act_and_information_publication_scheme.md#comment-351)

Comment: 

Excellent ideas, can't wait to hear more about this!

Recently we've developed a small web app and used a log streaming tool to keep an eye on it, search for statuses and be alerted for errors etc. This has been really effective and given us a great insight into how people use the application, more so than simple Google Analytics data.

-   [reply](https://www.dto.gov.au/comment/reply/751/351)

Craig Thomler replied on Wed, 2015-06-03 09:25 [Permalink](../comment/foi_act_and_information_publication_scheme.md#comment-356)

Comment: 

Don't forget A/B testing. This is used by all major online services to test small and large interface and process tweaks to achieve the best outcomes.

Essentially it involves having several slightly different versions of a website or process live at a time and directing users to one of the variants at an IP level. Statistics for the different versions are then used to identify which is the most effective, and this becomes the primary site that everyone sees.

Leading online services are constantly using this approach, testing small content, layout and process changes. There is no 'perfect endpoint', just ongoing relentless improvement, with every test documented and recorded.

In my experience government online budgets don't well cater for this approach, and IT teams killed almost every attempt I made to introduce this type of testing in departmental environments, but hopefully Agile methodologies are more embedded now and there will be more people within government familiar with, and supportive of, best practice analytics and testing approaches such as this.

Note that it is also very useful for communication campaigns, as different messaging can be rapidly tested through Google and Facebook ads to determine what gains the best cut through prior to a campaign launching. Past campaign approval processes in government have selected against and discouraged adaptive campaigns (where messaging is adjusted on the fly throughout the campaign to achieve best outcomes), however again I hope that the processes and individuals selected to approve campaigns are now a little more worldly and familiar with modern technological and marketing approaches than a few years ago.

-   [reply](https://www.dto.gov.au/comment/reply/751/356)

Alithea Seemann replied on Wed, 2015-06-03 11:25 [Permalink](../comment/foi_act_and_information_publication_scheme.md#comment-371)

Comment: 

Sounds great! I really love the idea of this data being made available across many services, and focusing on how it can be presented and used with minimal staff intervention.
 Analytics like this is certainly key to highlighting user pain points with quantative data. I think it is great to use this information to make the online interaction better, it is also critical to improving resources that assist users and the people that support them.

-   [reply](https://www.dto.gov.au/comment/reply/751/371)

Jill Tanner replied on Tue, 2015-06-09 09:25 [Permalink](../comment/foi_act_and_information_publication_scheme.md#comment-416)

Comment: 

Suggestion: Another thing to measure could be availability / reliability of internet access eg remote area clients?
 Feedback: Could we have a link explaining the term 'API format' please? The light blue colour on the links on the Blogposts are not great to read - can we have something a bit darker please. Thanks.

-   [reply](https://www.dto.gov.au/comment/reply/751/416)

Nathanael Coyne replied on Tue, 2015-06-09 10:32 [Permalink](../comment/foi_act_and_information_publication_scheme.md#comment-421)

Comment: 

I'm very interested to see what you come up with for collating and sharing analytics data and insights. I've been using various web analytics for years such as Google Analytics, WebTrends, Webalizer, Google Webmaster Tools / Search Console but with my recent work in open data and data publishing platforms I'm learning more about data analysis and data science. I'm currently reading Data Science for Business by Provost and Fawcett, Data Smart by John Foreman, and People Analytics by Ben Waber.

I've been a fan of evidence-based design and design decision making for a long time, and I think the potential of behavioural data from analytics is severely underutilised even in areas (outside academia of course) that have a reputation for being data-driven such as some areas of marketing and advertising.

I think that better collection, processing and sharing of analytics data will be of massive benefit to government and citizens, possibly as important as the Census.

-   [reply](https://www.dto.gov.au/comment/reply/751/421)

Alun Probert replied on Tue, 2015-06-09 12:22 [Permalink](../comment/foi_act_and_information_publication_scheme.md#comment-426)

Comment: 

Great initiative. The challenge will be in the interpretation of the data. It will be important to be able to structure reporting to provide more than scores and trend data. Insights and understanding often come from the comments/thoughts/actions of individuals not the majority. In traditional market research we've been using open ended questions to derive these insights rather than relying on just coded (closed) data. Will be interesting to find ways to replicate this and continue to add value.

-   [reply](https://www.dto.gov.au/comment/reply/751/426)

Jon Burg replied on Wed, 2015-06-24 23:15 [Permalink](../comment/foi_act_and_information_publication_scheme.md#comment-601)

Comment: 

This is a very interesting approach, and one that I believe has a great deal of merit.

What I find most interesting here is that you propose stripping away any private or personal data, focusing on the substance of the user's experience. My team works with enterprises around the world, and one of the most remarkable things I have learned is the value of mixing quantitative metrics like Net Promoter Score, Customer Effort Rankings or Net Easy with qualitative, freeform customer verbatims.

For example, many enterprises start by matching their performance analytics with their user satisfaction scores. Together, this data framework provides a rich view of where customers are leaving, where things are working well and where further investigation is needed. Using the customer verbatims, as well performing a cohort analysis against all available user metadata helps the business understand what the customers experienced, and what is working, what is not working and what the impact of each potential improvement will be. I would be happy to discuss this framework further - I can be reached here - <http://bit.ly/1Lu0qYD>

-   [reply](https://www.dto.gov.au/comment/reply/751/601)

Dan Craddock replied on Tue, 2015-06-30 14:56 [Permalink](../comment/6foi_act_and_information_publication_scheme.md#comment-686)

Comment: 

Thanks Pia, great to see such a focus on analytics; APIs FTW!

As Alun Robert said above, some of the best insights come from the qualitative data; quantitative tells you 'what', but qualitative tells you 'why'.

That's why Consumer Affairs Victoria (CAV) added a feedback form to the foot of each content page. It's an approach I'm seeing get gradual uptake on government websites, most recently on the new VicRoads site.

The form seeks information for that page only, with two simple questions: 'Was this page helpful? Yes/No' and an optional 'Why or why not?' free text field. It's not a substitute for moderated usability testing, but it does provide us with a very simple and cost-effective mechanism for iterating content and services responsively and continuously.

The quantitative data we use as a general 'barometer of health', which we can track at the page level, and aggregate at the section and site level. A section trending below the site average or below 50% indicates something is wrong and that further analysis or research is required to improve the content. We can then track what impact these improvements have made. But the real gold is in the free text qualitative feedback; we get the odd political comment and spam, but the overwhelming majority respond appropriately. Everything from outdated links, to poor page structure and navigation is illuminated for us this way, and most fixes we can make on the day and then track its impact through subsequent user comments.

In terms of transactions/forms, the Vic Department of Justice & Regulation Online Forms Design Standard prescribes a similar feedback form on the 'success' screen at the completion of a transaction. Again, two simple questions; in this case: 'Overall, completing this form was...' [Single Ease Question scale - [http://www.measuringu.com/blog/single-question.php]'](http://www.measuringu.com/blog/single-question.php]') followed by an optional free text comments field. CAV is currently working on rolling out Google Tag Manager and Data Layers to better measure time on task and completion rates, which, along with satisfaction, make up the three metrics of ISO 9241 ('effectiveness, efficiency and satisfaction in a particular context of use'). We'll also be able to see which step in the form users are abandoning, so we target them for further user research.

As for publically available real-time reporting, the US Gov site (<https://analytics.usa.gov/>) is great, but doesn't (yet) include a fraction of the data displayed in the UK Gov's Performance Platform (<https://www.gov.uk/performance>). What I particularly like about this site are the individual service performance pages, such as that for the Carer's Allowance (<https://www.gov.uk/performance/carers-allowance>). It includes three ISO metrics, digital vs paper uptake, and a bunch of others including page load time and service availability.

Another absolutely invaluable resource is the Data at GDS blog (<https://gdsdata.blog.gov.uk>). I’ve gleaned several great ideas from here, including this one on heatmapping user journeys: [https://gdsdata.blog.gov.uk/2014/11/12/how-to-create-heatmaps-to-summari...](https://gdsdata.blog.gov.uk/2014/11/12/how-to-create-heatmaps-to-summarise-user-navigation/)

I look forward to reading/hearing more from the DTO on the analytics front, and I’m more than happy to share ideas, lessons learned etc.
 Cheers,

Dan.

-   [reply](https://www.dto.gov.au/comment/reply/751/686)

Stefan Willoughby replied on Tue, 2015-08-25 14:51 [Permalink](../comment/1foi_act_and_information_publication_scheme.md#comment-1936)

Comment: 

Great work by Pia and the DTO!
 Awesome to see analytics being used to guide service development and innovation.
 As Dan Craddock has said, quantitative data is just one facet, building an understanding of the data and how to interpret it are the next steps.

-   [reply](https://www.dto.gov.au/comment/reply/751/1936)

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

