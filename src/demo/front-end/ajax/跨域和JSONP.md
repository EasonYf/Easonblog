---
# 当前页面内容标题
title: 同源策略和跨域
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


## 同源策略和跨域
### 同源策略

- 同源：如果两个页面的协议、域名和端口都相同则两个页面具有相同的源
- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685946116761-ffa704ff-a411-4f90-8c54-aa5e67e33dd7.png#averageHue=%23b9d2e9&clientId=u0c5b7443-bfaf-4&from=paste&height=293&id=u32b998eb&originHeight=440&originWidth=1541&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=384642&status=done&style=none&taskId=uec6454c7-4548-4a64-a5e8-0595865c3f1&title=&width=1027.3333333333333)
- 同源策略：是浏览器提供的一个安全功能 ，同源策略限制了从同一个源加载的文档或脚本如何与来着另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制
### 跨域

- 概念：同源指的是两个URL的协议、域名、端口一致。反之，则是跨域。
- 出现跨域的根本原因：浏览器的同源策略 不允许非同源的URL之间进行资源交互
#### 浏览器对跨域请求的拦截
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685946610406-dcea5cf4-1447-44ca-a794-e19d02243e02.png#averageHue=%23f0f3f0&clientId=u0c5b7443-bfaf-4&from=paste&height=447&id=u870cf5ab&originHeight=670&originWidth=1630&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=306392&status=done&style=none&taskId=u23bff5e5-e8e1-4fca-a81c-a1def0b30c1&title=&width=1086.6666666666667)

#### 如何实现跨域数据请求

- 实现跨域数据请求，有两种解决方案，分别是`JSONP`和`CORS`
- JSONP:出现早，兼容性好（兼容低版本IE），缺点是只支持GET请求，不支持POST请求
- CORS：出现较晚，是W3C标准，属于跨域Ajax请求的根本解决方案，支持GET和POST请求。
## JSONP 

- `JSONP`是JSON的一种“使用模式”，可用于解决主流浏览器的跨域数据访问问题
### 实现原理

- 由于浏览器同源策略的限制，网页中无法通过Ajax请求非同源的接口数据，但是script标签不受浏览器同源策略的影响，可以通过 src 属性，请求非同源的 js 脚本，因此，`JSONP`的实现原理，就是通过`<script>`标签的src属性，请求跨域的数据接口，并通过函数调用的形式，接受跨域接口响应回来的数据。
```javascript
 <script>
    function abc(data) {
      console.log('拿到了Data数据：')
      console.log(data)
    }
  </script>

  <script src="./js/getdata.js?callback=abc"></script>
```

- 注意：`JSONP`和`Ajax`之间没有任何关系，不能把`JSONP`请求数据的方式叫做`Ajax`，因为`JSONP`没有用到`XMLHttpRequest`这个对象
