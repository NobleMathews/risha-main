---
title: 'RISHA Lab: A Launchpad for Aspiring Undergrad Researchers'
category: 'B.Tech 2023'
subtitle: 'Debeshee, Kranthi'
image: 'https://raw.githubusercontent.com/NobleMathews/risha-main/master/src/Pages/_images/debeshee.jpg'
---

## RISHA Lab: A Launchpad for Aspiring Undergrad Researchers

Debeshee and Kranthi, from the B-Tech Batch of 2023, both had unique individual journeys with RISHA Lab, which culminated in their Bachelor’s Thesis together. In this blog, they reflect on their diverse experiences, offering insights into the exciting and varied opportunities that RISHA Lab has to offer!

#### - Debeshee

In our first few weeks at IIT Tirupati, we were wide-eyed and eager to take in everything this new university life could offer us! As part of induction week activities, we had a session that introduced us to our departments, which in my case, was the Department of Computer Science and Engineering. This is where I first ran into Dr. Sridhar Chimalakonda.

We walked into the room where the session was supposed to be held and in stark contrast to the typical sessions we had learnt to expect, we were met with the most friendly and approachable Sridhar Sir, poised on one of the benches, instead of on the stage. With astonishing yet inspiring anecdotes from his life, he presented us with his favourite thesis statement: “You should push your boundaries to achieve great things!” He said, no matter where you come from, incredible things are possible with hard work. He exemplifies this through his life and work, a.k.a. RISHA Lab. 

My encounter with RISHA Lab began with a research project over the winter break of 2021. Apart from getting the opportunity to work with some of the most inspiring and brilliant people, I got to write an actual research paper in my third year of B-Tech! Noble, and I worked on exploring security vulnerabilities in competitive programming data and found interesting insights. We submitted our exploratory study to EASE 2022 and lo and behold, it got accepted! We presented our paper online (courtesy of COVID) and that’s how, thanks to RISHA Lab, I had made my international debut in the world of research and academia! 

#### - Kranthi

I joined RISHA Lab at the start of my third year. Naturally, it felt intimidating—RISHA is known for pushing the boundaries of what’s possible, and I hadn’t yet developed the technical skills that so many of my lab peers had. But I was eager to learn, so I took the leap. What followed from that decision was invaluable: indispensable friendships, a bachelor’s thesis, a few published papers (and some unfinished projects).

On my first assignment, I was paired with Sachin, who had also just joined, on a project called Mood of India after the Pandemic, an extension of previous work by Akhila and Dheeraj. Since it was our first research experience, Eashaan Bhaiya generously guided us through it with patience. We got access to RISHA’s computers, began scraping data, trained some models, and navigated countless weekly meetings. We even started drafting a paper, complete with a placeholder for the results section. Everything seemed to be going as planned—until it wasn’t. Welcome to the world of research! Although we generated results, we couldn’t establish the strong correlations needed to support our findings. While this paper never saw publication, the experience taught me invaluable lessons about the realities of the research process.

#### - Debshee

In the following summer, I worked on a collaborative project between IBM Research India and RISHA Lab - where I began to explore the space of AI4SE (Artificial Intelligence for Software Engineering is all about using machine learning/artificial intelligence, to address challenges within the field of software engineering such as automating tasks and detecting defects). 

During this internship, mentored by Alex and Srikanth from IBM, we came up with a multi-part project, with some ambitious goals. The first part was to build a framework to generate super customizable code-view combinations mostly for the benefit of researchers in the domain of AI4SE - like us! Building a non-trivial open-source framework was a new experience for me and I learnt lots of new things about testing, structuring large codebases, defining and redefining the problem to be solved, until we had exactly what we wanted. The daily meetings with my mentor were a completely new work pace from being a student and working on an academic research project and I soon fell into a full-time work rhythm. I got to experience a top-notch industry research environment cementing my passion for research, all thanks to RISHA Lab and my mentors at IBM Research. 

Even after the three month internship officially ended, we continued to extend the framework, which had by now been titled COMEX. Noble (you must have heard of him by now if you were anywhere on the RISHA Lab website!) also joined in on the effort and after 13 months of developing, a version of COMEX was ready to be launched. We submitted a Tool Demonstration paper to the International Conference on Automated Software Engineering (ASE 2023). ‘COMEX: A Tool for Generating Customized Source Code Representations’ was accepted to be published and I was able to present it at the conference, held in Luxembourg (a tiny country sharing borders with Belgium, France and Germany). The conference had arranged this lovely river cruise for all the participants which was very beautiful and memorable.

![Presenting COMEX at ASE 2023, Luxembourg](https://raw.githubusercontent.com/NobleMathews/risha-main/master/src/Pages/_images/debeshee.jpg)

#### - Kranthi

Final year rolled around and it was time to do our B-Tech project or Bachelor’s Thesis. It took us a couple of restarts to figure out that reading everything that was eye-catching isn't going to get us far. So, we sought guidance from Sridhar Sir and decided to build on our work with COMEX. Our goal was to integrate the implicit structure of code into transformer-based models. Unlike natural language, code has a structured flow, which we could leverage to extract spatial and flow information. However, these transformer-based models don’t naturally accept graphs as input, so we planned to infuse this information into the attention mask layer by clamping nodes in the attention mask to exclude connections or nodes that don’t participate.

While this idea felt straightforward to implement, it was easier said than done. Our first step was to thoroughly understand the non-trivial transformer architecture, diving into related work like CodeBERT and GraphCodeBERT. We then explored novel ways to integrate the custom combined code-views generated by COMEX into a BERT model. Starting with the official GraphCodeBERT repository from Microsoft Research, we familiarised ourselves with its architecture and training process. Alex’s initial work on Code Clone Detection (identifying semantic similarity between code snippets) provided us with a foundation, which we extended to Semantic Code Search, Code Classification, and Code Translation. Each task had distinct inputs and training objectives, adding considerable complexity to the debugging process.

Training these models exceeded our local capacity, so we relied on IBM’s clusters, where jobs could take days and debugging was off-limits. Bottlenecks and memory leaks haunted us for days, and messy data frequently stalled or cancelled runs, costing us days. Yet, despite these setbacks, we persisted—and eventually, it worked!

Seeing that the metrics did not show as high of a differential as we had hoped, we looked at other possible solutions to improve the performance. One benefit of our approach, as compared to GraphCodeBERT, was that we could create an ensemble of models with various customised code-view configurations. At this point, Alex suggested another brilliant idea: mask the attention layers alternately to  infuse information from the global attention communication mechanism as well as the local layers. We set up the experiments again and trained over a couple of weeks and this time we had a significant improvement across all tasks!

Paper writing was a ball game of its own. Crafting a narrative based on the numbers took time and effort. When we eventually finished writing the journal paper and made a submission to TOSEM journal, it got rejected because the reviewers expected comparisons with large-scale closed (non-open-source) proprietary models. It was disheartening seeing the result of a year's work getting rejected on borderline unfair comparisons. We did, however, successfully present our B-Tech project to the committee and submit a 100-page detailed report on our work.

Our journey with RISHA Lab and Sridhar Sir’s able guidance was quite a roller coaster! Learning the ways of research from our mentors and peers, accepting success and failure, pushing our limits to the fullest - as Sir always recommends - we came out resilient and rich in experiences, friendships and technical knowledge. We cherish this journey as a lasting reminder that pursuing something new inevitably means facing repeated failures. Yet, when we’re grounded in a purpose that truly matters, we find the strength to keep pushing forward. Thank you RISHA Lab for our first research experience - it was definitely something to remember forever!
