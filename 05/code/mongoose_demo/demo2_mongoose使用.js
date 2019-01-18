var mongoose = require('mongoose');



var Schema = mongoose.Schema;
// 1.连接数据库
// 链接数据库 mongodb://localhost/itcase (这个表示链接localhost<本机>下的itcase数据库)
//数据库 itcase可以不存在，在插入第一条数据的时候，mongodb会自动创建itcase数据库
mongoose.connect('mongodb://localhost/itcase');


// 2..设计表结构（集合结构），指定数据类型和结构
// 作用是保证数据的完整性，不要有脏数据
var userSchema = new Schema({
    userName: { type: String, required: true }, // required: true 必须有
    passWord: { type: String, default: true },
    email: { type: String }
});

//3.. 将文档结构发布为模型
// mongoose.model() 方法就是把一个架构发布为一个model
// 第一个参数：传入一个大写名词单数字符串里表示你的数据库名称
//mongoose会自动将大写名词字符串生成 小写复数 的集合名称
// 例如这里的 User => users
// 第二个参数：架构Schema

//返回值：模型构造函数 
var User = mongoose.model('User', userSchema);



//4.. 当我们有了模型构造函数之后，就可以使用这个模型构造函数 对 users 集合中的数据 做任何操作（crud）

//  --------- 增加---------

// // new 出实例
// var admin = new User({
//     userName: '李哥',
//     passWord: '666',
//     email: 'yujian.xia@foxmial.com'
// })
// // 调用save()方法
// admin.save(function(err,ret){
//     if(err){
//         console.log('失败了',err);
//     }else{
//         console.log('成功了',ret);
//     }
// })


//                                      mongoose所有的API都支持promise

// User.find().then(res=>{
//     console.log("res",res);
// })

//  --------- 查询 ---------

// 查询所有
User.find(function (err,ret) {
    if (err) {
        console.log('查询失败',err);
    } else {
    // 返回的是数组
        console.log('查询成功',ret);
    }
})

// 条件查询
// User.find({
//     userName:"laoli"
// },function (err,ret) {
//     if (err) {
//         console.log('查询失败',err);
//     } else {
//         console.log('查询成功',ret);
//     }
// })


//  --------- 删除 ---------
// User.remove({
//     userName:"laoli"
// },function(err,ret){
//     if (err) {
//         console.log('删除失败,',err);
//     }else{
//         console.log('删除成功',ret);
//     }
// })


//  --------- 更新 ---------
// User.findByIdAndUpdate("5c3c362888626728dcec9d7a",{
//     userName:"李四+1"
// },function(err,ret){
//     if (err) {
//         console.log('更新失败,',err);
//     }else{
//         console.log('更新成功',ret);
//     }
// })



