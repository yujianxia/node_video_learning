/**
* router.js 路由模块的职责：
*   处理路由
*   根据不同的请求方法+请求路径设置具体的请求处理函数
*/
const fs = require('fs');

// mongoose的方式
const Students = require('./students-mongodb');


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

// 添加保存
router.post('/students/new', function (req, res) {

    new Students(req.body).save(function (err) {
        if (err) {
            return res.status(500).send('server error!');
        }
        res.redirect('/students');
    })


});

// 点击编辑 获取数据
router.get('/students/edit', function (req, res) {
    Students.findById(req.query.id.replace(/"/g, ''), function (err, data) {
        if (err) {
            return res.status(500).send('server error!');
        }
        res.render('edit.html', {
            student: data
        })
    })


});

// 更新数据
router.post('/students/edit', function (req, res) {
    var id = req.body.id.replace(/"/g, '')
    Students.findByIdAndUpdate(id, req.body, function (err, data) {
        if (err) {
            return res.status(500).send('server error!');
        }
        res.redirect('/students')
    })

});

// 删除
router.get('/students/delete', function (req, res) {
    // 调用封装的方法
    Students.findByIdAndRemove(req.query.id.replace(/"/g, ''), function (err) {
        if (err) {
            return res.status(500).send('server error!');
        }
        res.redirect('/students');
    })
});

// 4  导出 router容器
module.exports = router;

// 5 见app.js
