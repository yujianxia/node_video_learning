let http = require('http');
let fs = require('fs');

// 创建server
var server = http.createServer();

var wwwDir = 'C:/Users/dlp/Desktop/testNode/02/node_test_file';
server.on('request', function (req, res) {
    var url = req.url;
    var indexUrl = '/index.html';
    if (url === '/') {
        url = indexUrl;
    };
    fs.readFile(wwwDir + url, function (err, data) {
        if (err) {
            return res.end('404 Not Found.');
        }
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.end(data);
    });
})

// 绑定端口号，启动服务
server.listen(3000, function () {
    console.log('启动成功，监听 http://127.0.0.1:3000/', );
})








