let http = require('http');
let fs = require('fs');

// 创建server
var server = http.createServer();

var wwwDir = 'C:/Users/dlp/Desktop/testNode/02/node_test_file';
server.on('request', function (req, res) {
    var url = req.url;
    fs.readFile('./template.html', function (err, data) {
        if (err) {
            return res.end('404 Not Found.');
        }

        /**
         * 1.如何得到 wwwDir 目录下的的文件名和目录名？
         * fs.readdir
         * 
         * 2.如何将得到的文件名和目录名替换到 template.html 中？
         * 模板引擎
         * 
         * 做了以上两件事， 这个两问题就解决了
         */


         fs.readdir(wwwDir,function (error, files) {
            if (error) {
                return res.end('404 Not Found dir.');
            }
                  // 2.1 生成需要替换的内容
      var content = ''
      files.forEach(function (item) {
        // 在 EcmaScript 6 的 ` 字符串中，可以使用 ${} 来引用变量
        content += `
          <tr>
            <td data-value="apple/"><a class="icon dir" href="/C:/Users/dlp/Desktop/testNode/02/node_test_file/${item}">${item}/</a></td>
            <td class="detailsColumn" data-value="0"></td>
            <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
          </tr>
        `
      })

      // 2.3 替换
      data = data.toString()
      data = data.replace('tytyty', content)
      // 3. 发送解析替换过后的响应数据
      res.end(data)

         })
    });
})

// 绑定端口号，启动服务
server.listen(3000, function () {
    console.log('启动成功，监听 http://127.0.0.1:3000/', );
})








