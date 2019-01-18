// 这个文件不关心业务

// 异步函数的封装才是学习 node 的精华所在


const fs = require('fs')
var baseUrl = './db.json'
/**
 * students.js
 * 数据操作文件模块  职责：
 * 操作文件的数据，  只处理数据，不关心业务
 */

// 获取所有学生列表
exports.find = function (callback) {
    // 传入一个回调函数 callback 
    /**
     * 
     *  callback中的参数
     *   第一个参数是err
     *    成功是 null
     *    失败是 err（错误对象）
     *
     *   第二个参数是结果
     *    成功是 data
     *    失败是 undefined
     * 
     */
    fs.readFile(baseUrl, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        }
        callback(null, JSON.parse(data).students)
    })
}

// 添加保存学生
exports.save = function (reqData, callback) {
    fs.readFile(baseUrl, 'utf8', function (err, data) {
        if (err) {
            return res.status(500).send('server error!!')
        }
        var studentsData = JSON.parse(data).students;
        var commitData = reqData;
        commitData.id = Date.now() + '';
        studentsData.push(commitData);
        // 把对象数据转换为字符串
        var fileData = JSON.stringify({
            students: studentsData
        })
        writeFlie_fun(baseUrl, fileData, callback);
    })
}

// 更新学生信息
exports.updateById = function (reqData, callback) {
    fs.readFile(baseUrl, 'utf8', function (err, data) {
        if (err) {
            return res.status(500).send('server error!!')
        }
        var studentsData = JSON.parse(data).students;
        // 你要修改谁就把谁找出来
        // find() 是es6的数组操作方法 返回匹配的数组元素
        var findStudent = studentsData.find(function (item) {
            return item.id === reqData.id;
        });

        for (const key in reqData) {
            findStudent[key] = reqData[key];
        };
        var fileData = JSON.stringify({
            students: studentsData
        })
        writeFlie_fun(baseUrl, fileData, callback);
    })
}

// 删除学生
exports.delete = function (id, callback) {
    fs.readFile(baseUrl, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;
        var getIndex = students.findIndex(function (item) {
            return item.id === id;
        })
        // 根据下标从数组中删除对应的学生对象
        students.splice(getIndex, 1)

        // 把对象数据转换为字符串
        var fileData = JSON.stringify({
            students: students
        })
        writeFlie_fun(baseUrl, fileData, callback);
    })
}
// 通过id获取单个学生的数据
exports.findById = function (id, callback) {
    fs.readFile(baseUrl, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;
        var ret = students.find(function (item) {
            return item.id === id;
        });

        callback(null, ret)
    })
}

//封装的文件写入方法
var writeFlie_fun = function (url, data, callback) {
    // 把字符串保存到文件中
    fs.writeFile(url, data, function (err) {
        if (err) {
            // 错误就是把错误对象传递给它
            return callback(err)
        }
        callback(null)
    })
}
