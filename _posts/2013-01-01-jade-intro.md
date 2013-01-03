---
layout: post
title: jade语法简介
date: 2013-01-01 18:20
comments: true
published: false
categories: [水]

---

Jade是一种高性能的模板引擎，可以快速书写html，是nodejs的Express创建项目时默认的引擎，它的优点是：
<ul>
	<li>客户端支持</li>
	<li>非常好的可读性</li>
	<li>灵活的缩进</li>
	<li>静态include</li>
	<li>html5模式（默认的doctype）</li>
	<li>等等</li></ul><h2> 标签</h2>
开始的单词就是标签，比如
<code>html</code>
变成 <code>&lt;html&gt;&lt;/html&gt;</code><code>div#container</code>
变成 <code>&lt;div id="container"&gt;&lt;/div&gt;</code><code>div.user-details</code>
变成 <code>&lt;div class="user-details"&gt;&lt;/div&gt;</code><code>div#foo.bar.baz</code>
变成 <code>&lt;div id="foo" class="bar baz"&gt;&lt;/div&gt;</code>
div是可以省略的
<code>#foo

.bar</code>
变成 &lt;div id="foo"&gt;&lt;/div&gt;&lt;div class="bar"&gt;&lt;/div&gt;
<h2>标签文本</h2><code>p wahoo!</code>
就是 <code>&lt;p&gt;wahoo!&lt;/p&gt;</code>
大段文字
<pre><code>p |  foo bar baz |  wesdf sfsdfs</code></pre>
就是 <code>&lt;p&gt;foo bar baz wesdf sfsdsfs&lt;/p&gt;</code>
修改文本中的文字也可以，我们传入对象 {name: 'yuguo', email: me@yuguo.us'} 到编译函数，模板是：

#user #{name} &amp;lt;#{email}&amp;gt;

输出 &lt;div id="user"&gt;yuguo &amp;lt;me@yuguo.us&amp;gt;&lt;/div&gt;

如果就是想输出#{}的话，需要转义：

p \#{something}

嵌套标签中也可以有文本

label

|  username:

input(name='user[name]')

如果标签中只能有文本，比如style和script标签，就不需要|，比如

html

head
title Example

script

if(foo){

bar();

}

大段文本还有一种方法：

p.

foo asdf

sdfsdf

ssdfsdf

sd.

输出

&lt;p&gt;  foo asdf

sdfsdf

ssdfsdf

sd.&lt;/p&gt;

注意p和.之间不能有空格。

最后注意转义：

p.

foo\\bar

输出

&lt;p&gt;foo\bar&lt;/p&gt;
<h2> 注释</h2>
// 注释

输出

&lt;!--  注释  --&gt;

另外一种是不会编译输出的注释

//- 这样的注释不会输出
<h2>块状注释</h2>
缩进即可：

body

//

#content

h1 Example

输出
<pre>&lt;body&gt;

  &lt;!--

  &lt;div id="content"&gt;

    &lt;h1&gt;Example&lt;/h1&gt;

  &lt;/div&gt;

  --&gt;

&lt;/body&gt;</pre>
jade也支持条件注释：
<pre>//if lt IE 8

  script(src='/ie-sucks.js')</pre><pre>输出</pre><pre>&lt;!--[if lt IE 8]&gt;

  &lt;script src="/ie-sucks.js"&gt;&lt;/script&gt;

&lt;![endif]--&gt;</pre><h2>嵌套标签</h2><pre>ul

  li.first

    a(href='#') foo

  li

    a(href='#') bar

  li.last

    a(href='#') baz</pre><h2>过滤器</h2>
过滤器是用引号作为前缀: ，比如 :markdown

body

:markdown

woah! jade _and_ markdown, very **cool**

输出

&lt;body&gt;&lt;p&gt;Woah! jade &lt;em&gt;and&lt;/em&gt; markdown, very &lt;strong&gt;cool&lt;/strong&gt;&lt;/p&gt;&lt;/body&gt;

