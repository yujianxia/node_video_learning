
/**
 *  art-tmplate
 *   art-tmplate 不仅可以在浏览器中使用，也可以在node中使用
 */

// 安装：
//    npm install art-template
//    该命令在哪执行就会把包下载到哪里。默认会下载到 node_modules 目录中
//    node_modules 不要改，也不支持改。

// 在 Node 中使用 art-template 模板引擎
// 模板引起最早就是诞生于服务器领域，后来才发展到了前端。
// 
// 1. 安装 npm install art-template
// 2. 在需要使用的文件模块中加载 art-template
//    只需要使用 require 方法加载就可以了：require('art-template')
//    参数中的 art-template 就是你下载的包的名字
//    也就是说你 isntall 的名字是什么，则你 require 中的就是什么
// 3. 查文档，使用模板引擎的 API
let http = require('http');
let fs = require('fs');
let template = require('art-template')

http.createServer(function (req, res) {

    fs.readFile('./tpl.html',function(err,data){
        if (err) {
            return console.log('读取文件失败');
        }
        // 默认读取的是二进制数据
        // 但是模板引擎需要的是字符串  所以要 .toString() 转换成字符串
        var tplStr = data.toString();
        var ret = template.render(tplStr,{
            name: 'Jack',
            age: "16",
            address: "南充",
            arr: [
                '打篮球', '游泳'
            ]
        })
        console.log('ret',ret);
        res.end(ret)
    })


}).listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
})








