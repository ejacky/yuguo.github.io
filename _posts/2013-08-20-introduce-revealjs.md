---
layout: post
title: 介绍Reveal.js
date: 2013-08-20 17:40
comments: true
categories: [javascript]
---

jQuery reveal是最近在用的一个jQuery插件，作用是控制弹出层的显示和消失。这个插件非常轻量，而且使用简单，如果页面中已经加载了jQuery的话，只需要额外1.35k的大小就能使用reveal.js。

使用方法可以在其[官方网站](http://zurb.com/playground/reveal-modal-plugin)上看到介绍。

链接触发浮层
---

首先加载需要的样式、jQuery和reveal.js之后，我们如果需要点击一个链接弹出一个弹出层，只需要在链接中加上`data-reveal-id`属性：

<script type="text/javascript" src="https://snipt.net/embed/a7a11463256a8e55e13ab69feadfa9d0/"></script>

然后在对应弹出层的id跟链接的`data-reveal-id`保持一致即可。

<script type="text/javascript" src="https://snipt.net/embed/3bc5dfa546b4780472545eb8fea109f6/"></script>

浮层一般会有一个关闭按钮，我们不用在按钮上绑定事件来关闭浮层了，只需要简单地使用class：`close-reveal-modal`即可。

代码触发浮层
---

有时候我们希望用代码来触发浮层操作，也非常简单：

<script type="text/javascript" src="https://snipt.net/embed/d497a8f659e1c610f6ce1a48e8669105/"></script>

如果要使用html属性来触发这些option，也可以：

<script type="text/javascript" src="https://snipt.net/embed/34db731ca7ab2b9eabe5ac5dd381ea28/"></script>

总的来说，使用reveal.js插件可以帮助我们更专注于页面逻辑，也不用在页面事件和触发上操太多心。

