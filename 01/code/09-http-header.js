let http = require('http');

http.createServer(function (req, res) {
    // 在服务器发送数据，默认是utf-8的内容。
    // 但是浏览器不知道是utf-8，所以会出现乱码
    // 浏览器不知道服务器响应的数据是什么格式编码的情况下，会根据当前操作系统的编码格式进行解析。
    // 中文的操作系统默认是 gbk
    // 解决方法是：
    /**
     * 正确地告诉浏览器，响应数据是什么格式进行编码
     * 在 http 协议中 'Content-Type' 就是用来告诉对方我发送给你的数据是什么格式编码的
     */
    // res.setHeader('Content-Type','text/plain;charset=utf-8');
    // res.end('hello 中国好啊')

    var url = req.url;
    if (url == '/plain') {
        // text/plain 是普通文本
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.end('中国好啊')
    } else if (url == '/html') {
          // 如果你发送的是html格式的字符串，也要用 text/html 告诉浏览器
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.end('<p>大家好，   <a href="www.baidu.com">baidu</a> 才是真的好</p>')
    }
    
}).listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
})






