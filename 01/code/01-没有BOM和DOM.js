/**
 * node中没有DOM和BOM，和浏览器的js不一样
 * node中采用EcmaScript进行编码
 * 
 * 
 */
console.log("打印BOM",window); //报错（引用错误） ReferenceError: window is not defined
console.log("打印DOM",document);//报错（引用错误） ReferenceError: document is not defined