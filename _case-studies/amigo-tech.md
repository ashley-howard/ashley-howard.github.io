---
type: main
title: Amigo Technology
date: 2021-05-01 12:00:00 +0000
framework: Jekyll
languages: ["HTML", "SCSS", "JS", "Liquid"]
description: "A collaborative website redesign for a cloud-based marketing technology platform."
thumbnail: "amigo-tech/amigo-thumbnail.jpg"
height: 1080
width: 1920
link: https://amigotechnology.com/
---
*Note: This case study is a work in progress, but feel free to check it out!*

Amigo technology is a cloud-based marketing platform, and gives enterprises a better way to change, in less time, with less cost and less risk.

## The brief

Max got in touch with me, asking if I'd be interested in redesigning Amigo's website. Not only this, but he wanted me to help them move over from WordPress to [Jekyll](https://jekyllrb.com/), a lightweight static site generator. 

Using this framework, it not only saves money in hosting, but it's fast, and working through [GitHub](https://github.com/) makes it extremely easy to collaborate and update the site.

## Styles

### Amigo's colour palette

<img src="/assets/images/case-studies/amigo-tech/colour-palette.jpg" alt="a vibrant colour palette including teal, aqua, yellow, purple, black, and white" height="360" width="712" style="width: min(712px, 100%);">

### Buttons

<img src="/assets/images/case-studies/amigo-tech/buttons.jpg" alt="a screenshot of different types of buttons" height="348" width="488" style="width: min(488px, 100%);">

## The homepage

<video controls preload="none" width="1200" height="784" loop="" poster="/assets/images/case-studies/amigo-tech/amigo-tech-thumbnail.png">
    <source src="/assets/images/case-studies/amigo-tech/amigo-landing.mp4" type="video/mp4">
</video>

For the hero section, Max wanted something clean while using an animation to keep things lively, so I ended up implementing a moving gradient animation using Amigo's vibrant colour palette. The video above is sped up for demonstration purposes.

## Service page

<video controls preload="none" width="1200" height="784" loop="" poster="/assets/images/case-studies/amigo-tech/amigo-services.png">
    <source src="/assets/images/case-studies/amigo-tech/amigo-services.mp4" type="video/mp4">
</video>

Max wanted users to be able to easily move between sections in style. So I implemented a vibrant fixed bar to the top of the page, which takes you to each service in a smooth manner. 

For mobile, the bar scrolls horizontally.

## Accessibility

### Helping the visually impaired

I had accessibility in mind from the beginning, and made sure Amigo's site performed efficiently for as many people as possible, no matter their disability.

I made use of semantic elements as much as possible, and used ARIA labels, which helps people that use screen readers understand the content better.

### Improving the colour contrast

I made sure that the colours of the text and backgrounds sufficiently passed contrast tests. 

In fact, I suggested making their main teal colour a tiny bit darker for text and backgrounds, while keeping it unchanged for decorative elements. This small change gives it a bit of an edge in readability:

<img src="/assets/images/case-studies/amigo-tech/contrast-comparison.jpg" alt="a comparison between teal and a slighter darker teal" height="110" width="418" style="width: min(418px, 100%);">

{% comment %}
## Moving from WordPress to Jekyll

I'm a big fan of Jekyll, so I was excited to help Amigo move over from WordPress. Jekyll has many performance gains and advantages over WordPress, as it simply serves static files with some magic behind the scenes.

Using Jekyll also reduces the cost of hosting to zero, as GitHub hosts static sites for free.

### Easy updating

Using Jekyll, it's now extremely easy to write content across the site. Many pages on the site now use Markdown for easy editing or updating.
{% endcomment %}
