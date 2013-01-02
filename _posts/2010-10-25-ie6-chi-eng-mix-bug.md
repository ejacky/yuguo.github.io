---
layout: post
title: IE6下中英文混排的bug
date: 2010-10-25 17:54
comments: true
categories: []
---
今天花了点时间攻克了一个困扰我很久的bug，听我慢慢道来。

最开始的时候是这样的：

关键代码如下：
<pre><code>&lt;span&gt;&lt;a href="#"&gt;文字文字文字文字&lt;/a&gt;&lt;/span&gt;</code></pre>
<pre><code>body {font: normal 12px/1.5 tahoma, arial, 宋体;}</code></pre>


<img class="aligncenter size-full wp-image-355" title="1" src="http://yuguo.us/files/2010/10/1.png" alt="" />

在IE6下的text-decoration:underline，下划线窜上来把文字切了一刀，看上去很猥琐很不爽。找了半天，原因着实不明。想起前辈们的教导：百思不得其解的IE6/7 bug就是hasLayout，于是给里面的超级链接加上_float:left，搞定。

但是，问题又来了，在IE6下，成了这个样子：

关键代码如下：
<pre><code>&lt;span&gt;&lt;a href="#"&gt;文字文字文字文字&lt;/a&gt;&lt;/span&gt;</code></pre>
<pre><code>body {font: normal 12px/1.5 tahoma, arial, 宋体;}
li {display:inline-block;*display:inline;zoom:1;<em>vertical-align:top</em>}</code></pre>
<img class="aligncenter size-full wp-image-355" title="2" src="http://yuguo.us/files/2010/10/2.png" alt="" />

注意到没有，中英文混排的时候英文和数字的下划线低了1像素泪流满面啊……还以为是zoom的缘故找来找去半天，最终发现问题出在vertical-align上面。因为这个li我希望它能横向平铺并自动展开，所以用inline-block来完成，具体的案例请看这里：<a href="http://blog.mozilla.com/webdev/2009/02/20/cross-browser-inline-block/">跨浏览器的inline-block【En】</a>，然后为了上对齐，给li加上了vertical-align:top，就是这个该死的属性让IE6的中英文混排时候的下划线错位。给a加上vertical-align:baseline;

关键代码如下：
<pre><code>&lt;span&gt;&lt;a href="#"&gt;文字文字文字文字&lt;/a&gt;&lt;/span&gt;</code></pre>
<pre><code>body {font: normal 12px/1.5 tahoma, arial, 宋体;}
li {display:inline-block;*display:inline;zoom:1;<em>vertical-align:top</em>}
li a {_float:left;_<em>vertical-align:baseline;</em>}/*fix ie text-decoration line through bug and Chi/Eng mix bug */</code></pre>
<img class="aligncenter size-full wp-image-355" title="3" src="http://yuguo.us/files/2010/10/3.png" alt="" />

done!
