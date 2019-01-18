let fs = require('fs');

/**
 * 第一个参数：文件路径
 * 第二个参数：文件内容
 * 第三个参数：回调函数
 *         回调函数只要一个参数error(形参)
 *          如果写入成功： error是 null
 *          如果写入失败： error是 错误对象
 * 
 * 
 */
fs.writeFile('./被写入的文件.md','你好，我是被写入的内容', function(error){
    // 输出错误对象
    console.log(error)
    if(!error){
        console.log('文件写入成功');
    } else {
        console.log('文件写入失败');
    }
})


