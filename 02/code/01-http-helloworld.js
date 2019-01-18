let http = require('http');
let fs = require('fs');

// 创建server
var server = http.createServer();

//  监听server的request 请求事件，设置请求处理函数。
// 一个请求对应一个响应，
// 如果在一个请求过程中，已经结束响应了。则不能重复发送响应。
// 没有请求就没有响应
var wwwDir = 'C:/Users/dlp/Desktop/testNode/02/node_test_file';
server.on('request', function (req, res) {
    var url = req.url
    // / index.html
    // /a.txt wwwDir + /a.txt
    // /apple/login.html wwwDir + /apple/login.html
    // /img/ab1.jpg wwwDir + /img/ab1.jpg
    if (url === '/') {
        fs.readFile(wwwDir + '/index.html', function (err, data) {
            // if (err) {
            //   res.end('404 Not Found.')
            // } else {

            // }

            if (err) {
                // return 有两个作用：
                //  1. 方法返回值
                //  2. 阻止代码继续往后执行
                return res.end('404 Not Found.')
            }
            res.setHeader('Content-Type', 'text/html;charset=utf-8');
            res.end(data)
        })
    } else if (url === '/a.txt') {
        fs.readFile(wwwDir + '/a.txt', function (err, data) {
            if (err) {
                return res.end('404 Not Found.')
            }
            res.setHeader('Content-Type', 'text/plain;charset=utf-8');
            res.end(data)
        })
    } else if (url === '/index.html') {
        fs.readFile(wwwDir + '/index.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found.')
            }
            res.setHeader('Content-Type', 'text/html;charset=utf-8');
            res.end(data)
        })
    } else if (url === '/apple/login.html') {
        fs.readFile(wwwDir + '/apple/login.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found.')
            }
            res.setHeader('Content-Type', 'text/html;charset=utf-8');
            res.end(data)
        })
    }
})

// 绑定端口号，启动服务
server.listen(3000, function () {
    console.log('启动成功，监听 http://127.0.0.1:3000/', );
})








