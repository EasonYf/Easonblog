---
# 当前页面内容标题
title: ajax表单
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


## `form`表单与模板引擎
### 表单的组成

- 表单标签
- 表单域
- 表单按钮
### `<form>`标签的属性

- `<form>`标签用来采集数据，`<form>`标签的属性则是来用规定如何把采集到的数据发送到服务器

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685589355817-752f49ff-5415-455d-94bc-b955e2b17fc1.png#averageHue=%23b9d5ed&clientId=u305509f4-2998-4&from=paste&height=193&id=u14ce71cb&originHeight=289&originWidth=743&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=96597&status=done&style=none&taskId=ud829c9a3-a5b0-45d8-b4c8-65419c8e81e&title=&width=495.3333333333333)
#### `action`

- `action`属性用来规定当提交表单时，向何处发送表单数据
- `action`属性的值应该是后端提供的一个URL地址，这个URL地址专门负责接受表单提交过来的数据
- 当`<form>`表单在为规定`action`属性的情况下，`action`的默认值为当前页的URL地址

#### `target`

- `target`属性用来规定在何处打开`action URL`

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685589764916-6a738340-496a-4bee-b581-045b8a598be6.png#averageHue=%23bdd8ee&clientId=u305509f4-2998-4&from=paste&height=146&id=u14d235c7&originHeight=219&originWidth=712&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=59358&status=done&style=none&taskId=u2e371ed4-42fa-4812-a6f2-ec544184bfe&title=&width=474.6666666666667)
#### `method`

- `method`属性用来规定以何种方式把表单数据提交到`action URL`
- 默认值为`get`
#### `enctype`

- `enctype`属性用来规定在发送表单数据之前如何对数据进行编码
- 默认值：application/x-www-form-urlencoded，表示在发送前编码所有的字符

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685590345269-40ca3520-9316-4b3e-9e8c-eec60a3feb1d.png#averageHue=%23b2cee7&clientId=u305509f4-2998-4&from=paste&height=237&id=u6271fd7c&originHeight=355&originWidth=1536&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=242473&status=done&style=none&taskId=ue28225b1-dbdd-42d2-b6a4-a08b402900a&title=&width=1024)

- 注意：
   - 在涉及到文件上传的操作时，必须将`enctype`的值设置为`multipart/form-data`
   - 如果表单的提交不涉及到文件上传操作，则直接将`enctype`的值设置为`application/x-www-form-urlencoded`
### 表单的同步提交及缺点

- 通过点击`submit`按钮，触发表单提交的操作，从而使页面跳转到`action URL`的行为，叫做表单的同步提交
- 缺点：
   - `<form>`表单同步提交后，整个页面会发生跳转，跳转到`action URL`地址，用户体验感差。
   - `<form>`表单同步提交后，页面之前的状态和数据会丢失
- 解决：表单只负责收集数据，Ajax负责提交数据

## 通过`Ajax`提交表单数据
### 监听表单提交事件
```javascript
$('#forml').submit(function (e) {
  
})

$('#forml').on('submit',function (e) {
  
})
```
### 阻止表单默认提交行为

- `e.preventDefault()`
### 快速获取表单中的数据

1. `serialize()`函数
   1. 语法：`$(selector).serialize()`
   2. 可以一次性获取到表单中所有的数据
   3. 注意：使用`serialize()`函数快速获取表单数据时，需要给每个表单元素添加`name`属性

## 模板引擎
### 概念

- 可以根据程序员指定的模板结构和数据，自动生成一个完整的HTML页面
- 优势：
   - 减少了字符串的拼接操作
   - 使代码结构更清晰
   - 便于阅读和维护
### `art-template`

- 文档：[http://aui.github.io/art-template/zh-cn/docs/installation.html](http://aui.github.io/art-template/zh-cn/docs/installation.html)
```javascript
<script type="text/html" id = "tpl-user">
      <h1>{{name}}</h1>
  </script>
  <script>
    let data = { name : '朱杰'}
    let ans = template('tpl-user',data)
    console.log(ans);
  </script>
```

### `art-template`标准语法

- `art-template`提供了`{{}}`语法格式，在`{{}}`内可以进行变量输出，或循环数组等操作
#### 标准语法-原文输出

   - `{{@ value}}`
   - 如果要输出的`value`值中，包含了HTML 标签结构，则需要使用原文输出语法，才能保证 HTML 标签被正常渲染

#### 标准语法-条件输出

- 如果要实现条件输出，则可以在`{{}}`中使用`if...else if.../if`的方式，进行按需输出。
- `{{if value}} 按需输出的内容 {{/if}}`  
- `{{if v1}} 按需输出的内容 {{else if v2}} 按需输出的内容 {{/if}}`
#### 标准语法-循环输出

- 如果要实现循环输出， 则可以在`{{}}`内，通过`each`语法循环数组，当前循环的索引使用`$index`进行访问，当前的循环项使用`$value`进行访问
```javascript
{{each arr}}
		{{$index}} {{$value}}
{{/each}}
```
#### 过滤器

- `{{value | filterName}}`
- 过滤器语法类似管道操作符，它的上一个输出作为下一个输入
```javascript
template.defaults.imports.filterName = function(value){//return 处理的结果}
```



### 模板引擎的实现原理
#### 正则与字符串操作
##### `exec()`函数

- `exec()`函数用于检索字符串中正则表达式的匹配
- 如果字符串中有匹配的值，则返回该匹配值，否则返回null
- `RegExpObject.exec(string)`
##### 分组

- 正则表达式中 `()`包起来的内容表示一个分组，可以通过分组来提取自己想要的内容
```javascript
let str = '<div>我是{{name}}</div>'
let pattern = /{{([a-zA-Z]+)}}/

let patternResult = pattern.exec(str)

//得到name 相关的分组信息
//["{{name}}","name",index:7,input:"<div>我是{{name}}</div>",groups:undefined]
```
##### 字符串的`replace`函数

- `replace()`函数用于在字符串中用一些字符替换另一些字符

##### 多次`replace`
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35273604/1685698316886-3197a449-081c-4f36-944c-d0eb44ec76ff.png#averageHue=%23e1eaf7&clientId=u9b834885-cc5a-4&from=paste&height=429&id=ud2e9a23a&originHeight=643&originWidth=1606&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=316552&status=done&style=none&taskId=u1bd54859-2d7a-4f1e-8aa7-b78af699433&title=&width=1070.6666666666667)
