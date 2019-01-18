const express = require('express');
const path = require('path');
const app = express();


// 开放目录
app.use('/node_modules/', express.static('./node_modules/'));
app.use('/public/', express.static('./public/'));

// 在node中，有很多第三方模板引擎可以使用，不仅仅只有art-template
// 例如：ejs，jade(pug),headlebars,nunjucks

app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, 'views')); //默认就是views文件夹 写在这里方便直接改
app.get('/', function (req, res) {
    res.render('index.html', {
        name: '张三'
    })
})


app.listen(3000, () => {
    console.log('crud app is running 3000', );
});

