---
title: making_government_discoverable
permalink: making_government_discoverable.html
layout: default
---
Making government discoverable
==============================

Share to:
---------

[![Facebook logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/facebook.png)](http://www.facebook.com/sharer.php?u=https%3A//www.dto.gov.au/blog/making-government-discoverable&t=Making%20government%20discoverable "Share on Facebook") [![Twitter logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/twitter.png)](http://twitter.com/share?url=https%3A//www.dto.gov.au/blog/making-government-discoverable&text=Making%20government%20discoverable "Share this on Twitter") [![LinkedIn logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/linkedin.png)](http://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.dto.gov.au/blog/making-government-discoverable&title=Making%20government%20discoverable&summary=If%20we%20want%20to%20give%20people%20the%20right%20information%20and%20services%20at%20the%20right%20time%2C%20we%20need%20to%20know%20more%20about%20what%20information%20and%20services%20the%20government%20offers.&source=Digital%20Transformation%20Office "Publish this post to LinkedIn") [![email logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/email.png)](mailto:?subject=Making%20government%20discoverable&body=https%3A//www.dto.gov.au/blog/making-government-discoverable "Share via email")

02/07/2015 - 11:11am

Author: 

Pia Waugh

If we want to give people the right information and services at the right time, we need to know more about what information and services the government offers.

At the moment each agency keeps track of its own content and services, and there is no central listing that can be used to help bring together useful or related information. Websites like [*australia.gov.au*](http://www.australia.gov.au/) and [*business.gov.au*](http://www.business.gov.au) have listings of government information for end users, but this only goes so far and their listings and metadata are not currently reusable by other agencies and third parties. There is some work required to make government content and services more consistent, easy to find and easy to access – not just for end users but for all parties involved in the end to end process of servicing user needs.

We think a first step would be to create a “discovery layer”. This is essentially a search-enabled set of registries that will be exposed publicly to make it easier for government agencies, external search tools and third parties to find what they need. It will also enable government entry points to better present curated information and services for user needs.

Secondly content, services, publications and other information from government could be both discoverable and increasingly consumable through APIs (<http://en.wikipedia.org/wiki/Application_programming_interface>). APIs mean that anyone can write their own program to present government information (like data, publications, media releases, photos, video, tags, profiles or groups) in new and different ways.

This API-enabled discovery layer enables what we like to call “mashable government”, or the ability to aggregate the right information and services for users through websites and applications, whether they are run by government or third parties. Making the information and services across government more consistent and discoverable will also improve search results, getting people where they need to go faster and easier.

### What does this mean for Government content?

Existing government website content and publications have been created and managed by separate groups within separate government departments. The result being that it is often presented in fragmented, duplicated and poorly targeted ways to end users. To help resolve this, we are proposing a content register – looking at [Solr](http://lucene.apache.org/solr/) or [Elasticsearch](https://www.elastic.co/products/elasticsearch) – to bring this information together using an extendable tagging and metadata capability, which agencies and third parties can use to improve tailored content delivery. This will mean content can be tagged as relating to particular topics, life events or types of users, regardless of which agency it comes from.

This will allow us to relate and curate content across government to create an integrated and comprehensive view with less duplication. There are many examples of this approach, including the <http://decarboni.se/> website which aggregates and makes consistent content from over 500 websites in a particularly clever way.

### What does this mean for services?

Some agencies have a services catalogue but there is no single or complete view of services across the federal government - so how do we get people to the service they need? To deal with this we are developing a register of government services with rich metadata. This will make it easy to find and present appropriate service information in multiple places, so online agencies and third parties can provide tailored service information. People will then be able to find what they need, where they are, and seamlessly move from discovery to using services and transactions.

We would also like to identify where services are consumable for third party applications to make it easier for the private sector to retail consumable government services. A good example of a consolidated services register is the [National Health Services Directory](http://www.nhsd.com.au/), where Federal, State and Territory and Local Governments along with various allied health organisations publish health related services in the one API enabled, extendable and searchable database.

We’ve been analysing some of the agency specific or partial service registers out there, and have built a proof of concept approach we’d love your feedback on. For this POC, we’ve worked with DHS and we’ve taken the generic services catalogue from Australia.gov.au. We created a consistent metadata schema for services and merged the content into a GitHub repository of JSON files for ease of reuse. We also built an experimental front end for search across the whole discovery layer. It is still a work in progress but please check it out and let us know what you think of this approach and the metadata proposed, and we’ll integrate your feedback into the next stage of development. Our goal is to make it easy for governments (across jurisdictions) and third parties to discovery and represent appropriate Federal Government services for user needs.

The service catalogue is at <https://github.com/AusDTO/govHackServiceCatalogue>

### data.gov.au

While exposing information and services for people is our primary driver we are also considering that the same approach can be used to make other useful stuff discoverable, such as [all government APIs and common platforms](http://data.gov.au/dataset/common-platforms-and-web-services) that agencies can leverage, all websites, etc. We’ll likely use *data.gov.au* for these miscellaneous lists of useful things for easier discovery.

What do you think?
------------------

We haven’t made any decisions yet on the exact tools and technology we will be using but we will talking with interested parties as we progress. We hope to have a proof of concept up by next month for people to play with, just to test our ideas.

Let us know your thoughts on the idea and on our approach in the comments below, and we’d love any examples you have where it has been done well. We see this as a first big step towards a more readily consumed and reusable “Government as an API” in Australia, and we look forward to working with you on developing a useful discovery layer for government. We also look forward to seeing what you can do with the APIs.

We will continue to provide our thinking through blog links with the individual ideas and designs. We’ll also be holding a number of public consultations and consultative events over the next few months – so [subscribe to the DTO mailing list or the RSS feed](../../foi_act_and_information_publication_scheme.md) to stay involved.

[![Facebook logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/facebook.png)](http://www.facebook.com/sharer.php?u=https%3A//www.dto.gov.au/blog/making-government-discoverable&t=Making%20government%20discoverable "Share on Facebook") [![Twitter logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/twitter.png)](http://twitter.com/share?url=https%3A//www.dto.gov.au/blog/making-government-discoverable&text=Making%20government%20discoverable "Share this on Twitter") [![LinkedIn logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/linkedin.png)](http://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.dto.gov.au/blog/making-government-discoverable&title=Making%20government%20discoverable&summary=If%20we%20want%20to%20give%20people%20the%20right%20information%20and%20services%20at%20the%20right%20time%2C%20we%20need%20to%20know%20more%20about%20what%20information%20and%20services%20the%20government%20offers.&source=Digital%20Transformation%20Office "Publish this post to LinkedIn") [![email logo](https://www.dto.gov.au/profiles/govcms/modules/features/govcms_share_links/images/email.png)](mailto:?subject=Making%20government%20discoverable&body=https%3A//www.dto.gov.au/blog/making-government-discoverable "Share via email")

Related blogs
-------------

[Getting inside your head: Analysing search behaviours](../../node/foi_act_and_information_publication_scheme.md)

[Where are we heading: A future state for user experience](../../node/foi_act_and_information_publication_scheme.md)

[Government working with government: Lessons from OneGov](../../node/foi_act_and_information_publication_scheme.md)

Comments (10)
-------------

Darren Whitelaw replied on Thu, 2015-07-02 12:24 [Permalink](../../comment/foi_act_and_information_publication_scheme.md#comment-706)

Comment: 

Nice work! Just getting a catalogue of government services together is a big first step. Whilst releasing publicly-funded data is great for the citizens, I reckon the biggest beneficiary is actually other government departments and agencies -- because they get access to information that's normally locked within organisational structures. Open data is one of the best ways for the public sector to poke holes in silos. Looking forward to seeing what some clever people do with this data.

-   [reply](https://www.dto.gov.au/comment/reply/771/706)

Stephen Hardy replied on Thu, 2015-07-02 15:00 [Permalink](../../comment/foi_act_and_information_publication_scheme.md#comment-711)

Comment: 

I'd like an API for exploration of the "graph of government data and services". Nodes in the graph are services and datasets. Links between them are different sorts of relationships, from the simple - "this data is generated by this service" or "this service is related to this other service", to the more abstract - "this data measures outcomes relevant to this service" or "this data can be joined to this other data".

-   [reply](https://www.dto.gov.au/comment/reply/771/711)

Graham Williamson replied on Fri, 2015-07-03 09:07 [Permalink](../../comment/foi_act_and_information_publication_scheme.md#comment-726)

Comment: 

Yes - definition of an API to query the Discover Service is needed - there is also a need for API definition on the other side. Agencies are going to need to expose their services for access to users of the Discovery Service and this is probably going to be done via an API rather than an HTTP redirect. For those agencies with web apps already exposed there are benefits to moving to a common Discovery Service - it abstracts their service and relieves them of access control logic etc. but the API they expose must be secure and well managed. They will need guidance on how to do this.

-   [reply](https://www.dto.gov.au/comment/reply/771/726)

![Pia Waugh's picture](../../sites/g/files/net466/f/pictures/picture-281-1437457645.png "Pia Waugh's picture") Pia Waugh replied on Fri, 2015-07-03 10:05 [Permalink](../../comment/foi_act_and_information_publication_scheme.md#comment-731)

Comment: 

Thanks Graham, and that is definitely the plan! Because the Discovery Service will have different types of information available, there will be documentation for different ways to use the API(s) for discovery and for reuse of the information. We will blog more soon. Thanks!

-   [reply](https://www.dto.gov.au/comment/reply/771/731)

Chris replied on Fri, 2015-07-03 15:46 [Permalink](../../comment/foi_act_and_information_publication_scheme.md#comment-736)

Comment: 

Great idea! Work probably needs doing to convince government to share and embrace "public". I have been "knocked back" by too many government orgs/employees in both the distant and near past, for all kinds of things like access and suggestions and offers to help.

Public are no doubt seen as a monster threat to government workers: we have unlimited time and skills, and we're up-to-date on modern tech and trends - put us in front of their data, and we are going to make them look bad. Their reaction to this (that I have experience so far) seems to be hiding, denial of access, and sabotage (partial/useless/"fake" data publications - eg1: publishing geographic asset databases of just ID number, but no coordinates, with no data-format references accompanying, eg2: forbidding access because I'm not a "government contractor", then when I explained my project, forbidding me anyhow because "contracting for more than 2 agencies is a conflict of interest" [happened this week], or eg3: coastal climate measurement data [mysteriously vanished about 5 years ago]... the list goes on)

-   [reply](https://www.dto.gov.au/comment/reply/771/736)

Chris replied on Sat, 2015-07-04 02:16 [Permalink](../../comment/foi_act_and_information_publication_scheme.md#comment-746)

Comment: 

Great idea! Work probably needs doing to convince government to share and embrace "public". I have been "knocked back" by too many government orgs/employees in both the distant and near past, for all kinds of things like access and suggestions and offers to help.

Public are no doubt seen as a monster threat to government workers: we have unlimited time and skills, and we're up-to-date on modern tech and trends - put us in front of their data, and we are going to make them look bad. Their reaction to this (that I have experience so far) seems to be hiding, denial of access, and sabotage (partial/useless/"fake" data publications - eg1: publishing geographic asset databases of just ID number, but no coordinates, with no data-format references accompanying, eg2: forbidding access because I'm not a "government contractor", then when I explained my project, forbidding me anyhow because "contracting for more than 2 agencies is a conflict of interest" [happened this week], or eg3: coastal climate measurement data [mysteriously vanished about 5 years ago]... the list goes on)

-   [reply](https://www.dto.gov.au/comment/reply/771/746)

Dan Craddock replied on Sun, 2015-07-05 17:12 [Permalink](../../comment/foi_act_and_information_publication_scheme.md#comment-781)

Comment: 

This would have so many applications - one that immediately springs to mind is the capacity to share content from a Commonwealth website to a state or local gov website.
 For instance, a Commonwealth regulator of a national law (e.g. the ACCC, regulator of the Australian Consumer Law) could 'funnel' their informational content through an API to the websites of state regulators of that law (e.g. NSW Fair Trading). This would mean a single source of truth authored once, published to many; saving the state regulators from creating and maintaining their own versions. Users would not need to bounce between to Commonwealth and state websites, and state user feedback about the content could be funneled back to the ACCC for continuous iteration and improvement.
 I'm a big advocate of reducing the number of websites at both Commonwealth and state levels to the minimum number required for citizens to complete their tasks as simply, clearly, and quickly as possible. The ACCC example above could work just as easily (if not more so) if the Commonwealth and each state eventually built their own genuine GOV.UK equivalents.
 What I wouldn't like to see APIs be used for is as a hack/substitute for solving the problem of content dispersed across 1,200 federal websites – i.e. indexed by a separate 'portal'. This wouldn't fix the underlying issue of content standards (usability, accessibility, voice, tone, style), which vary (often quite dramatically) from one gov website to the next. Also, the portal would likely compete with the 1,200 sites for search results and clicks, confuse users ("which result should I click?"), and ultimately beg one of questions GDS asked - why not put all the content in one place and save each dept/agency \$\$\$ managing their own web infrastructure?

-   [reply](https://www.dto.gov.au/comment/reply/771/781)

Joemmemm replied on Mon, 2015-07-06 09:15 [Permalink](../../comment/foi_act_and_information_publication_scheme.md#comment-831)

Comment: 

A bit concerned that you state you are working with DHS to undertake this POC as theirs is the least useable of all the websites. It takes you round in circles and is not user friendly. I agree that there is considerable difference in sites and what services are available.

-   [reply](https://www.dto.gov.au/comment/reply/771/831)

![Pia Waugh's picture](../../sites/g/files/net466/f/pictures/picture-281-1437457645.png "Pia Waugh's picture") Pia Waugh replied on Mon, 2015-07-06 10:13 [Permalink](../../comment/foi_act_and_information_publication_scheme.md#comment-836)

Comment: 

Thanks for the comment. We are working with the DHS services catalogue, which is a comprehensive list of all services they provide. We are working with several agencies' service catalogue to the same end: to get a single, discoverable view of all services provided by the Commonwealth Government. We are aware of the limitations of specific service delivery, and are also looking at that.

Cheers,
Pia Waugh

-   [reply](https://www.dto.gov.au/comment/reply/771/836)

simonfj replied on Thu, 2015-07-23 16:21 [Permalink](../../comment/11foi_act_and_information_publication_scheme.md#comment-1166)

Comment: 

Hi Pia,
 Sounds like a plan.

What happens if we widen your assumption and put the user in the middle of things?
 "If we want to help people to find the right information, services and people at the right time, each user needs to know more about what information, services and people relevant to them at a particular time". In other words we must introduce "personalization" as a primary design element.

Developing this "discovery layer" is one thing which has bedeviled every network and content manager since TimBL invented this (internet) application called the Web. We find it so easy to look into, and filter all sorts of departmentalized network's content, which often leads us to the conclusion that the inhabitants of one network might be (aware and) collaborating with another. Wish that it was the case.

It's so logical "To help resolve this, we are proposing a content register – to bring this information together using an extendable tagging and metadata capability, which agencies and third parties can use to improve tailored content delivery". But in the 20 years since Windows 95 + IE opened the world of info to everyone, it hasn't worked (even if every department of every uni, globally, has tried).

The assumption, as always, is that students/citizens are inanimate objects who must wait to have "a service" delivered to them by "an agency of third party", like a consumer. Either that or search a thousand databases in order to have their questions answered. We can consolidate these thousands of databases into one database like the NHSD. But that still won't enable a user to just look at those services which are relevant to them. For that to happen, the service must have knowledge of the user, and here we come into privacy issues.

What would happen if we were to change the assumption and consider that citizens were thinking responsible people who, if they understood how a system worked, & empowered (with the right tools) they could be independent and participate in their own health and (self) governance.

To use your example of the NHS directory. On one side, users have a NSSD filtering tool which might compensate for a user's lack of "local community" knowledge. On the flip side, users haven't any knowledge of how the PEEHR system works, and know that they can take control of their own records. [https://www.nehta.gov.au/using-the-ehealth-record-system/maintaining-ehe...](https://www.nehta.gov.au/using-the-ehealth-record-system/maintaining-ehealth-in-your-practice/patient-access-controls)

Only 2 in 1000 people do. [https://www.nehta.gov.au/using-the-ehealth-record-system/maintaining-ehe...](https://www.nehta.gov.au/using-the-ehealth-record-system/maintaining-ehealth-in-your-practice/patient-consent)
 So very people are capable of being proactive in improving consolidated governments' systems, which should be capable of immediate response to (e.g.) an outbreak of some unusual disease in a locality, or registering (and supporting) a common problem across a National or International community.

Now, because I, as a user, don't have personal controls on my PEEHR account, if one did wish to participate in (say) this International project <https://www.healthbank.coop/about/> (you might remember them from the 2013 OKNcon) ,and contribute my IHI records to some research, I simply cannot.

In all of this I'm reminded of the three stages of innovation. Information. Consultation.Participation. [https://www.linkedin.com/pulse/build-e-community-centre-diaspora-kirk-zu...](https://www.linkedin.com/pulse/build-e-community-centre-diaspora-kirk-zurell) And you know I used to point to your "Public Sphere" stuff as the best example, in Oz, of the latter two stages. (run on the smell of an oily rag). (BTW, I can't point to it anymore because the data has been lost [http://pandora.nla.gov.au/external.html?link=http://www.katelundy.com.au...](http://pandora.nla.gov.au/external.html?link=http://www.katelundy.com.au/2011/12/15/analysing-the-public-sphere-%E2%80%93-data-and-community/) ) So much for an info-only approach.

I guess the point here is a difference in philosophy. One one hand you're wanting to build a Tripadvisor-type service, without a way for user to give an opinion about an org's service. i.e. "Our goal is to make it easy for governments (across jurisdictions) and third parties to discovery and represent appropriate Federal Government services for user needs". One the other, most users just want to know about those services which are relevant to them and help others users to be aware that some services are good, irrelevant, or bad.

We'll just have to see which one gains a following. Al the best.

-   [reply](https://www.dto.gov.au/comment/reply/771/1166)

Add new comment
---------------

Your name

Comment (mandatory)

[More information about text formats](../../filter/foi_act_and_information_publication_scheme.md)

### Plain text

-   No HTML tags allowed.
-   Web page addresses and e-mail addresses turn into links automatically.
-   Lines and paragraphs break automatically.

Leave this field blank

Save

Preview

