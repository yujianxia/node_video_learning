

const http = require('http');

let server = http.createServer();




// request 请求事件处理函数，需要接受两个参数
//1-  request
    // 可以用来获取B端的一些请求信息 比如：请求路径..
//2-  response响应对象
    // 给B端发送响应消息

server.on('request',function(request,response){
    // 获取到是 端口号之后的那一部分路径 例如:
    // http://127.0.0.1:3000/   -> /
    // http://127.0.0.1:3000/admin  -> /admin
    console.log(request.url);

    // response发送响应
    // response有一个方法 write() 可以给响应中写入数据，
    // write() 可以使用多次，但是最后一定要 end() 方法，结束响应，不然客户端会一直等待

    response.write('响应数据')

    if(request.url == '/'){
        response.end('index');
    }else if(request.url == '/login'){
        response.end('login');
    }else if(request.url == '/data'){
        var dataArr = [
            {'name':"apple",'peice':'4444'},
            {'name':"华为",'peice':'9999'},
            {'name':"小米",'peice':'1111'}
        ];
        /**
         * 响应数据只能是二进制数据（Buffer）或者字符串
         *  数组 对象 数字 布尔 都不可以作为响应数据。
         * response.end(123); // TypeError: First argument must be a string or Buffer
         * 同理
         * 
         */
        response.end(JSON.stringify(dataArr));
    }else{
        response.end('no data');
    }  
    
    // 告诉客户端 响应完成了， 你可以执行你的操作了
    response.end()
});

server.listen('3000',function(){
    console.log('服务器启动成功了，现在可以通过 http://127.0.0.1:3000/ 访问')
})