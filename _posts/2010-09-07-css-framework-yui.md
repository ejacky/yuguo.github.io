---
layout: post
title: css框架[2]-YUI
date: 2010-09-07 21:10
comments: true
categories: [CSS]
---
YUI是Yahoo!的一套JavaScript和CSS库，可以建立富交互的web应用程序，并且使得脚本编程、Ajax都变得很容易。现行的YUI有两个版本：YUI2和YUI3。其中YUI2是建立在2006年提出的YUI版本之上的稳定版本，已经有很多站点在采用这个库，并且有良好的文档。而YUI3是新一代的CSS和JavaScript库，可能还不是很全面，但很多地方都是有经验的工程师采用最新的标准制定，值得期待，YUI3同样是有良好文档的。
<em>本文只讨论YUI2的CSS部分</em>。
<h2>YUI CSS框架的组成</h2>
当我提到“框架”这个词的时候你可能会马上正襟危坐或者昏昏欲睡，因为这个词很宏大。就好像《IT Crowd》里面Roy说I have a PLAN的时候Moss马上换上特大号的眼镜，摆好架势准备聆听一个大计划。但其实YUI库的主要部分在于JavaScript，而不是CSS，YUI的CSS部分非常短小精悍。跟oocss一样，基本框架包含4个css文件（下文链接都指向注释良好的官方css文件，如果你需要在项目中引用这些样式文件，请采用有-min后缀的文件，它们是去掉注释的，也可以通过<a href="http://developer.yahoo.com/yui/grids/builder/">YUI grids builder</a>来直接生成代码）：
<a href="http://developer.yahoo.com/yui/build/reset/reset.css">reset.css</a> 这就是所有开发者都知道的Yahoo Reset，用来把所有浏览器的默认样式都重置掉。这几乎已经作为业界标准保存在每个人的代码片段里面，为了节省HTTP请求，我们一般的做法是在自己的style.css头部加上reset代码，就好像新建一个HTTP的时候要粘上一大坨不知道是什么的DOCTYPE，已经是必备流程了。
<a href="http://developer.yahoo.com/yui/build/base/base.css">base.css</a> 为某些元素加上在A级浏览器下显示一致的样式，比如ol里面的列表都加上数字。我认为在reset之后加上base是很有必要的，也会方便很多。但实际操作中往往不会这么做，会在具体的局部样式中再去定义，而不是这种全局的样式定义。
<a href="http://yui.yahooapis.com/2.8.1/build/fonts/fonts.css" target="_blank">fonts.css</a> 这是非常有意思的一个样式，它定义文字的大小和字体。
<a href="http://yui.yahooapis.com/2.8.1/build/grids/grids.css">grids.css</a> 用来布局，也是争议最大的一个样式表。
<h2>YUI CSS的特点</h2>
<h3>1.兼容标准模式和怪癖模式</h3>
这就是YUI的最大优点：超级稳定，在多重嵌套下也能正常工作。在各种操作系统的各种浏览器下显示一致。比如说fonts.css，设置了字体为13px（BTW，根据YT哥的说法，有的中文字体在IE下不支持13px），但IE6和7的字体实际上是13.333px，所以呢，在grids.css里面通过em来设定宽度的时候，就会出现这样的代码：
<pre>#custom-doc {
	margin:auto;text-align:left; /* leave unchanged */
	width:46.15em;/* non-IE */
	*width:45.00em;/* IE */
	min-width:600px;/* optional but recommended */
}</pre>
这就是雅虎工程师的严谨之处。
另外内容居中也是兼容怪癖模式和标准模式的，同时有“margin:0 auto;”和"text-align:center"两种方法。
<h3>2.用em和百分比做宽度，可以很好的缩放</h3>
雅虎的说法是用em做宽度单位可以随着用户缩放字体而随之缩放宽度，而实际上我用IE7+、FF、Chrome都没有测出px和em的区别，二者都可以很好地随着文字缩放而缩放grid。根据Ghost哥的说法，IE6会有区别，我木有原生IE6，这一点又无法求证了。
用百分比做content宽度已经在oocss中见识到了，非常灵活。比如Yahoo!的首页，去掉最外面的宽度设定之后，页面就变成自适应布局了，赞。
[caption id="attachment_178" align="aligncenter"  caption="基于百分数的布局"]<a href="http://yuguo.us/files/2010/09/2010-9-7-20-13-31.jpg"><img class="size-full wp-image-178" title="基于百分数的布局" src="http://yuguo.us/files/2010/09/2010-9-7-20-13-31.jpg" alt="基于百分数的布局"   /></a>[/caption]
<h3>3.<span style="font-weight: normal; font-size: 13px;"><a href="http://developer.yahoo.com/yui/grids/builder/">YUI grids builder</a></span></h3>
YUI grids builder是一个自动生成代码工具（web APP），通过调整一个工具栏里面的预设值，能输出对应的代码，这个工具十分方便，但是由于YUI可选的布局选项很少，所以没有发挥出原本可以的更强大功能来。团队内部框架或者oocss都可以从这里有所借鉴。
[caption id="attachment_182" align="aligncenter"  caption="YUI grids builder"]<a href="http://yuguo.us/files/2010/09/2010-9-6-20-47-09-copy.png"><img class="size-full wp-image-182" title="YUI grids builder" src="http://yuguo.us/files/2010/09/2010-9-6-20-47-09-copy.png" alt="YUI grids builder"   /></a>[/caption]
<h3>4.与ARIA Landmark Roles结合</h3>
YUI用非语义化的类名和ID名来布局，同时为了给读屏器提供更好的语义化，YUI会提供AIRA标记，来表明这一块的功能（BTW，从很久以前起的WordPress的默认主题也有role属性，当时我还为了通过验证而把这些东西删了）：
<pre>   &lt;div id="hd" role="banner"&gt;&lt;h1&gt;Header&lt;/h1&gt;&lt;/div&gt;
   &lt;div id="bd" role="main"&gt;
	&lt;div id="yui-main"&gt;
	&lt;div class="yui-b"&gt;&lt;div class="yui-g"&gt;
	&lt;!-- YOUR DATA GOES HERE --&gt;
	&lt;/div&gt;
        &lt;/div&gt;</pre>
<pre>	&lt;/div&gt;
	&lt;div class="yui-b"&gt;&lt;!-- YOUR NAVIGATION GOES HERE --&gt;&lt;/div&gt;
   &lt;/div&gt;
   &lt;div id="ft" role="contentinfo"&gt;&lt;p&gt;Footer&lt;/p&gt;&lt;/div&gt;</pre>
<h2>为什么我说YUI CSS不实用</h2>
<h3>1.不方便</h3>
即使有<a href="http://developer.yahoo.com/yui/grids/builder/">YUI grids builder</a>这种强力工具，用YUI布局还是非常不方便的，因为要记住很多非语义化的标签：
预设固定宽度布局：
<table style="border-collapse: separate; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; font-size: inherit; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: initial; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: none; border-top-color: #666666; border-right-color: #666666; border-bottom-color: #666666; border-left-color: initial;" border="1" cellspacing="3" cellpadding="3">
<tbody>
<tr class="odd" style="background-color: #ffffff;">
<th style="font-style: normal; font-weight: bold; text-align: left; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #b6cde1; color: #ffffff; vertical-align: top; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; background-position: initial initial; background-repeat: initial initial; padding: 0.35em; margin: 0px;">Template Class</th>
<th style="font-style: normal; font-weight: bold; text-align: left; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #b6cde1; color: #ffffff; vertical-align: top; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; background-position: initial initial; background-repeat: initial initial; padding: 0.35em; margin: 0px;">Preset Description</th>
<th style="font-style: normal; font-weight: bold; text-align: left; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #b6cde1; color: #ffffff; vertical-align: top; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; background-position: initial initial; background-repeat: initial initial; padding: 0.35em; margin: 0px;">Example</th>
</tr>
<tr style="background-color: #dddddd;">
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><code style="font-style: normal; font-weight: bolder; font-family: 'Courier New'; line-height: 13px; font-size: 13px; padding: 0px; margin: 0px;">.yui-t1</code></td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;">160 on left</td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><a style="color: #0000de;" href="http://developer.yahoo.com/yui/examples/grids/grids-t1.html">Example</a></td>
</tr>
<tr class="odd" style="background-color: #ffffff;">
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><code style="font-style: normal; font-weight: bolder; font-family: 'Courier New'; line-height: 13px; font-size: 13px; padding: 0px; margin: 0px;">.yui-t2</code></td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;">180 on left</td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><a style="color: #0000de;" href="http://developer.yahoo.com/yui/examples/grids/grids-t2.html">Example</a></td>
</tr>
<tr style="background-color: #dddddd;">
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><code style="font-style: normal; font-weight: bolder; font-family: 'Courier New'; line-height: 13px; font-size: 13px; padding: 0px; margin: 0px;">.yui-t3</code></td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;">300 on left</td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><a style="color: #663399;" href="http://developer.yahoo.com/yui/examples/grids/grids-t3.html">Example</a></td>
</tr>
<tr class="odd" style="background-color: #ffffff;">
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><code style="font-style: normal; font-weight: bolder; font-family: 'Courier New'; line-height: 13px; font-size: 13px; padding: 0px; margin: 0px;">.yui-t4</code></td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;">180 on right</td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><a style="color: #663399;" href="http://developer.yahoo.com/yui/examples/grids/grids-t4.html">Example</a></td>
</tr>
<tr style="background-color: #dddddd;">
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><code style="font-style: normal; font-weight: bolder; font-family: 'Courier New'; line-height: 13px; font-size: 13px; padding: 0px; margin: 0px;">.yui-t5</code></td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;">240 on right</td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><a style="color: #663399;" href="http://developer.yahoo.com/yui/examples/grids/grids-t5.html">Example</a></td>
</tr>
<tr class="odd" style="background-color: #ffffff;">
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><code style="font-style: normal; font-weight: bolder; font-family: 'Courier New'; line-height: 13px; font-size: 13px; padding: 0px; margin: 0px;">.yui-t6</code></td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;">300 on right</td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><a style="color: #663399;" href="http://developer.yahoo.com/yui/examples/grids/grids-t6.html">Example</a></td>
</tr>
</tbody>
</table>
百分比布局：
<div id="_mcePaste">
<span style="font-family: arial, helvetica, clean, sans-serif; line-height: 16px;"> </span>
<table style="border-collapse: separate; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; font-size: inherit; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: initial; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: none; border-top-color: #666666; border-right-color: #666666; border-bottom-color: #666666; border-left-color: initial;" border="1" cellspacing="3" cellpadding="3">
<tbody>
<tr class="odd" style="background-color: #ffffff;">
<th style="font-style: normal; font-weight: bold; text-align: left; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #b6cde1; color: #ffffff; vertical-align: top; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; background-position: initial initial; background-repeat: initial initial; padding: 0.35em; margin: 0px;">Special Grid Class</th>
<th style="font-style: normal; font-weight: bold; text-align: left; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #b6cde1; color: #ffffff; vertical-align: top; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; background-position: initial initial; background-repeat: initial initial; padding: 0.35em; margin: 0px;">Description</th>
<th style="font-style: normal; font-weight: bold; text-align: left; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #b6cde1; color: #ffffff; vertical-align: top; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; background-position: initial initial; background-repeat: initial initial; padding: 0.35em; margin: 0px;">Example</th>
</tr>
<tr style="background-color: #dddddd;">
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><code style="font-style: normal; font-weight: bolder; font-family: 'Courier New'; line-height: 13px; font-size: 13px; padding: 0px; margin: 0px;">.yui-gb</code></td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;">1/3 - 1/3 - 1/3</td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><a style="color: #0000de;" href="http://developer.yahoo.com/yui/examples/grids/grids-gb.html">Example</a></td>
</tr>
<tr class="odd" style="background-color: #ffffff;">
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><code style="font-style: normal; font-weight: bolder; font-family: 'Courier New'; line-height: 13px; font-size: 13px; padding: 0px; margin: 0px;">.yui-gc</code></td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;">2/3 - 1/3</td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><a style="color: #663399;" href="http://developer.yahoo.com/yui/examples/grids/grids-gc.html">Example</a></td>
</tr>
<tr style="background-color: #dddddd;">
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><code style="font-style: normal; font-weight: bolder; font-family: 'Courier New'; line-height: 13px; font-size: 13px; padding: 0px; margin: 0px;">.yui-gd</code></td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;">1/3 - 2/3</td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><a style="color: #0000de;" href="http://developer.yahoo.com/yui/examples/grids/grids-gd.html">Example</a></td>
</tr>
<tr class="odd" style="background-color: #ffffff;">
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><code style="font-style: normal; font-weight: bolder; font-family: 'Courier New'; line-height: 13px; font-size: 13px; padding: 0px; margin: 0px;">.yui-ge</code></td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;">3/4 - 1/4</td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><a style="color: #0000de;" href="http://developer.yahoo.com/yui/examples/grids/grids-ge.html">Example</a></td>
</tr>
<tr style="background-color: #dddddd;">
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><code style="font-style: normal; font-weight: bolder; font-family: 'Courier New'; line-height: 13px; font-size: 13px; padding: 0px; margin: 0px;">.yui-gf</code></td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;">1/4 - 3/4</td>
<td style="border-top-width: 1px; border-top-style: solid; border-top-color: #666666; border-left-width: 1px; border-left-style: solid; border-left-color: #666666; vertical-align: top; padding: 0.35em; margin: 0px;"><a style="color: #0000de;" href="http://developer.yahoo.com/yui/examples/grids/grids-gf.html">Example</a></td>
</tr>
</tbody>
</table>
代码里面一堆这种类名难道不是一个抓狂的理由吗？
[caption id="attachment_180" align="aligncenter"  caption="table布局"]<a href="http://yuguo.us/files/2010/09/2010-9-6-20-47-34.png"><img class="size-full wp-image-180" title="table布局" src="http://yuguo.us/files/2010/09/2010-9-6-20-47-34.png" alt="table布局"   /></a>[/caption]
还不如table布局简单呢。
<h3>2.不灵活</h3>
雅虎的工程师基于IAB的<a href="http://www.iab.net/iab_products_and_industry_services/1421/1443/1452">一个理论</a>，希望推广“对于广告尺寸限定18个标准单位”这个活动，他们认为标准的设计框架中边栏最好是160px、180px、300px这三个数字，于是在它的代码预设中限定了这三个宽度。我们当然可以更改这个宽度，可是完全没有oocss方便，至少不是改一个数字就可以解决的事情。
相比之下，oocss的优点就很明显了：1.可自行设定边栏浮动方向和宽度，主内容区域会自行伸缩 2.container（YUI里叫grid）命名更加理性好记，是size1of3或者size2of5的，即使没有cheetsheet也可以轻松在Firebug中修改。
在YUI3中，雅虎团队去掉了grids.css，仍然保留着其他三个样式（reset，base，fonts），也许他们也意识到现有grids的不完美之处，相信他们一定能做的更好。
