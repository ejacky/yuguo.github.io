---
layout: post
title: 使用appfog部署nodejs网站
date: 2013-02-07 21:15
comments: true
categories: [Web App]
---
[Appfog](http://appfog.com)是一个非常不错的PaaS，即平台作为服务，这样作为开发者的我就不需要购买自己的VPS服务器，安装操作系统和软件，时刻关心当机状况了。Paas会替我完成这些底层的服务，我只需要关心自己的软件层即可。

先简单说一下现在比较流行的三类云服务：

* SaaS(软件即服务)
* PaaS(平台即服务)
* IaaS(基础架构即服务)

SasS留给用户的是软件，比如Dropbox就是非常优秀的一个SaaS，我在本机安装Dropbox（当然还有iPad、手机、Mac等）之后，Dropbox中的内容即在云端。

PaaS留给用户的是平台，是可以在上面开发、测试和部署软件的一种平台；这意味着，软件的整个生命周期都可以在PaaS上完成。PaaS通常包括了开发环境、编程语言、编译程序、测试工具和部署机制。本文介绍的Appfog就是一个PaaS。

IaaS的服务则更底层，灵活性更大，适合不知道产品将多流行的创业公司，因为服务器群和CDN可以方便扩充，并且服务还提供了一些安全服务比如防DDOS服务。

我选择了使用Appfog来