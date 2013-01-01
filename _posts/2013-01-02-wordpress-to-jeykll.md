---
layout: default
title: WordPress迁移到github(jeykll)全攻略
date: 2013-01-02 18:17
comments: true
draft: true
categories: []
---

昨天在WordPress的编辑器里写一篇关于jade语法的文章，因为有很多代码片段，有的需要格式化，有的只是要使用code标签。我在编辑模式和html模式下各种抓狂之后，我决定放弃WordPress，使用github。这样我就可以在我喜欢的编辑器中，用我熟悉的markdown语法来写博客。

迁移需要这样几步工作：

* 先阅读阮一峰的一篇很赞的文章[搭建一个免费的，无限流量的Blog----github Pages和Jekyll入门](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html) 
* 把wordpress的文章导出为静态.md，放在第一步生成的_posts文件夹中
* 对于上一步中产生的所有.md，可能会有一些非法标签，比如<div>这样的。用你的编辑器做一下全局性的搜索和替换
* 处理首页和日志页的样式
* 日志转移和支持（todo）
* 原有博客的路径全部做转向（todo）
* feedburner支持（todo）

最后补充一些资源：
* 了解一下很赞的[makrdown语法](http://wowubuntu.com/markdown/)（todo）
* 顶级域名的绑定（todo）
* 如果希望让一些文章为草稿，在首页不显示，但是可以通过url访问，可以参考[这个问答](https://gist.github.com/2870636)






