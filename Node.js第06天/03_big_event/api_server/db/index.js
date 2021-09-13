// 导入
const sql = require('mysql')

// 创建数据库连接
const db = sql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})

// 导出
module.exports = db