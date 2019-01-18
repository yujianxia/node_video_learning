// 安装
// 引入包
var express = require('express');
var path = require('path');

// 创建你的服务器应用程序
// 也就是你原来的 http.creadServer()
const app = express();
const port = 3000;

/**
 * express可以指定公开目录
 * 只要这样做了，就可以直接通过 /public/xxx 直接访问 public 目录下所有的资源了
 * 
 */
app.use('/public/', express.static('./public/'));


// 但是，您提供给该express.static函数的路径是相对于启动node进程的目录。
// 如果从另一个目录运行express应用程序，则使用要提供的目录的绝对路径更安全：
// path.join()路径拼接
// path.join(__dirname, 'public') 会得到一个动态的绝对路径
app.use('/static', express.static(path.join(__dirname, '/public')))



// 模板引擎在 express 中也就是一个 API 的事情
// 使用框架的好处就是，能更加专注于业务



// Express 不对 Node.js 已有的特性进行二次抽象，只是在它之上扩展了 Web 应用所需的基本功能
// 用express web开发框架，让代码更优雅

// 当服务器收到get请求 / 的时候，就执行回调函数。返回处理结果
app.get('/', (req, res) => {
    // 在express中，使用req.query 来获取查询字符串参数 获取出来的就是对象
     res.send('hello express') 
    
    });

app.get('/about', (req, res) => {
    res.send(
        `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>node page</title>
    </head>
    <body>
        <p>index content</p>
    </body>
    </html>`
    )
});

app.listen(port, function () {
    console.log('app runing port is 3000!', );
})






