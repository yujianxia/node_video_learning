function say() {
    console.log('say', );
}
// 不加分号要报错，
say()

// ;(function (params) {
//     console.log('params',params);
// })()

// ;['北京','成都'].forEach(function (item) {
//     console.log('item',item);
// })

;`大家好,你好`.toString()

/**
 * 当你采用无分号的代码风格的时候，要注意以下几种情况
 * 
 * 
 *1. 当一行代码是以：
 *              (
 *              [
 *              `
 * 开头的时候，就要在前面添加一个 ;  避免不必要的错误。
 * 
 *2. 当一行代码是以：
 *              (
 *              [
 *              `
 * 开头的时候，就要在前面添加一个 ;  避免不必要的错误。
 */


