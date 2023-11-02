<template><div><h2 id="http协议简介" tabindex="-1"><a class="header-anchor" href="#http协议简介" aria-hidden="true">#</a> HTTP协议简介</h2>
<h3 id="通信" tabindex="-1"><a class="header-anchor" href="#通信" aria-hidden="true">#</a> 通信：</h3>
<ul>
<li>通信的主体</li>
<li>通信的内容</li>
<li>通信的方式</li>
</ul>
<h3 id="通信协议" tabindex="-1"><a class="header-anchor" href="#通信协议" aria-hidden="true">#</a> 通信协议</h3>
<ul>
<li>通信协议是指通信的双方完成通信所必须遵守的规则和约定</li>
</ul>
<h3 id="http协议" tabindex="-1"><a class="header-anchor" href="#http协议" aria-hidden="true">#</a> HTTP协议</h3>
<ul>
<li>HTTP协议即超文本传送协议，它规定了客户端与服务器之间进行网页内容传输时，所必须遵守的传输格式</li>
</ul>
<h4 id="http协议的交互模型" tabindex="-1"><a class="header-anchor" href="#http协议的交互模型" aria-hidden="true">#</a> HTTP协议的交互模型</h4>
<ul>
<li>HTTP协议采用了 请求/响应 的交互模型</li>
</ul>
<h2 id="http请求" tabindex="-1"><a class="header-anchor" href="#http请求" aria-hidden="true">#</a> HTTP请求</h2>
<h3 id="http的请求消息" tabindex="-1"><a class="header-anchor" href="#http的请求消息" aria-hidden="true">#</a> HTTP的请求消息</h3>
<ul>
<li>由于HTTP协议属于客户端浏览器和服务器之间的通信协议，因此，客户端发起的请求叫做HTTP请求，客户端发送到服务器的消息，叫做HTTP请求消息。</li>
<li>注意：HTTP请求消息又叫做HTTP请求报文</li>
</ul>
<h3 id="http请求消息的组成部分" tabindex="-1"><a class="header-anchor" href="#http请求消息的组成部分" aria-hidden="true">#</a> HTTP请求消息的组成部分</h3>
<ul>
<li>HTTP请求消息由请求行、请求头部、空行和请求体4个部分组成</li>
<li><img src="https://cdn.nlark.com/yuque/0/2023/png/35273604/1685955484394-b200d637-d00d-455e-9d4d-cfdf5a6507b6.png#averageHue=%23d0d3d0&amp;clientId=uc61f5013-65e9-4&amp;from=paste&amp;height=344&amp;id=uf2fb97f0&amp;originHeight=516&amp;originWidth=1276&amp;originalType=binary&amp;ratio=1.5&amp;rotation=0&amp;showTitle=false&amp;size=305543&amp;status=done&amp;style=none&amp;taskId=ud5b710e6-976c-4533-99f5-dd0472c72c5&amp;title=&amp;width=850.6666666666666" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></li>
</ul>
<h4 id="请求行" tabindex="-1"><a class="header-anchor" href="#请求行" aria-hidden="true">#</a> 请求行</h4>
<ul>
<li>请求行由请求方式、URL和HTTP协议版本3个部分组成，他们之间使用空格隔开</li>
</ul>
<figure><img src="https://cdn.nlark.com/yuque/0/2023/png/35273604/1685955645406-b9a5a9c4-00ba-4909-aadd-c71b25c7486b.png#averageHue=%23f6f7f6&amp;clientId=uc61f5013-65e9-4&amp;from=paste&amp;height=330&amp;id=u2434554d&amp;originHeight=495&amp;originWidth=1055&amp;originalType=binary&amp;ratio=1.5&amp;rotation=0&amp;showTitle=false&amp;size=209896&amp;status=done&amp;style=none&amp;taskId=ua6bbe1ef-72e0-4cae-8dfc-414fa054e6f&amp;title=&amp;width=703.3333333333334" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h4 id="请求头部" tabindex="-1"><a class="header-anchor" href="#请求头部" aria-hidden="true">#</a> 请求头部</h4>
<ul>
<li>请求头部用来描述客户端的基本信息，从而把客户端相关的信息告知服务器。</li>
<li>请求头部由多行键/值对组成，每行的键和值之间用英文的冒号分隔</li>
</ul>
<p><img src="https://cdn.nlark.com/yuque/0/2023/png/35273604/1685956225690-5999c68f-a25d-40bf-adef-fc0a552ad224.png#averageHue=%23dcdddb&amp;clientId=uc61f5013-65e9-4&amp;from=paste&amp;height=101&amp;id=ua63dbadd&amp;originHeight=151&amp;originWidth=553&amp;originalType=binary&amp;ratio=1.5&amp;rotation=0&amp;showTitle=false&amp;size=42448&amp;status=done&amp;style=none&amp;taskId=u086c9721-d025-4431-98ff-9288169b691&amp;title=&amp;width=368.6666666666667" alt="image.png" loading="lazy">
<img src="https://cdn.nlark.com/yuque/0/2023/png/35273604/1685956260113-a8faf8c3-5b42-4d82-b3f4-f87ad1e97dab.png#averageHue=%23bed7ed&amp;clientId=uc61f5013-65e9-4&amp;from=paste&amp;height=498&amp;id=ua0670936&amp;originHeight=747&amp;originWidth=1588&amp;originalType=binary&amp;ratio=1.5&amp;rotation=0&amp;showTitle=false&amp;size=477252&amp;status=done&amp;style=none&amp;taskId=udd36aeaa-0b09-499f-b081-f44a33eb43a&amp;title=&amp;width=1058.6666666666667" alt="image.png" loading="lazy"></p>
<h4 id="空行" tabindex="-1"><a class="header-anchor" href="#空行" aria-hidden="true">#</a> 空行</h4>
<ul>
<li>最后一个请求头字段的后面是一个空行，通知服务器请求头部到此结束</li>
<li>请求消息中的空行，用来分隔请求头部与请求体</li>
</ul>
<figure><img src="https://cdn.nlark.com/yuque/0/2023/png/35273604/1685956434394-299ca367-ea0a-4668-9ba2-12fc961bfb11.png#averageHue=%23bec1be&amp;clientId=uc61f5013-65e9-4&amp;from=paste&amp;height=103&amp;id=u55d93e5d&amp;originHeight=154&amp;originWidth=540&amp;originalType=binary&amp;ratio=1.5&amp;rotation=0&amp;showTitle=false&amp;size=28205&amp;status=done&amp;style=none&amp;taskId=u6d115b19-300e-48a9-8133-29b7ed30483&amp;title=&amp;width=360" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h4 id="请求体" tabindex="-1"><a class="header-anchor" href="#请求体" aria-hidden="true">#</a> 请求体</h4>
<ul>
<li>请求体中存放的，是通过POST方式提交到服务器的数据</li>
<li>只有POST有请求体</li>
</ul>
<h2 id="http响应" tabindex="-1"><a class="header-anchor" href="#http响应" aria-hidden="true">#</a> HTTP响应</h2>
<h3 id="http响应消息的组成部分" tabindex="-1"><a class="header-anchor" href="#http响应消息的组成部分" aria-hidden="true">#</a> HTTP响应消息的组成部分</h3>
<ul>
<li>HTTP响应消息由状态行、响应头部、空行和响应体4个部分组成</li>
</ul>
<figure><img src="https://cdn.nlark.com/yuque/0/2023/png/35273604/1685957004239-1b74aabb-0b48-49a1-bc80-9d5b001c252b.png#averageHue=%23d0d3d0&amp;clientId=uc61f5013-65e9-4&amp;from=paste&amp;height=183&amp;id=uda8928e3&amp;originHeight=274&amp;originWidth=681&amp;originalType=binary&amp;ratio=1.5&amp;rotation=0&amp;showTitle=false&amp;size=75306&amp;status=done&amp;style=none&amp;taskId=ubc5f2ff1-09b7-4770-815a-bf77cf1c94c&amp;title=&amp;width=454" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h2 id="http请求方法" tabindex="-1"><a class="header-anchor" href="#http请求方法" aria-hidden="true">#</a> HTTP请求方法</h2>
<ul>
<li>HTTP请求方法，属于HTTP协议中的一部分，请求方法的作用是：用来表明要对服务器上资源执行的操作，最常用的请求方法是GET和POST</li>
</ul>
<figure><img src="https://cdn.nlark.com/yuque/0/2023/png/35273604/1685957265070-a724eaaf-f402-498d-bef7-3c5f1232b335.png#averageHue=%23b9d2e8&amp;clientId=uc61f5013-65e9-4&amp;from=paste&amp;height=501&amp;id=uc36b5b5f&amp;originHeight=752&amp;originWidth=1667&amp;originalType=binary&amp;ratio=1.5&amp;rotation=0&amp;showTitle=false&amp;size=738429&amp;status=done&amp;style=none&amp;taskId=u2877069e-7408-40a2-ad0b-3b336f9138c&amp;title=&amp;width=1111.3333333333333" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h2 id="http响应状态代码" tabindex="-1"><a class="header-anchor" href="#http响应状态代码" aria-hidden="true">#</a> HTTP响应状态代码</h2>
<ul>
<li>HTTP响应状态码，属于HTTP协议的一部分，用来标识响应的状态</li>
</ul>
<figure><img src="https://cdn.nlark.com/yuque/0/2023/png/35273604/1685957433468-f720d0bb-1e4f-4cd5-aafa-691075de2377.png#averageHue=%23f8fbf8&amp;clientId=uc61f5013-65e9-4&amp;from=paste&amp;height=295&amp;id=ue9a1b9e7&amp;originHeight=442&amp;originWidth=775&amp;originalType=binary&amp;ratio=1.5&amp;rotation=0&amp;showTitle=false&amp;size=197012&amp;status=done&amp;style=none&amp;taskId=u39c686a5-4eea-40a4-8394-fe64b703150&amp;title=&amp;width=516.6666666666666" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h3 id="http响应状态码的组成及分类" tabindex="-1"><a class="header-anchor" href="#http响应状态码的组成及分类" aria-hidden="true">#</a> HTTP响应状态码的组成及分类</h3>
<ul>
<li>HTTP状态码由三个十进制数字组成，第一个十进制数字定义了状态码的类型，后两个数字用来对状态码进行细分，HTTP状态码分为5种类型</li>
</ul>
<figure><img src="https://cdn.nlark.com/yuque/0/2023/png/35273604/1685957604536-46b8fbd0-c078-4187-ade9-ee5b97fb948f.png#averageHue=%23bad3ea&amp;clientId=uc61f5013-65e9-4&amp;from=paste&amp;height=159&amp;id=u828019f0&amp;originHeight=239&amp;originWidth=780&amp;originalType=binary&amp;ratio=1.5&amp;rotation=0&amp;showTitle=false&amp;size=101847&amp;status=done&amp;style=none&amp;taskId=ud4438046-1b15-416f-aabd-46448e3370d&amp;title=&amp;width=520" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h3 id="_2-成功相关的响应状态码" tabindex="-1"><a class="header-anchor" href="#_2-成功相关的响应状态码" aria-hidden="true">#</a> <code v-pre>2**</code>成功相关的响应状态码</h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2023/png/35273604/1685966440617-ff922877-4079-4686-82ae-0b39c5ccd347.png#averageHue=%23adcae6&amp;clientId=u990adb89-88fe-4&amp;from=paste&amp;height=89&amp;id=uc1f0bade&amp;originHeight=133&amp;originWidth=794&amp;originalType=binary&amp;ratio=1.5&amp;rotation=0&amp;showTitle=false&amp;size=66749&amp;status=done&amp;style=none&amp;taskId=u89545124-8c1e-4134-835a-2ad99d0a26a&amp;title=&amp;width=529.3333333333334" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h3 id="_3-重定向相关的响应状态码" tabindex="-1"><a class="header-anchor" href="#_3-重定向相关的响应状态码" aria-hidden="true">#</a> <code v-pre>3**</code>重定向相关的响应状态码</h3>
<ul>
<li><code v-pre>3**</code>范围的状态码，表示服务器要求客户端重定向，需要客户端进一步的操作以完成资源的请求。</li>
</ul>
<figure><img src="https://cdn.nlark.com/yuque/0/2023/png/35273604/1685966552588-e5fb7b88-b5d8-42d5-a3a3-d7bae5f246c0.png#averageHue=%23b8cee4&amp;clientId=u990adb89-88fe-4&amp;from=paste&amp;height=145&amp;id=ud4c2c724&amp;originHeight=217&amp;originWidth=772&amp;originalType=binary&amp;ratio=1.5&amp;rotation=0&amp;showTitle=false&amp;size=131036&amp;status=done&amp;style=none&amp;taskId=u2f6b57ed-7863-4ee1-919d-76119608fa1&amp;title=&amp;width=514.6666666666666" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h3 id="_4-客户端错误相关的响应状态码" tabindex="-1"><a class="header-anchor" href="#_4-客户端错误相关的响应状态码" aria-hidden="true">#</a> <code v-pre>4**</code>客户端错误相关的响应状态码</h3>
<ul>
<li><code v-pre>4**</code>范围的状态码，表示客户端的请求有非法内容，从而导致这次请求失败</li>
</ul>
<figure><img src="https://cdn.nlark.com/yuque/0/2023/png/35273604/1685966711637-08ea2657-884a-48ce-83e2-8b2f367ff600.png#averageHue=%23c1d7eb&amp;clientId=u990adb89-88fe-4&amp;from=paste&amp;height=191&amp;id=uf8fdc988&amp;originHeight=287&amp;originWidth=779&amp;originalType=binary&amp;ratio=1.5&amp;rotation=0&amp;showTitle=false&amp;size=136758&amp;status=done&amp;style=none&amp;taskId=ufaf2a0c8-a14f-42e5-bbc9-335ef3b3f06&amp;title=&amp;width=519.3333333333334" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h3 id="_5-服务器端错误" tabindex="-1"><a class="header-anchor" href="#_5-服务器端错误" aria-hidden="true">#</a> <code v-pre>5**</code>服务器端错误</h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2023/png/35273604/1685966820358-0442e6fa-d4e9-4165-b7f9-827e50d130ad.png#averageHue=%23b8d0e6&amp;clientId=u990adb89-88fe-4&amp;from=paste&amp;height=309&amp;id=u0993f44a&amp;originHeight=463&amp;originWidth=1552&amp;originalType=binary&amp;ratio=1.5&amp;rotation=0&amp;showTitle=false&amp;size=460490&amp;status=done&amp;style=none&amp;taskId=u3af82ebf-56e3-4548-9041-c4c2ee0ee85&amp;title=&amp;width=1034.6666666666667" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
</div></template>


