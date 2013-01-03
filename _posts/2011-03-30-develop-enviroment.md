---
layout: post
title: 折腾开发环境
date: 2011-03-30 17:55
comments: true
categories: [默认]
---
今天终于被搞爆发了，与代码无关，纯折腾。
<ol>
	<li>公司的安全部门会给IE浏览器加上自动代理，此代理会让IETester崩溃，会让新版Opera无法被Fiddler抓包。</li>
	<li>Fiddler无限抽风，抓的了一部分抓不了另一部分，而且反应奇慢，完全不可控。</li>
</ol>
然后问<a href="http://code.sh/">大猫</a>他是怎么代理服务器和本地的。总结如下：
服务器简单，直接修改hosts文件。
本地的话，要用到Apache。
1.先给hosts加本地host和其他所有需要调试的服务器的host，全部注释，到时候希望用哪个IP就取消哪个的注释：
<pre>#127.0.0.1 ctc.imgcache.qq.com等等要转的CDN
#172.25.32.141 ctc.imgcache.qq.com等等要转的CDN</pre>
2.然后，开启Apache的一些代理模块，修改httpd.conf：
<pre>LoadModule negotiation_module modules/mod_negotiation.so
LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_ajp_module modules/mod_proxy_ajp.so
LoadModule proxy_balancer_module modules/mod_proxy_balancer.so
LoadModule proxy_connect_module modules/mod_proxy_connect.so
LoadModule proxy_ftp_module modules/mod_proxy_ftp.so
LoadModule proxy_http_module modules/mod_proxy_http.so
LoadModule negotiation_module modules/mod_negotiation.soLoadModule proxy_module modules/mod_proxy.soLoadModule proxy_ajp_module modules/mod_proxy_ajp.soLoadModule proxy_balancer_module modules/mod_proxy_balancer.soLoadModule proxy_connect_module modules/mod_proxy_connect.soLoadModule proxy_ftp_module modules/mod_proxy_ftp.soLoadModule proxy_http_module modules/mod_proxy_http.so</pre>
前面的#（默认有）全部去掉。
3.最后，在文件最后加上
<pre>&lt;virtualhost *&gt;
ServerName imgcache.qq.com
ProxyPreserveHost On
ErrorLog "E:\error_log"
##qzone_v5
DocumentRoot "E:\Qzone SVN\branch"
ProxyPass /qzonestyle !
ProxyPass / http://172.25.32.141/
&lt;/virtualhost&gt;</pre>
这样，当要本地调试文件的时候就用host转到本地，然后Apache接管，然后Apache侦测到qzonestyle这样的关键词的时候，就转向到本地目录E:\Qzone之类的。
注意：DocumentRoot和Directory要改成你的本地文件夹盘，而不是Apache所在盘。
DocumentRoot "E:\Qzone SVN\branch"
&lt;Directory "E:\Qzone SVN\branch"&gt;
速度很快~
另外SVN无限拉分支我疯了快，怎么那么多版本！
