const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})


// db.query('select 1', function (err, results) {
//     if (err) return console.log(err.message);
//     console.log(results);
// })

// console.log('访问数据库是异步操作！');


// 查询所有
// let sql = 'select * from users'
// db.query(sql, function (err, results) {
//     if (err) return console.log(err.message);
//     console.log(results);
// })

// 条件查找
let sql = 'select * from users where id=?'
db.query(sql, [1], function (err, results) {
    if (err) return console.log(err.message);
    console.log(results);
})


// 添加数据
// let sql = 'insert into users (username,password) values (?,?)'
// db.query(sql, ['zhaoliu', '999999'], function (err, results) {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) console.log('添加用户成功');
// })

// 添加数据（简单写法）
// let sql = 'insert into users set ?'
// let obj = { username: 'wangzhao', password: '147147' }
// db.query(sql, obj, function (err, results) {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) console.log('恭喜您，添加成功！');
// })


// 修改数据
// let sql = 'update users set username=?,password=?,status=? where id=?'
// db.query(sql, ['mahan', '741741', '1', 6], function (err, results) {
//     if (err) return console.log(err.message);
//     if (results.affectedRoes === 1) console.log('修改成功！');
// })


// 修改数据（简单写法）
// let sql = 'update users set ? where id=?'
// let obj = { username: 'wangchao', password: '147147', status: '0' }
// db.query(sql, [obj, 6], function (err, results) {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) console.log('恭喜您，修改成功！');
// })

// 删除数据
// let sql = 'delete from users where id=?'
// db.query(sql, 5, function (err, results) {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) console.log('删除成功！');
// })

// 删除数据（修改替代删除）
// let sql = 'update users set status=1 where id=?'
// db.query(sql, 6, function (err, results) {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) console.log('删除成功！');
// })