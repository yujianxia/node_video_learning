var mysql = require('mysql');
// 创建连接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'usBFQrYar5%v',
    database: 'my_db'
});
// 连接
connection.connect();
// 执行数据操作
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});
// 关闭连接
connection.end();

