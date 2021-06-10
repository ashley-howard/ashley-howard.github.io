---
title: Why did I implement a settings menu on my site?
tags: accessibility feature
---
... as well as a left-handed mode?

If you were to ask anyone that knows me well, you'd find out that I'm an avid user of mobile apps and have hundreds on my phone. Ranging from social media and games, to productivity and educational apps.

But as a web developer I've noticed something; websites these days are becoming more powerful, yet they still seem to be lacking something.

**Personalisation!**

Now I'm not talking about things like choosing your favourite colour to be the default theme or having a custom cursor (Myspace anyone?). I'm talking more in terms of accessibility; creating a website that provides a bespoke, but more importantly, comfortable experience for the user. 

Mobile apps for example, have options such as dark mode, reduced data, and being able to rearrange the layout. (Though we have CSS's '`@media prefers`', not all features have been completely implemented yet into browsers.)

## Quick note

Throughout this article I talk about code and include code snippets. I tried my best to add context, to help non-developers get the gist.

## The origin of the idea

You see dark mode everywhere these days. It's trending - and for a good reason too! I hate looking at a bright website in the dark, don't you? I think everyone deserves the option at least to toggle between the theme which best suits them (and their eyes of course!).

My previous site had a dark mode - a toggle at the top right. I tried replicating it on my current site but I felt like it just stuck out like a sore thumb.

That's where my idea for a settings menu actually came about. Just a total collection of settings in one place, that could be easily accessed through the main menu (and the footer).

### Creating a system-level dark mode

The first setting I created was a system-level dark mode, which follows the user's device's colour scheme. That's actually an important point, as it "listens" to what theme your device is using, and follows that.

I ended up implementing three choices:

- System: Follow the user's device's light/dark mode
- Light: Emulate the light mode (e.g. for devices with the dark mode always on)
- Dark: Emulate the dark mode (e.g. for devices that don't have a dark mode)

I pulled this off relatively easily thanks to SCSS mixins and CSS variables so I didn't have double the code to maintain. I modified it for the sake of example:

```scss
@mixin light() {
    --body: white;
    --primary: black; 
    --secondary: blue; 
}

@mixin dark() {
    --body: black;
    --primary: white;
    --secondary: aqua;
}

:root {
    // Default / System light mode
    @include light();

    // System dark mode
    @media (prefers-color-scheme: dark) {
        @include dark();
    }

    // Emulated light mode
    .light {
        @include light();
    }

    // Emulated dark mode
    .dark {
        @include dark();
    }
}
```

The .light and .dark classes are added to the body via JavaScript, and then saved via localStorage.

### The result

<video controls preload="none" width="346" height="608" loop="" poster="/assets-copy/images/posts/why-did-i-implement/dark-mode.jpg"  style="max-width: min-content;">
    <source src="/assets-copy/images/posts/why-did-i-implement/dark-mode.mp4" type="video/mp4">
</video>

## About that left-handed mode

Why did I even add a left-handed mode?

Because I'm left-handed. Okay, well, I actually use my phone with my right hand. I think I ended up using my right-hand for most things because I feel that most things are designed for right-handed people.

That said, I liked the idea of having a left-handed mode. I thought that "true" left-handers would appreciate it, and it didn't seem so complicated in my head, so I thought why not?

Let's begin reducing those awkward thumb manoeuvres!

### The main header

Fortunately in mobile mode, I have only two things in the header: a logo and a menu button. All I had to do was switch them around.

That's where flexbox comes to the rescue with row-reverse:

```scss
.main-header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;

    .left-handed & {
        flex-direction: row-reverse;
    }
}
```

### The pop-out menu

Now that the header is switched, I have to make the menu pop out of the left side instead.

The menu already uses CSS transform, so I just changed the x value from a negative to a positive number:

```scss
$wrapper-h: 50px;
$wrapper-w: 130px;

.wrapper.open {
    transform: translate(- $wrapper-w, $wrapper-h);

    .left-handed & {
        transform: translate($wrapper-w, $wrapper-h);
    }
}
```

### The 'scroll to top' button

The last thing I thought needed changing was the 'scroll to top" button, which was currently sitting on the right-hand side. 

As it's using a fixed position, all I had to do was change it from right to left:

```scss
#scrollTop {
    --inset-x: 1rem;
    right: var(--inset-x);

    .left-handed & {
        left: var(--inset-x);
    }
}
``` 

### The result

<video controls preload="none" width="352" height="604" loop="" poster="/assets-copy/images/posts/why-did-i-implement/left-handed-mode.jpg"  style="max-width: min-content;">
    <source src="/assets-copy/images/posts/why-did-i-implement/left-handed-mode.mp4" type="video/mp4">
</video>

Altogether, creating the left-handed mode took about **10 minutes** to implement (which I understand totally depends on the complexity of the site). I mention this as I feel like something that can take such little time can actually make a huge impact on someone's life.

Now that I've got two settings, what do you think should be next?

## On that note...

While we wait for phones and browsers to better work together in order to create system-level personalisation options, I absolutely feel that a settings menu is an invaluable tool for providing a great user experience.

I'm not recommending everyone to go away to implement a settings menu, but to at least take inspiration from it to go on to create better web experiences for everyone.

Are there any features or settings that you'd like to see implemented more in websites? Get in touch at [blog@ashley.how](mailto:blog@ashley.how).