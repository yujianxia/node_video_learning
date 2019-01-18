/**
 * 使用node的http核心模块构建一个本地web服务器
 * http的职责就是创建 编写服务器的
 * 
 */

// 第一步：加载http模块
const http = require('http');

// 第二步：使用 http.creteServer() 方法， 创建一个 web 服务器
//  返回一个server实例
 let server = http.createServer();

/**
 * 服务器要做什么？
 *  对数据提供服务
 *      发请求
 *      接受请求
 *      处理请求
 *      返回处理结果（响应请求）
 */

// 第三步 注册 request请求事件
// 当B端请求过来的时候， 会触发服务器的 request 请求事件 然后执行第二个参数（回调函数）
server.on('request',function(){
    console.log('收到客户端的请求了');
});

// 第四步 添加端口号 启动服务器 成功之后会执行回调
server.listen('3000',function(){
    console.log('服务器启动成功了，现在可以通过 http://127.0.0.1:3000/ 访问')
})