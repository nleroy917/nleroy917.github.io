# Your frontend's design is (probably) more important than you think

When building complex web applications, there are a lot of moving parts. It's easy to focus the majority of your attention on your API architecture, your database schema, and your CLI developer experience. Afterall, that's probably the real meat of your product. However, I argue that a well designed frontend is just as important. In fact, it's probably **more important** than you think. I plan to address two things in this post. First, **why** I think user interface design is so important. Second, I'll talk about **how** I think we can improve the way we design user interfaces. As someone in academia, I'm going to be speaking from the perspective of a researcher. However, I think the ideas I'm going to present are applicable to anyone who's interested in building software that gets users more engaged.

## Why user interface design is important

Building a user interface for your new nature-worthy analysis tool or service is more than just providing another method of interacting with the software. As much as you want people to start building third party apps that leverage your new-fangled API, we must remember that the majority of people will be interacting with your software through the user interface. As such, it it acts both as a _user interface_ and a _user experience_. To this end, your user interface serves two very important purposes: 1) **It's the first impression people have of your software**, and 2) **It's usually the primary way people interact with and learn to use your software**.

### Making a good first impression

Think about it. When you want to learn more about some new software, whats the first thing you do? You probably google it, and click the first link that looks promising. This nearly always takes you to the landing page of that software's frontend application. When this happens to your web app, whether you like it or not, people **will** judge your software by its cover. You want to make sure the first impression is a good one.

In 2001, a Stanford study found "ease of use" as one of the most important elements that improve the credibility and engagment of your website [^1]. According to the study, two items that contribute to ease of use are:

1. **The site looks professionally designed, and**
2. **The site is arranged in a way that makes sense to you.**

In other words, if your site is _ugly_, people will be less likely to trust it. If your site is _confusing_, people will be less likely to engage with it. Given that this is the first impression people have of your software, it's important to make sure that your site is both _attractive_ and _intuitive_.

However, looking good isn't always enough. People need to get to where they want to go on your site. Another 2016 study from UCLA [^2] found that the most important factors for maximizing user engagment with your site are:

1. **Navigation**
2. **Graphical representation**
3. **Organization**
4. **Content utility**
5. **Purpose**
6. **Simplicity**
7. **Readability.**

Nearly all seven of these factors are directly related to the design and explorability of your user interface. People will close the tab quickly if they can't find what they are looking for.

Finally, people are lazy. They dont want to have to _work_ to use your web application. The Web Acceptance Model (WAM)[^3] - a theorhetical framework for explaining why users accept or reject online technologies - states that for less experienced users (i.e. those coming to your page for the first time), **percieved ease of use** is the most important factor in determining whether or not they will use a new technology. In other words, if your site is _difficult_ to use, people will be less likely to use it.

#### An example

Take a look at the landing page for the **Gene Expression Omnibus (GEO)** - a popular repository for gene expression data.

![GEO landing page](https://storage.googleapis.com/nathanleroy-io-assets/images/website-design/geo.png)

Look at all the unused space. The text is very hard to read. The page lacks consistent branding. There is no clear way to navigate the page, and the search bar is small and hard to find. The entire site looks like it is straight out of 2004! It breaks all of the rules: It does not look professionally designed or intuitive, it is not simple with a clear way to navigate, and it does not look easy to use. This is the first impression many people get when landing on the GEO website. I wonder how many people immediately clicked away when landing here.

In contrast, take a look at the landing page for the **Gene Ontology (GO) Resouce** - a popular knowledgebase for gene ontology data:

![GO landing page](https://storage.googleapis.com/nathanleroy-io-assets/images/website-design/go.png)

While not perfect, it's got almost all the key features. It looks professional and is arranged well, its has a clear navigation bar, the search bar is large, front, and center. This is clearly indicatiing to the user where they should start out. It also just looks easy to use: simply start typing. This is a great first impression that makes the site approachable and engaging.

In summary, your website should **look good**, **be easy to navigate**, and **be easy to use**. If it isn't, people will be less likely to trust it, engage with it, and use it. And given that your website is often the first impression of your tool or software, this impression will likely translate to how people percieve your software as a whole.

### People learn by doing

The second reason a well-designed frontend is so important is that it's often the way people learn to use your software. There are many ways we learn as humans. Two examples are **top-down** approaches, and **bottom-up** approaches. The details of these are a story for another time... but briefly, the top-down approach is when we are presented with a broad overview or concept, and then gradually dive deeper into the details. In contrast, the bottom-up approach is when we are presented with a specific detail, and then gradually build up to a broader concept. I argue that in software and technology, the bottom-up approach is the most effective way to learn. Again, not getting into the details but there is a growing body of research that suggests the bottom-up pedagogical approach is more effective than the top-down approach for learning complex concepts in science and technology [^4] [^5] [^6]. By building a well-designed user interface that people want to use, you will effectively be teaching them how to use your software! This is a great way to get people to engage with your software, and learn to use it without reading mountains of documentation.

There is nothing worse than stumbling on a landing page of some new softare, only to be faced with a description along the lines of:

> Our cloud-based platform streamlines product development with advanced automation and powerful analytics, increasing user engagement and scalability through headless architecture. Sign up today to start shipping products faster and more efficiently.

I mean what does that even say? It's always better to show people how to use your software, rather than tell them. A well-designed frontend is a great way to do this.

#### An example

GitHub is an excellent example of a platform that enables bottom-up learning of Git. Git is a wildly popular version control system that can be challenging to learn, but GitHub's well-designed frontend makes it easy to use Git features in an intuitive way. By providing a user-friendly interface and clear documentation, GitHub empowers learners to start with specific details and gradually build up towards a broader understanding of Git. Users can start with basic tasks like adding and committing files, and then move on to more advanced topics like branching and merging. With GitHub, users can learn Git at their own pace and in their own way, making it a powerful tool for bottom-up learning.

## Tips for making a well-designed frontend

As someone an academia, I understand how much work goes into developing a new software tool that supports your research. I also understand how difficult it can be to find the time to make a well-designed frontend. However, I think it's important to make the time to do it. As I've argued above, a well-designed frontend is a great way to make your software more approachable and engaging, and it's a great way to teach people how to use your software. I have four tips for making a well-designed frontend: First, use a good, modern CSS framework. Second, let the big guys do the UX research for you. Third, pay attention to the details. And finally, know your audience.

### Use a good, modern CSS framework

In todays frontend development landscape, there is no shortage of CSS frameworks. There are many to choose from, and the exact one you end up going with depends on your needs but I do have two general tips: First, use a modern framework. Please stop using old Bootstrap bundles! It's outdated, and it just looks bad. Your site is going to give the impression that you are not keeping up with the times. Second, I tend to prefer css frameworks that provide not components, but utilities. This is a personal preference, but I find that utilities are more flexible and also teach you CSS in the process of using them.

My personal CSS framework suggestion is [Tailwind CSS](https://tailwindcss.com/) (the CSS framework for this site) . The biggest thing for me with Tailwind, is that it **just looks good**. You build a site with it and it almost instantly has the look and feel of a modern tech-companmy site. It's also very easy to use, and it's easy to customize. I highly recommend it.

### Let the big guys do the UX research for you

Let's say you are adding a modal to your website. Where do you put the save button? Bottom left? Top right? Where should the search bar be? Do we use outlined buttons or filled in buttons? These are all questions that have been answered by the big guys. They've invested **millions** (if not **billions**) into understanding how people use their software. They have done the research, and they have the data. Why not take advantage of this? If Apple puts a button in the bottom right corner of their modal, then you should too. If google puts the search bar in the top left corner of their homepage, then you should too. If facebook puts the profile link at the top right of their nav bar, then you should too. It's that simple.

The best design is the one that is already proven to work. Don't reinvent the wheel. Just use the design that's already been proven to work. I often find myself looking at the design of popular websites and apps, and then copying it. It's a great way to get inspiration, and it's a great way to make your site look and feel good.

### Pay attention to the details

This one is the most often looked, in my opinion. Again, as researchers we are busy and don't have the time to make sure our navbar is aligned perfectly. However, I firmly believe that people notice the small details and that they make a big difference. For example, which one of these looks better to you?

<img alt="Example of flex and align-items: center" src="https://storage.googleapis.com/nathanleroy-io-assets/images/website-design/items-center.png" height="250" />

I think the one perfectly aligned looks better. Your users probably do too. This was achieved with a simple `align-items: center;` in CSS. It's a small detail, but it makes a big difference. Pay attention to the details, and your site will feel so much more approachable and leave a much better impression.

### Know your audience

Finally by understanding your audience's demographics, interests, and preferences, you can create a website that resonates with them and effectively communicates your message. This includes elements like the layout, color scheme, font choice, and content. For example, if your target audience is younger and tech-savvy, you may want to use bold colors and modern design elements to capture their attention. On the other hand, if your audience is more traditional, you may want to use a more classic or conservative design approach. Ultimately, the goal of website design is to create a positive user experience that engages your audience and helps achieve your business objectives, and this can only be achieved through a deep understanding of who your audience is and what they want.

## Conclusion

A well-designed frontend is critical to the success of any complex web application. Not only does it serve as the first impression of your software, but it's also the primary way that people learn to use your software. By using a modern CSS framework, leveraging existing UX research, paying attention to the details, and knowing your audience, you can create a website that resonates with your target audience and effectively communicates your message. Ultimately, this will lead to a positive user experience, increased engagement, and the achievement of your research objectives.

[^1]: https://dl.acm.org/doi/10.1145/365024.365037
[^2]: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4974011/
[^3]: https://www.sciencedirect.com/science/article/abs/pii/S0378720607000286
[^4]: https://www.tandfonline.com/doi/full/10.1080/2331186X.2017.1377506
[^5]: https://pubs.acs.org/doi/10.1021/ed085p1680
[^6]: https://www.jstor.org/stable/26763449
