---
layout: post
title: 使用git部署站点
date: 2012-08-03 10:18
comments: true
categories: [水]
---
我最开始的时候迁移站点都是傻乎乎的用FTP一个文件一个文件上传，一个wordpress需要半小时，而且容易中断，后来<a href="http://ooxx.me/">damao</a>告诉我用wget这个神器，就发现其实可以通过SSH在服务器端直接做一些操作，速度非常快。
最近一段时间越来越喜欢用git来管理代码，而且代码变化越来越块越来越多，现在的工作流不再合适。因为版本管理和代码部署脱节了——使用git来管理版本，更新了代码之后，还需要其他工具来把代码同步到服务器，这就很冗余了，所以我尝试用git直接把代码push到服务器。
<h2>在服务器上的设置：</h2>
首先需要一个支持SSH的服务器，比如<a href="http://miao.in/">miao.in</a>，在终端中输入命令：
<pre>cd /var/www/yoursite</pre>
<pre>git init .</pre>
<pre>git config receive.denyCurrentBranch ignore git</pre>
<pre>config --bool receive.denyNonFastForwards false</pre>
<pre>cd .git/hooks</pre>
<pre>wget http://utsl.gen.nz/git/post-update</pre>
<pre>chmod +x post-update</pre>
<h2>在本地git中配置：</h2>
<pre>[remote "prod"] url = your-ssh-username@your-host:/var/www/yoursite/.git</pre>
对应的git命令是：
<pre>$ git remote add prod your-ssh-username@your-host:/var/www/yoursite/.git</pre>
这样就算配置完成了，如果要把本地git的代码推送到服务器，命令是：
<pre>$ git push prod master</pre>
master对应你自己的分支的名字就好，prod的意思是product。
<h2>FAQ</h2>
<h4>http://utsl.gen.nz/git/post-update是干嘛的？</h4>
在git的hooks文件夹可以配置一些钩子，这些钩子在git特定操作的时候被触发，post-update就是这样一种钩子，当push发生的时候，它会在远程代码仓库执行操作。所以我们用wget把这个post-update放到本地覆盖。
<h4>我不用git init，而用git clone可以吗？</h4>
没问题，但是还是要完成接下来的配置操作。
<h4>为啥push成功之后，代码没有生效？</h4>
远程的git已经拥有所有的版本信息，但对应的HEAD节点还没有跟当前文档对应，你可以用SSH登录远程服务器之后git checkout master（或者你的分支），之后就无需再次checkout了。
<h4>本地的配置文件跟服务器配置文件不一样，怎么办？</h4>
善用.gitignore。
<h4>还有问题？</h4>
多多使用以下命令来检查git状态：
git status
git log --pretty=oneline
git remote
git branch
还有问题请google、stackoverflow……
最后有问题，请留言。
&nbsp;
