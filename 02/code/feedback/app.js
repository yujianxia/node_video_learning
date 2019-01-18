// app application 应用程序
// 把当前模块所有的依赖项都声明再文件模块最上面
// 为了让目录结构保持统一清晰，所以我们约定，把所有的 HTML 文件都放到 views（视图） 目录中
// 我们为了方便的统一处理这些静态资源，所以我们约定把所有的静态资源都存放在 public 目录中
// 哪些资源能被用户访问，哪些资源不能被用户访问，我现在可以通过代码来进行非常灵活的控制
// / index.html
// /public 整个 public 目录中的资源都允许被访问
// 前后端融会贯通了，为所欲为

let http = require('http');
let fs = require('fs');
let url = require('url');
var template = require('art-template')

var comments = [
  {
    name: '艾弗森1',
    message: "今天的天气很好",
    dateTime: "2019-01-01"

  }, {
    name: '艾弗森2',
    message: "今天的天气很好",
    dateTime: "2019-01-01"

  }, {
    name: '艾弗森3',
    message: "今天的天气很好",
    dateTime: "2019-01-01"

  }, {
    name: '艾弗森4',
    message: "今天的天气很好",
    dateTime: "2019-01-01"

  }, {
    name: '艾弗森5',
    message: "今天的天气很好",
    dateTime: "2019-01-01"

  }, {
    name: '艾弗森6',
    message: "今天的天气很好",
    dateTime: "2019-01-01"

  },
];


// /pinglun?name=的撒的撒&message=的撒的撒的撒
// 对于这种表单提交的请求路径，由于其中具有用户动态填写的内容
// 所以你不可能通过去判断完整的 url 路径来处理这个请求
// 
// 结论：对于我们来讲，其实只需要判定，如果你的请求路径是 /pinglun 的时候，那我就认为你提交表单的请求过来了



// 创建服务
http.createServer(function (req, res) {
  // 使用 url.parse 方法将路径解析为一个方便操作的对象，第二个参数为 true 表示直接将查询字符串转为一个对象（通过 query 属性来访问）
  var parseObj = url.parse(req.url, true)

  // 单独获取不包含查询字符串的路径部分（该路径不包含 ? 之后的内容）
  var path_name = parseObj.pathname;
  if (path_name === '/') {
    fs.readFile('./views/index.html', function (err, data) {
      if (err) {
        return res.end('4014 Not Found')
      }
      var htmlStr = template.render(data.toString(), {
        comments: comments
      })
      res.end(htmlStr);
    });
  } else if (path_name.indexOf('/public/') !== -1) {
    // public文件夹统一处理;
    fs.readFile('.' + path_name, function (err, data) {
      if (err) {
        return res.end('4024 Not Found')
      }
      res.end(data);
    });
  } else if (path_name === '/post') {
    fs.readFile('./views/post.html', function (err, data) {
      if (err) {
        return res.end('4014 Not Found')
      }
      res.end(data);
    });
  } else if (path_name === '/pinglun') {

    // 注意：这个时候无论 /pinglun?xxx 之后是什么，我都不用担心了，因为我的 pathname 是不包含 ? 之后的那个路径
    // 一次请求对应一次响应，响应结束这次请求也就结束了
    // res.end(JSON.stringify(parseObj.query))
    /**
     * 我们已经用url的parse()方法把请求路径中的查询字符串解析成了一个对象
     * 所以接下来要做的就是
     *  1， 获取表单提交的数据parseObj.query
     *  2， 生成日期到数组对象中，然后存储到数组中
     *  3， 让用户跳转到首页，
     *      当用户再次请求到'/'路径的时候，首也列表的数据已经发生了变化
     */

    comments.unshift({
      name: parseObj.query.name,
      message: parseObj.query.message,
      dateTime: new Date()
    });
    /**
     * 服务端这个时候已经吧数据存储好了（这里只是暂时存储，实际项目应该长久存储），
     * 接下来就是让用户重定向到首页，就可以看到最新的留言内容了
     */

    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
    // 如何通过服务器让客户端重定向？
      // 1，状态码设置为 302 临时重定向
             // statusCode
      // 2，在响应头中通过 Location 告诉客户端往哪里重定向
             // setHeader
    // 如果客户端发现服务器的响应状态码是 302（默认200），就会自动去响应头中去找 Location，然后对这个地址发起新的请求
    // 所以你就可以看到客户端自动跳转了

  } else {
    fs.readFile('./views/404.html', function (err, data) {
      if (err) {
        return res.end('404 path error')
      }
      res.end(data);
    });
  }

}).listen(3000, function () {
  console.log('启动成功  http://localhost:3000/');
})
