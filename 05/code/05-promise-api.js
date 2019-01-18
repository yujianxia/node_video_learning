const fs = require('fs');

console.log('1');
// 为了解决回调地狱 ES6中新增了一个API：promise
// promise是一个构造函数

// 创建一个promise容器
var p1 = new Promise(function (resolve, reject) {
    console.log('2');
    fs.readFile('./data/a.txt', 'utf8', function (err, data) {
        if (err) {
            reject(err)
        } else {
            console.log('3');
            resolve(data);
        }
    })
});

console.log('4');

// 输出 1 2 4 3 说明
// promise一旦创建就立即执行
//  promise本身不是异步的，但是里面通常会写一个异步的方法



var p2 = new Promise(function (resolve, reject) {
    fs.readFile('./data/b.txt', 'utf8', function (err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data);
        }
    })
});

var p3 = new Promise(function (resolve, reject) {
    fs.readFile('./data/c.txt', 'utf8', function (err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data);
        }
    })
});


// promise的链式调用

p1.then(res => {
    // then方法里面接受的函数就是promise容器中的 resolve 函数
    // 当前函数的 return 的结果就可以在后面的 then 中的 function 中接收到
        // return '123' 后面的  console.log('接受p2的数据', res); 就输出 123
        // 没有 return 后面收到的就是 undefined
    // 上面那些 return 的数据没什么卵用


    // 真正有用的是：我们可以 return 一个 Promise 对象
    // 当 return 一个 Promise 对象的时候，后续的 then 中的 方法的第一个参数会作为 p2 的 resolve
            // 这里return了 p2 这个promise容器 紧跟着后面的.then()方法 中的res，就是 p2 的 resolve传递的数据
    console.log('res', res);
    return p2
},err=>{
    console.log('err',err);
}).then(res => {
    console.log('接受p2的数据', res);
    return p3
}).then(res => {
    console.log('接受p3的数据', res);
})
















