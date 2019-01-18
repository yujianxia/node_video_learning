/**
 * require是一个方法
 * 他的作用的加载模块
 * 
 *模块分为三种：核心模块（node定义的）、第三方模块、自定义模块。
 *可以通过require(）加载第三模块。require会将module.exports对象暴露给外部。
 *模块中的命名空间是独立的，不是全局的。
 *  
 * 
 * 相对路径要加 ./ 或者 ../
 * 
 * node中没有全局作用域 只有 模块的作用域
 *   外部访问不到内部，内部也访问不到外部
 * 
 * 
 * 
 */

var foo = '123';
console.log('a start');

require('./b.js');

console.log('a end');
console.log('foo 的值', foo); // 输出123  加载的b.js的foo 不会影响a.js的foo
