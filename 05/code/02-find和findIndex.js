/**
 * es6新增了很多数组的操作方法
 * find()
 * findIndex()
 * ......
 */

// find 接收一个方法作为参数，方法内部返回一个条件
// find 会遍历所有的元素，执行你给定的带有条件返回值的函数
// 符合该条件的元素会作为 find 方法的返回值
// 如果遍历结束还没有符合该条件的元素，则返回 undefined



var testArr = [{ "name": "a", "gee": "1" }, { "name": "b", "gee": "1" }, { "name": "c", "gee": "1" }];


// 模拟find()  findIndex()源码逻辑

Array.prototype.fmFind = function (func) {
    for (let i = 0; i < this.length; i++) {
        if (func(this[i], i)) {
            return this[i]
            // return i
        }
    }
}

var ret = testArr.fmFind(function (item) {
    return item.name === 'a'
})


console.log('ret', ret);





