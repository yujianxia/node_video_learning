const express = require('express');

// 创建app
var app = express();

// 当以 /public/ 开头的时候，去 ./public/  目录中找对应的资源   http://localhost:3000/public/login.html
// 这种方式更容易辨识，推荐这种方式
// app.use('/public/',express.static('./public/'))

// 当省略第一个参数的时候，就可以通过省略 /public 的方式来访问  http://localhost:3000/login.html
// app.use(express.static('./public/'))

// 必须是 /abc/d/puiblic目录中的资源具体路径  http://localhost:3000/abc/d/login.html
app.use('/abc/d/', express.static('./public/'))

app.get('/',function(req,res){
    // 原来的api也可以用
    // res.write('hello world');
    // res.end('hello world');


    // 但是express建议使用它的api  因为他可以自动根据你的返回数据内容加上对应的Content-Type
    res.send('hello worldaaaaa')
})
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
        <p>index login</p>
    </body>
    </html>`
    )
});
app.listen(3000,function(){
    console.log('express APP is runing....',);
})

















