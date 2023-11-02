---
# 当前页面内容标题
title: ajax加强
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


## `XMLHttpRequest`的基本使用
- 概念：`XMLHttpRequest`（简称xhr）是浏览器提供的JavaScript对象，通过它，可以请求服务器上的数据资源。
### 使用xhr发起get请求

- 步骤：
   - 创建xhr对象
   - 调用`xhr.open()`函数
   - 调用`xhr.send()`函数
   - 监听`xhr.onreadystatechange`事件

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685699283460-efa9cb96-b911-4f34-a879-2fc579db2d4e.png#averageHue=%23e1eaf7&clientId=ud7f3b2f1-caba-4&from=paste&height=521&id=ub4258319&originHeight=781&originWidth=1439&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=377251&status=done&style=none&taskId=u8942ff5f-e043-4d35-b01e-c02aff5834c&title=&width=959.3333333333334)
### `readyState`属性

- `XMLHttpRequst`对象的`readyState`属性，用来表示当前Ajax 请求所处的状态，每个Ajax 请求必然处于以下之一：

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685699597988-929cebda-0c76-4f34-996e-d2672da332bf.png#averageHue=%23b9d2e9&clientId=ud7f3b2f1-caba-4&from=paste&height=161&id=u7407a813&originHeight=242&originWidth=745&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=112764&status=done&style=none&taskId=ue468b275-5b18-45f2-9ef0-f171cd9a843&title=&width=496.6666666666667)
### 使用 xhr 发起带参数的 get 请求

- 使用xhr 对象发起带参数的 get 请求，只需在调用 `xhr.open()`期间，为URL地址指定参数即可
```javascript
xhr.open('get','http://www.liulongbin.top:3006/api/getbooks?id=1')
```
### URL编码

- 使用英文符号代替非英文符号
#### `encodeURI()`编码的函数

#### `decodeURI()`解码的函数
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685700449246-698adc52-e416-4862-9895-b986e71e36b0.png#averageHue=%23e0e9f6&clientId=ud7f3b2f1-caba-4&from=paste&height=169&id=u4471efab&originHeight=253&originWidth=1380&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=122917&status=done&style=none&taskId=ud6428386-919d-482c-a60b-cf66700ef5f&title=&width=920)
### 使用 xhr 发起POST请求

- 步骤：
   - 创建 xhr 对象
   - 调用`xhr.open()`函数
   - 设置`Content-Type`属性（固定写法）
   - 调用`xhr.send()`函数，同时指定要发送的数据
   - 监听`xhr.onreadystatechange`事件
   - ![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685700833005-8ac2b172-c247-402f-8211-fc4b4ce69093.png#averageHue=%23dfe8f6&clientId=ud7f3b2f1-caba-4&from=paste&height=520&id=u47042fec&originHeight=780&originWidth=1429&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=400961&status=done&style=none&taskId=ub60e33d2-2325-442f-b683-7912337f5b2&title=&width=952.6666666666666)
## 数据交换格式

- 概念：数据交换格式，就是服务器与客户端之间进行数据传输与交换的格式
### XML

- `XML`为可扩展标记语言

### JSON

- 概念：`JSON`的英文全称是`JavaScript Object Notation`，即JavaScript对象表示法。JSON就是用字符串来表示JavaScript的对象和数组。
#### JSON的两种结构

- 对象结构：对象结构在JSON中表示为`{}`括起来的内容，数据结构为`{key:value,key:value.....}`的键值对结构。其中`key`必须是使用英文的双引号包括起来的字符串，value的数据类型可以是数字、字符串、布尔值、null、数组、对象6种类型。
- 数组结构：数组结构在JSON中表示为`[]`，据类型可以是数字、字符串、布尔值、null、数组、对象6种类型。
- 注意：
   - 属性名必须使用双引号包裹
   - 字符串类型的值必须使用双引号包裹
   - JSON中不允许使用单引号表示字符串
   - JSON中不能写注释
   - JSON的最外层必须是对象或数组格式
   - 不能使用`undefined`或者函数作为JSON的值
- json的作用：在计算机与网络之间存储和传输数据
#### 序列化与反序列化

- 把数据对象转换成字符串的过程，叫做序列化，例如：调用`JSON.stringify()`函数的操作，叫做JSON序列化
- 把字符串转换成数据对象的过程，叫做反序列化，例如：调用`JSON.parse()`函数的操作，叫做JSON反序列化
##  封装`Ajax`函数
```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./js/itheima.js"></script>
  </head>

  <body>
    <script>
      // itheima({
      //   method: 'GET',
      //   url: 'http://www.liulongbin.top:3006/api/getbooks',
      //   data: {
      //     id: 1
      //   },
      //   success: function (res) {
      //     console.log(res)
      //   }
      // })

      itheima({
        method: 'post',
        url: 'http://ajax-base-api-t.itheima.net/api/addbook',
        data: {
          bookname: '重庆科技学院到此一游',
          author: '重庆科技学院-Eason',
          publisher: '重庆科技学院'
        },
        success: function (res) {
          console.log(res)
        }
      })
    </script>
  </body>

</html>
```
```javascript
function resolveData(data) {
  let arr = []

  for(let k in data) {
    arr.push(k + '=' + data[k])
  }

  return arr.join('&')
}

// const ans = resolveData({bookname: '重庆',
// author: '施耐庵',
// publisher: '北京图书出版社'})
//console.log(ans);


function itheima(options) {
  const ans = resolveData(options.data) //获得json字符串
//1.创建 xhr 对象
  const xhr = new XMLHttpRequest()

  if(options.method.toUpperCase() === 'GET') {
    xhr.open('GET',options.url + '?' + ans)
    xhr.send()
  }else if(options.method.toUpperCase() === 'POST'){
    //2.调用open
    xhr.open('POST',options.url + '?' + ans)
      //设置Content-Type属性
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    xhr.send(ans)
  }


//4.调用send

//监听onreadyStatechange事件
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    const result = JSON.parse(xhr.responseText)
    options.success(result)
    //console.log(result)
  }
}
 
}



```
## `XMLHttpRequest Leve2`的新特性
### 设置HTTP请求时限

- 新版本的`XMLHttpRequest`对象，增加了`timeout`属性，可以设置 HTTP 请求的时限
- 语法：`xhr.timeout = 3000`
### `FormData`对象管理表单数据

- Ajax 操作往往用来提交表单数据，为了方便表单处理，HTML5新增了`FormData`对象，可以模拟表单操作
- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685893228010-c85cec47-4738-44e0-ade3-7d0f1cab0a2e.png#averageHue=%23e3edf9&clientId=u3db06f25-64c3-4&from=paste&height=423&id=uae83ea3d&originHeight=635&originWidth=1396&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=269917&status=done&style=none&taskId=u35e683c5-f482-49cb-9217-6597a126afe&title=&width=930.6666666666666)
- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685893740564-1a8ade2a-7fde-4314-82bf-d90655053ddb.png#averageHue=%23e3ecf9&clientId=u3db06f25-64c3-4&from=paste&height=526&id=ubc199bf6&originHeight=789&originWidth=1445&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=389599&status=done&style=none&taskId=uab194d68-ce73-4c57-9398-fad97c146bc&title=&width=963.3333333333334)
### 上传文件

- `XMLHttpRequst`对象，不仅可以发送文本信息，还可以上传文件
- 步骤：
   - 定义 UI 结构
   - 验证是否选择了文件
   - 向`FormData`中追加文件
   - 使用 xhr 发起上传文件的请求
   - 监听`onreadyStatechange`事件
```javascript
//1.获取到文件上传按钮
let btnUpload = document.querySelector('#btnUpload')
//2.为按钮绑定点击事件
btnUpload.addEventListener('click',function () {
  //3.获取到用户选择的文件列表
  let files = document.querySelector('#file1').files
  if(files.length <= 0) {
    return alert('请选择要上传的文件')
  }
  let fd = new FormData()
  //将用户选择的文件,添加到FormData中
  fd.append('avatar',files[0])

  let xhr = new XMLHttpRequest()
  xhr.open('POST','')
  xhr.send(fd)

  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      let data = JSON.parse(xhr.responsetext)
      console.log(data)
    }
  }
})
```
### 显示文件上传进度

- 新版本的`XMLHttpRequest`对象中,可以通过监听`xhr.upload.onprogess`事件,来获取到文件的上传进度
- 语法:![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685895820608-57f95e47-23b2-43b3-97f8-441ae7591f3f.png#averageHue=%23e3edf9&clientId=u3db06f25-64c3-4&from=paste&height=433&id=u26ac960e&originHeight=649&originWidth=1546&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=247910&status=done&style=none&taskId=ubcf36b8b-6320-4c99-9efa-1968895e119&title=&width=1030.6666666666667)
## `jQuery`高级用法
## `axios`

- `Axios`是专注于网络数据请求的库,相比原生的`XMLHttpRequest`对象,`axios`简单易用,相比于`jQuery`,`axios`更加轻量化,只专注于网络数据请求
### `axios`发起 get 请求

- 语法：`axios.get('url',( params : { //参数 })).then(callback)`
- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685934914860-230653c8-1ab8-402b-b34d-2b2e75d2f0cc.png#averageHue=%23e3edf9&clientId=u76eba430-e6c1-4&from=paste&height=325&id=u22ad3b08&originHeight=488&originWidth=1406&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=240825&status=done&style=none&taskId=u618fb40a-d737-4cb7-9e15-42181715de1&title=&width=937.3333333333334)
### `axios`发起 post 请求

- `axios.post('url',( params : { //参数 })).then(callback)`
- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685935174634-f6bfbbfe-7234-493d-9b1f-88cf102b1ef8.png#averageHue=%23e3edf9&clientId=u76eba430-e6c1-4&from=paste&height=320&id=u32d90a62&originHeight=480&originWidth=1400&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=253065&status=done&style=none&taskId=ue21e0031-1258-4e0d-9ca6-773c2fc4ab5&title=&width=933.3333333333334)
### 直接使用`axios`发起请求

- `axios`也提供了类似于`jQuery`中`$.ajax()`的函数
```javascript
axios({
  method:'请求类型',
  url:'请求的URL地址',
  data:{ /* post 数据 */},
  params:{ /*get数据*/ }
}).then(callback)
```
