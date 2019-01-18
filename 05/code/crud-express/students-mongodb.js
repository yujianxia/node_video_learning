const mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://localhost/students');

const Schema = mongoose.Schema;

// 规定数据类型
var commentSchema = new Schema({
    "name": {
        type: String,
        required: true
    },
    "gender": {
        type: Number,
        enum: [0, 1], //枚举 只能是规定的值
        default: 0 //默认值
    },
    "age": {
        type: Number
    },
    "hobbies": {
        type: String
    },
});

// 直接导出模型构造函数
module.exports = mongoose.model('Comment', commentSchema);










