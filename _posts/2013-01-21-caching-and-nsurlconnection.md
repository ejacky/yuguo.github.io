---
layout: post
title: 缓存和NSURLConnection
date: 2013-01-21 00:35
comments: true
categories: [iOS]
---

创建NSURLConnection的时候如果使用默认的缓存策略，就是`NSURLRequestUseProtocolCachePolicy`，使用协议的缓存策略。

也就是说在你的APP中的连接所请求的Web内容会根据协议（HTTP）头来进行缓存：

* 如果你的头中带了`Expires`字段，APP会认为不需要在时间到期之前向服务器请求文件是否合法，它直接调用缓存的内容；
* 如果你的头中带了`Cache-Control: max-age`，APP会在每次请求内容之前询问服务器内容是否修改，如果修改了，APP重新请求内容，如果没有修改，APP调用缓存里的内容；
* 如果你的头中没有`Expires`和`Cache-Control: max-age`，APP会*自动把内容缓存相当长的时间*

所以最佳实践是：

* 如果你可以控制HTTP头，那么请使用HTTP头来控制APP中Web内容的缓存策略，这是最好的方法；
* 如果你不可以控制HTTP头，比如第三方的API等，那么你可能会被默认的超长缓存时间困扰，解决办法是在APP中进行条件判断，具体代码见参考资料中最后一节。

参考资料：[Caching and NSURLConnection](http://blackpixel.com/blog/2012/05/caching-and-nsurlconnection.html)