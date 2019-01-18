let fs = require('fs');

fs.readdir('C:/Users/dlp/Desktop/testNode/02/node_test_file',function (err,data) {
    if (err) {
        return console.log('dir不存在',);
    }
    // 打印读取的目录
    console.log('读取的文件',data);
})

