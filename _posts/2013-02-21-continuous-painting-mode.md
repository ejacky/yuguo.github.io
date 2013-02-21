---
layout: post
title: 开启Chrome的持续绘制模式
date: 2013-02-21 21:15
comments: true
categories: [搞需求]
---

页面的**绘制**时间（paint time）是每一个前端开发都需要关注的。

当你的页面滚动不平滑的时候，就是绘制时间的问题。

So you noticed that your page doesn't scroll smoothly. This is how you would start tackling the problem. For our example, we'll use the demo page Things We Left On The Moon by Dan Cederholm as our example.

You open the Web Inspector, start a Timeline recording and scroll your page up and down. Then you look at the vertical timelines, that show you what happened in each frame.

There are different reasons for Chrome to repaint areas of the page:

DOM nodes get changed in JavaScript, which causes Chrome to recalculate the layout of the page.
Animations are playing that get updated in a frame-based cycle.
User interaction, like hovering, causes style changes on certain elements.
Any other operation that causes the page layout to change.
As a developer you need to be aware of the repaints happening on your page. Looking at the paint rectangles is a great way of doing that. In the example screenshot above you can see that the whole screen is covered in a big paint rectangle. This means the whole screen is repainted as you scroll, which is not good. In this specific case this is caused by the CSS style background-attachment:fixed which causes the background image of the page to stay at the same position while the content of the page moves on top of it as you scroll.

If you identify that the repaints cover a big area and/or take a long time, you have two options:

You can try to change the page layout to reduce the amount of painting. If possible Chrome paints the visible page only once and adds parts that have not been visible as you scroll down. However, there are cases when Chrome needs to repaint certain areas. For example the CSS rule position:fixed, which is often used for navigation elements that stay in the same position, can cause these repaints.

If you want to keep your page layout, you can try to reduce the painting cost of the areas that get repainted. Not every CSS style has the same painting cost, some have little impact, others a lot. Figuring out the painting costs of certain styles can be a lot of work. You can do this by toggling styles in the Elements panel and looking at the difference in the Timeline recording, which means switching between panels and doing lots of recordings. This is where continuous painting mode comes into play.