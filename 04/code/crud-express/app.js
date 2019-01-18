
/**
 * 模块职责要单一，不要乱写
 * 我们划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 * 
 * 
 * 
 * app.js 主模块的职责：
 * 启动服务
 * 做一些服务的配置
 *    模板引擎
 *    body-parper 解析表单post请求
 *    提供静态资源服务
 * 挂载路由
 * 监听端口启动服务
 * 
 * 
 */


const express = require('express');
const app = express();
const router = require('./router')
var bodyParser = require('body-parser')
// 开放目录
app.use('/node_modules/', express.static('./node_modules/'));
app.use('/public/', express.static('./public/'));

//----- 配置模板引擎和body-parper一定要在挂载路由之前（执行流程限制）---

app.engine('html', require('express-art-template'));

// 配置 body-parser 中间件（插件，专门用来解析表单 POST 请求体）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



// 5 接上 router.js文件--  把导入的路由容器挂载到 app 服务中
app.use(router);

// app.get('/', function (req, res) {
//     // readFile 第二个参数是可选的，
//     // 传入 utf8 就是告诉它， 读取的文件直接按照utf-8编码转成我们能认识的字符
//     // 除了这样来转换 还可以通过 .toString() 来转换数据
//     fs.readFile('./db.json', 'utf8', function (err, data) {
//         if (err) {
//             return res.status(500).send('sercer error!');
//         }
//         // 从文件中读取到的数据是string
//         // 所以一定要转成对象
//         res.render('index.html', {
//             fruits: [
//                 '第一',
//                 '第二'
//             ],
//             students: JSON.parse(data).students
//         })
//     });

// });



app.listen(3000, () => {
    console.log('crud app is running', );
});

module.exports = app;
