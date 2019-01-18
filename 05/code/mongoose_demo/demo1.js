const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test1', { useNewUrlParser: true });

// 创建一个模型（就是设计数据库）
// mongoDB 是很灵活的，是动态的。再代码中设计你的数据库就好了
// mongoose 这个包可以让设计数据库更加简单
const Cat = mongoose.model('Cat', { name: String });

// 实例化一个cat
const kitty = new Cat({ name: 'Zildjian' });
// 持久化保存kitty实例
kitty.save().then(() => console.log('meow'))


// 循环生成
for (let i = 0; i < 10; i++) {
    // 实例化一个cat
    const kitty1 = new Cat({ name: '喵喵' + i });
    // 持久化保存kitty实例
    kitty1.save().then(() => console.log('喵喵'))

}