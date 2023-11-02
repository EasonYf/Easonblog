---
# 当前页面内容标题
title: HTTP协议简介
# 当前页面图标
icon: write
# 分类
category:
  - 前端
# 标签
tag:
  - 前端
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---

## HTTP协议简介
### 通信：

   - 通信的主体
   - 通信的内容
   - 通信的方式
### 通信协议

- 通信协议是指通信的双方完成通信所必须遵守的规则和约定
### HTTP协议

- HTTP协议即超文本传送协议，它规定了客户端与服务器之间进行网页内容传输时，所必须遵守的传输格式
#### HTTP协议的交互模型

- HTTP协议采用了 请求/响应 的交互模型
## HTTP请求
### HTTP的请求消息

- 由于HTTP协议属于客户端浏览器和服务器之间的通信协议，因此，客户端发起的请求叫做HTTP请求，客户端发送到服务器的消息，叫做HTTP请求消息。
- 注意：HTTP请求消息又叫做HTTP请求报文
### HTTP请求消息的组成部分

- HTTP请求消息由请求行、请求头部、空行和请求体4个部分组成
- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685955484394-b200d637-d00d-455e-9d4d-cfdf5a6507b6.png#averageHue=%23d0d3d0&clientId=uc61f5013-65e9-4&from=paste&height=344&id=uf2fb97f0&originHeight=516&originWidth=1276&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=305543&status=done&style=none&taskId=ud5b710e6-976c-4533-99f5-dd0472c72c5&title=&width=850.6666666666666)
#### 请求行

- 请求行由请求方式、URL和HTTP协议版本3个部分组成，他们之间使用空格隔开

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685955645406-b9a5a9c4-00ba-4909-aadd-c71b25c7486b.png#averageHue=%23f6f7f6&clientId=uc61f5013-65e9-4&from=paste&height=330&id=u2434554d&originHeight=495&originWidth=1055&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=209896&status=done&style=none&taskId=ua6bbe1ef-72e0-4cae-8dfc-414fa054e6f&title=&width=703.3333333333334)
#### 请求头部

- 请求头部用来描述客户端的基本信息，从而把客户端相关的信息告知服务器。
- 请求头部由多行键/值对组成，每行的键和值之间用英文的冒号分隔

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685956225690-5999c68f-a25d-40bf-adef-fc0a552ad224.png#averageHue=%23dcdddb&clientId=uc61f5013-65e9-4&from=paste&height=101&id=ua63dbadd&originHeight=151&originWidth=553&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=42448&status=done&style=none&taskId=u086c9721-d025-4431-98ff-9288169b691&title=&width=368.6666666666667)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685956260113-a8faf8c3-5b42-4d82-b3f4-f87ad1e97dab.png#averageHue=%23bed7ed&clientId=uc61f5013-65e9-4&from=paste&height=498&id=ua0670936&originHeight=747&originWidth=1588&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=477252&status=done&style=none&taskId=udd36aeaa-0b09-499f-b081-f44a33eb43a&title=&width=1058.6666666666667)
#### 空行

- 最后一个请求头字段的后面是一个空行，通知服务器请求头部到此结束
- 请求消息中的空行，用来分隔请求头部与请求体

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685956434394-299ca367-ea0a-4668-9ba2-12fc961bfb11.png#averageHue=%23bec1be&clientId=uc61f5013-65e9-4&from=paste&height=103&id=u55d93e5d&originHeight=154&originWidth=540&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=28205&status=done&style=none&taskId=u6d115b19-300e-48a9-8133-29b7ed30483&title=&width=360)

#### 请求体

- 请求体中存放的，是通过POST方式提交到服务器的数据
- 只有POST有请求体
## HTTP响应
### HTTP响应消息的组成部分

- HTTP响应消息由状态行、响应头部、空行和响应体4个部分组成

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685957004239-1b74aabb-0b48-49a1-bc80-9d5b001c252b.png#averageHue=%23d0d3d0&clientId=uc61f5013-65e9-4&from=paste&height=183&id=uda8928e3&originHeight=274&originWidth=681&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=75306&status=done&style=none&taskId=ubc5f2ff1-09b7-4770-815a-bf77cf1c94c&title=&width=454)
## HTTP请求方法

- HTTP请求方法，属于HTTP协议中的一部分，请求方法的作用是：用来表明要对服务器上资源执行的操作，最常用的请求方法是GET和POST

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685957265070-a724eaaf-f402-498d-bef7-3c5f1232b335.png#averageHue=%23b9d2e8&clientId=uc61f5013-65e9-4&from=paste&height=501&id=uc36b5b5f&originHeight=752&originWidth=1667&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=738429&status=done&style=none&taskId=u2877069e-7408-40a2-ad0b-3b336f9138c&title=&width=1111.3333333333333)
## HTTP响应状态代码

- HTTP响应状态码，属于HTTP协议的一部分，用来标识响应的状态

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685957433468-f720d0bb-1e4f-4cd5-aafa-691075de2377.png#averageHue=%23f8fbf8&clientId=uc61f5013-65e9-4&from=paste&height=295&id=ue9a1b9e7&originHeight=442&originWidth=775&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=197012&status=done&style=none&taskId=u39c686a5-4eea-40a4-8394-fe64b703150&title=&width=516.6666666666666)
### HTTP响应状态码的组成及分类

- HTTP状态码由三个十进制数字组成，第一个十进制数字定义了状态码的类型，后两个数字用来对状态码进行细分，HTTP状态码分为5种类型

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685957604536-46b8fbd0-c078-4187-ade9-ee5b97fb948f.png#averageHue=%23bad3ea&clientId=uc61f5013-65e9-4&from=paste&height=159&id=u828019f0&originHeight=239&originWidth=780&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=101847&status=done&style=none&taskId=ud4438046-1b15-416f-aabd-46448e3370d&title=&width=520)

### `2**`成功相关的响应状态码
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685966440617-ff922877-4079-4686-82ae-0b39c5ccd347.png#averageHue=%23adcae6&clientId=u990adb89-88fe-4&from=paste&height=89&id=uc1f0bade&originHeight=133&originWidth=794&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=66749&status=done&style=none&taskId=u89545124-8c1e-4134-835a-2ad99d0a26a&title=&width=529.3333333333334)
### `3**`重定向相关的响应状态码

- `3**`范围的状态码，表示服务器要求客户端重定向，需要客户端进一步的操作以完成资源的请求。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685966552588-e5fb7b88-b5d8-42d5-a3a3-d7bae5f246c0.png#averageHue=%23b8cee4&clientId=u990adb89-88fe-4&from=paste&height=145&id=ud4c2c724&originHeight=217&originWidth=772&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=131036&status=done&style=none&taskId=u2f6b57ed-7863-4ee1-919d-76119608fa1&title=&width=514.6666666666666)
### `4**`客户端错误相关的响应状态码

- `4**`范围的状态码，表示客户端的请求有非法内容，从而导致这次请求失败

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685966711637-08ea2657-884a-48ce-83e2-8b2f367ff600.png#averageHue=%23c1d7eb&clientId=u990adb89-88fe-4&from=paste&height=191&id=uf8fdc988&originHeight=287&originWidth=779&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=136758&status=done&style=none&taskId=ufaf2a0c8-a14f-42e5-bbc9-335ef3b3f06&title=&width=519.3333333333334)
### `5**`服务器端错误
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685966820358-0442e6fa-d4e9-4165-b7f9-827e50d130ad.png#averageHue=%23b8d0e6&clientId=u990adb89-88fe-4&from=paste&height=309&id=u0993f44a&originHeight=463&originWidth=1552&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=460490&status=done&style=none&taskId=u3af82ebf-56e3-4548-9041-c4c2ee0ee85&title=&width=1034.6666666666667)
