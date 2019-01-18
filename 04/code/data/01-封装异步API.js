function fn(callback) {
 setTimeout(function () {
        var data = 'wwwww'
        callback(data);
    },1000)
}

// 调用fn 得到内部的data
fn(function(data){
    console.log('data',data);
})



/**
 * 如果需要获取一个函数中异步操作的结果，则必须通过回调函数里来获取
 */

