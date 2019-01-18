let url = require('url')
var obj = url.parse('/pinglun?name=的撒的撒&message=的撒的撒的撒', true)

console.log(obj)
console.log('21',obj.query)