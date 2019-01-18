/**
 * reuqire()方法有两个作用
 *   1.加载文件模块并执行里面的代码
 *     2.拿到被加载模块导出的接口对象
 * 
 * 在每个文件模块里面都提供了一个对象  exports
 *      exports 默认是一个空对象
 *        你要做的就是把需要被外部访问的成员挂载到这个 exports 对象里面
 * 
 *  exports 和 module.exports的区别
 * 如果要对外暴露属性或方法，就用exports就行，
 * 要暴露对象(类似class，包含了很多属性和方法)，就用module.exports
 */


//  将 bb.js 导出的exports对象 保存在 bb_exports 变量中
 var bb_exports = require('./bb')
console.log('exports',bb_exports.foo1,bb_exports.foo2); // hello world
console.log('bb的函数',bb_exports.addfun(10,20)); //30