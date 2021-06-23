---
title: One-page portfolio
date: 2021-01-08T12:00:00.000+00:00
framework: None
languages:
- HTML
- SCSS
- jQuery
description: A "no-refresh" portfolio website inspired by React.
thumbnail: one-page-portfolio/one-page-portfolio-thumbnail.jpg
height: "356"
width: "634"
link: "/one-page-portfolio"

---
_Note: This case study is a work in progress, but feel free to check it out!_

A UX designer came to me with a portfolio design that needed to be coded into a mobile-friendly website. For privacy reasons, I'm unable to name this client and post their URL, so with their permission I hosted a clone of it (using placeholder images and text).

## The brief

To create a portfolio where you can switch between projects without the page refreshing. This is something you'd typically find in frameworks like React or Gatsby, but I wanted to give it a shot using a static site, as my client already had experience with static sites.

{% comment %}
I had already done something like this before, but not to this extent. Hiding and showing divs is essentially how the magic happens. The hard part was dealing with the URL, making it update corresponding to the project, as well as making it a link you could share. I'll talk about the URL a bit later.
{% endcomment %}

## The landing page

{% include picture.html img="one-page-portfolio-1" ext="jpg" alt="" width="1920" height="1080" %}

The landing page consists of a fixed sidebar, with a clean list of projects and social links. On their actual site their headshot is shown on the right-hand side.

## Project pages

### Making content appear on scroll

My client wanted the content to appear on scroll, so I ended up creating a "lazy load" effect, which discreetly displays the content as you scroll down. Shown below:

{% comment %}
My client wanted the content to appear on scroll, so I ended up making use of getBoundingClientRect().top and onscroll. When the content reaches a certain point on the page, it adds a CSS class which fades in the content smoothly. Shown below:
{% endcomment %}

<video controls preload="none" width="1200" height="694" loop="" poster="/assets-copy/images/case-studies/one-page-portfolio/scrolling.png">
<source src="/assets-copy/images/case-studies/one-page-portfolio/scrolling.mp4" type="video/mp4">
</video>

{% comment %}

### Loading animations

My client wanted a loading screen not only when loading the site for the first time, but before every project. I used a bit of jQuery here, to provide a real load when the page loads, and a "fake" load when moving between project pages.

My client wanted a loading screen not only when loading the site for the first time, but before every project. I used a mixture of jQuery's load function and setTimeout, therefore providing a "real" load on when the page loads, and a "fake" load when moving between project pages.

The process:

* Initialise the website with the loading animation
* Use jQuery's load function to remove the animation when the page finishs loading
* For each project, load the animation again, then remove it using a `setTimeout` of 2 seconds

{% endcomment %}

{% comment %}

### Dealing with project URLs

First I trialled out hash links (#like-this), and although it worked great, we both felt like it would look a lot better if we could remove the hash. So after some research, I found that we could get away with "fake" URLs.

Using window history and pushState, you can move backwards or forwards through the website, and it will not only update the URL but the project too.

```js
jQuery(document).ready(function ($) {

    if (window.history && window.history.pushState) {

        $(window).on('popstate', function () {
            // if the URL isn't empty after the slash, load the project
            if (window.location.href.substring(window.location.href.lastIndexOf('/')) !== '/') {
                updateProjectUrl()
            } 
            // otherwise load the home screen
            else {
                closeProject()
            }
        });
    }
});
```

{% endcomment %}

{% comment %}

### Sharing project URLs (404 trick)

I won't lie, I hadn't heard of a website doing this before, but I wanted to try it and it actually worked (in all browsers too - including IE!).

* The problem: How can you share a project URL when a page for it doesn't actually exist?
* The idea: Make a 404 page which is an exact copy of the index page, then write a code that looks at the URL and finds the corresponding project with that URL.
* The solution: I realised that that no one would realise that they're on a 404 page, because it's identical to the index page. But under the hood, it matched the URL to a project and then loaded it. The 404 page's primary purpose is to "redirect" project pages. Shown below:

```js
function updateProjectUrl() {
    // Get all projects
    for (var i = 0; i < nav.getElementsByClassName('link').length; i++) {
        // if the URL matches a project name, "click" (go) on it
        if (!window.document.documentMode && nav.getElementsByClassName('link')[i].getAttribute('onclick').includes(window.location.href.substring(window.location.href.lastIndexOf('/') + 1))) {
            nav.getElementsByClassName('link')[i].click()
        }
        // same but for IE
        else if (window.document.documentMode && nav.getElementsByClassName('link')[i].getAttribute('onclick').indexOf(window.location.href.substring(window.location.href.lastIndexOf('/') + 1)) > 0) {
            nav.getElementsByClassName('link')[i].click()
        }
    }
}

updateProjectUrl()
```

{% endcomment %}

## The mobile design

On mobile (and tablets), the sidebar takes up the full width of the screen. The content is then loaded upon clicking on a project. A back arrow at the top-left allows the user to easily head back to the main menu.

<video controls preload="none" width="352" height="694" loop="" poster="/assets-copy/images/case-studies/one-page-portfolio/mobile.png"  style="max-width: min-content;">
<source src="/assets-copy/images/case-studies/one-page-portfolio/mobile.mp4" type="video/mp4">
</video>

{% comment %}

## Future to do

* Upgrade onscroll events to Intersection Observers
* Use CSS grid for the layout

## Update (June 2021)

### Improving the transitions

Originally for the transitions I was using margins. I recently learnt that this leads to bad performance ([explained here](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)), and opted for transform instead.

```scss
// code reduced for the sake of example
img {
    opacity: 0;
    transform: translateY(160px);
    transition: opacity 3s ease, transform 1.5s ease;

    &.desktop {
        display: inline;
    }

    &.mobile {
        display: none;
    }

    &.display {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
}
```

{% endcomment %}