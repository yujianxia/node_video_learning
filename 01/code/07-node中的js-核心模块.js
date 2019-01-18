
// 获取当前机器的操作系统相关信息
var os = require('os');

// 获取当前机器的 cpu 相关信息
console.log(os.cpus());

// 获取以整数形式返回系统内存总量（以字节为单位）
console.log(os.totalmem())

// 获取以整数形式返回空闲内存总量（以字节为单位）
console.log('返回空闲内存总量',os.freemem());



/**
 * path 路径模块 用来操作路径的
 * 
 */

var path = require('path');

// 获取路径的目录名path
console.log(path.dirname('/foo/bar/baz/asdf/quux')); // /foo/bar/baz/asdf

// 获取扩展名
console.log(path.extname('/foo/bar/baz/asdf/quux.txt'));// .txt




// os  path  还有很多方法 集体参照官网