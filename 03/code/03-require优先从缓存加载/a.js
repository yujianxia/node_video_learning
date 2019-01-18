console.log('a.js 被加载了')
var fn = require('./b')

console.log('a中接受的b.js导出的fun',fn)
