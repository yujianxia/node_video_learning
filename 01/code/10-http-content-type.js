/**
 * 怎么发送页面
 */
let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {
    var url = req.url;
    if (url === '/') {
        fs.readFile('./views/index.html', (err, data) => {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8');
                res.end('文件读失败');
            } else {
                // data 默认是二进制，通过.toString() 转成字符串
                // res.end() 支持两种数据格式， 二进制 字符串

                /**
                 *  html页面可以不用设置Content-Type 
                 *  在head标签中设置 mate 元数据(但是返回的是没有解析的代码)) 代码如下：
                 * <meta charset="UTF-8">
                 */
                // res.setHeader('Content-Type', 'text/html;charset=utf-8');
                res.end(data);
            }
        })
    } else if (url === '/img') {
        fs.readFile('./views/image.jpg', (err, data) => {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8');
                res.end('文件读失败');
            } else {
                // 图片就不需要编码了，
                // 我们常说的编码 指的是：字符编码
                res.setHeader('Content-Type', 'image/jpeg');
                res.end(data);
            }
        })
    }

}).listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
})






