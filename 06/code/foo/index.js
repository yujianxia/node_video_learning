const fs = require('fs');
const path = require('path');

// 如果在c:\Users\dlp\Desktop\testNode\06\code>中执行 node foo\index.js
// 报错 Error: ENOENT: no such file or directory, open 'c:\Users\dlp\Desktop\testNode\06\code\a.txt'

// 所以
/**
 * node 的文件操作中 的相对路径不是相对于当前文件，而是相对于执行node命令所处的终端路径
 * 这个不是错误，node就是这样设计的（利于开发命令工具）
 * 
 * 总结： node的文件操作路径中，相对路径的设计就是相当于执行node命令所处的路径（模块的相对路径不受影响）
 * 
 */
// fs.readFile('a.txt', 'utf8', function(err,data){
//     if (err) {
//         throw err
//     }
//     console.log('data',data);
// })

// paht 的作用就出来了
fs.readFile(path.join(__dirname,'a.txt'), 'utf8', function(err,data){
    if (err) {
        throw err
    }
    console.log('data',data);
})

