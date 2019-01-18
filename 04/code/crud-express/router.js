/**
* router.js 路由模块的职责：
*   处理路由
*   根据不同的请求方法+请求路径设置具体的请求处理函数
*/
const fs = require('fs');


var Students = require('./students');
/**
 * express 提供了一种更好的方式来包装路由
 */
// 1  引入express
var express = require('express');
// 2  创建一个router容器
var router = express.Router();
// 3  把router都挂载到路由容器中

// 获取主页数据
router.get('/students', function (req, res) {
    // readFile 第二个参数是可选的，
    // 传入 utf8 就是告诉它， 读取的文件直接按照utf-8编码转成我们能认识的字符
    // 除了这样来转换 还可以通过 .toString() 来转换数据


    // fs.readFile('./db.json', 'utf8', function (err, data) {
    //     if (err) {
    //         return res.status(500).send('server error!');
    //     }
    //     // 从文件中读取到的数据是string
    //     // 所以一定要转成对象
    //     res.render('index.html', {
    //         fruits: [
    //             '第一',
    //             '第二'
    //         ],
    //         students: JSON.parse(data).students
    //     })
    // });

    Students.find(function (err, students) {
        if (err) {
            return res.status(500).send('server error!');
        }
        // 从文件中读取到的数据是string
        // 所以一定要转成对象
        res.render('index.html', {
            fruits: [],
            students: students
        })
    });

});
// 跳转添加学生页面
router.get('/students/new', function (req, res) {
    res.render('new.html')
});

router.post('/students/new', function (req, res) {
    //1. 获取表单数据
    //2. 处理
    // 将数据保存在 db.json 中，持久化处理。
    //3. 发送响应

    /**
     * 先把文件读取出来，转成对象
     * 再把添加的数据 push 到对象里面
     * 再写入文件中 持久化保存
     */
    // fs.readFile('./db.json', 'utf8', function (err, data) {
    //     if (err) {
    //         return res.status(500).send('server error!!')
    //     }
    //     var studentsData = JSON.parse(data).students;
    //     var commitData = req.body;
    //     commitData.id = Date.now() + '';
    //     studentsData.push(commitData);
    //     // 把对象数据转换为字符串
    //     var fileData = JSON.stringify({
    //         students: studentsData
    //     })
    //     fs.writeFile('./db.json', fileData, function (err) {
    //         if (err) {
    //             return console.log('err',err);
    //         }
    //         res.redirect('/students');
    //         // 成功就没错，所以错误对象是 null
    //     })
    // })


    // 调用封装的方法
    Students.save(req.body, function (err) {
        if (err) {
            return res.status(500).send('server error!');
        }
        res.redirect('/students');
    })






});

router.get('/students/edit', function (req, res) {
    // 在B端的列表页中处理连接问题，（加上参数id
    // 获取要编辑的学生的id
    // 渲染编辑页面
    Students.findById(req.query.id, function (err, data) {
        if (err) {
            return res.status(500).send('server error!');
        }
        res.render('edit.html', {
            student: data
        })
    })


});

router.post('/students/edit', function (req, res) {
    // 调用封装的方法
    Students.updateById(req.body, function (err) {
        if (err) {
            return res.status(500).send('server error!');
        }
        res.redirect('/students');
    })

});

router.get('/students/delete', function (req, res) {
        // 调用封装的方法
    Students.delete(req.query.id, function (err) {
        if (err) {
            return res.status(500).send('server error!');
        }
        res.redirect('/students');
    })
});

// 4  导出 router容器
module.exports = router;

// 5 见app.js
