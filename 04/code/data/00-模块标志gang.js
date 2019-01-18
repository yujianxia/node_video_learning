var fs = require('fs');

// 所有的文件操作的 API 都是异步的
// 文件操作中的相对路径也已省略 ./
// fs.readFile('a.txt', function (err, data) {
//     if (err) {
//         return console.log('读取失败');
//     }
//     console.log(data.toString());
// })


// 模块中的相对路径的 ./ 是不能省略的
// require('./foo.js')(1);




// 文件操作中和模块中的相对路径不能省略 .  千万不能省略
// 如果直接写 / 就表示了当前文件所属磁盘的根目录 例如c盘  C:\a.txt
fs.readFile('/a.txt', function (err, data) {
    if (err) {
        console.log(err);
        return console.log('读取失败');
    }
    console.log(data.toString());
})




