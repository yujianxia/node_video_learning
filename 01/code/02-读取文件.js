/**
 * 在浏览器的javascript没有读取文件的能力
 * 浏览器是不能执行包含有node API的代码的
 * node中的js具有文件操作的能力
 * 
 * fs是file-system（文件系统）的简写
 * 在node中想要进行文件的操作，就必须引入fs这个核心模块
 * 在 fs 这个模块中就提供了所有的文件操作相关的 API  --读 删 创建目录...所有关于文件的操作
 * 
 */

// 使用如下：

// 第一步 使用require加载fs核心模块
var fs = require('fs');

// 第二步 读取文件
// 第1个参数：要读取的文件路径
// 第2个参数：回调函数
//      回调函数里面有两个参数error，data(都是形参))
//      如果读取文件失败 error就是错误对象，data 是 undefined
//      如果读取文件成功 error就是 null，data就是 读取的文件数据

fs.readFile('./00-helloworld.js',function(error,data){
    console.log('error',error); // null
    console.log('data',data); // <Buffer 76 61 72 20 66 6f 6f 20 3d 20 27 62 6f ... >
    // 为什么会输出Buffer？
    // 文件中储存的数据都是二进制数据 0 1

    // 为什么看到的不是 0 1？
    // 二进制被转换成 16进制

    // 无论是 二进制还是 16进制 我们都无法直接认识，
    // 所以我们通过 .toString() 方法转换成我们认识的字符串。

    // 这里可以通过error 来判断文件读取是否成功
    if(error){
        console.log('读取失败');
    }else{
        console.log(data.toString()); //输出文件的内容 进行相关操作
    }
    
})

console.log('同代码')