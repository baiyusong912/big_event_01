// 导入数据库模块
const db = require('../db/index')

const bcrypt = require('bcryptjs')

// 导出用户信息处理函数
exports.getUserInfo = function (req, res) {
    // 定义SQL
    let sql = 'select id,username,nickname,email,user_pic from ev_users where id=?'
    // 执行SQL（解析token后，在req上会多出一个user属性
    db.query(sql, req.user.id, function (err, results) {
        // 判断SQL
        if (err) return res.cc(err)
        // 判断结果，如果返回的数据不是一条，就说明查询失败
        if (results.length !== 1) return res.cc('获取用户信息失败！')
        // 获取成功，返送给前端-因为要发送data所以不能用cc()
        // delete results[0].password
        res.send({
            status: 0,
            message: '获取用户基本信息成功',
            data: results[0]
        })
    })

}

// 导出更新用户信息处理函数
exports.updateUserInfo = function (req, res) {
    const sql = 'update ev_users set ? where id=?'
    db.query(sql, [req.body, req.body.id], function (err, results) {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('修改用户基本信息失败！')
        res.cc('修改用户基本信息成功！', 0)
    })
}

// 导出重置密码处理函数
exports.updatePassword = function (req, res) {
    // 定义SQL
    let sql = 'select * from ev_users where id=?'
    db.query(sql, req.user.id, function (err, results) {
        // 判断SQL
        if (err) return res.cc(err)
        // 判断是否查询到一条数据
        if (results.length !== 1) return res.cc('查询用户信息失败！')
        // 查询到用户后对比密码
        const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
        if (!compareResult) {
            return res.cc('原密码错误！')
        }
        // 定义SQL
        let sql = 'update ev_users set password=? where id=?'
        const newPwd = bcrypt.hashSync(req.body.newPwd, 10)
        db.query(sql, [newPwd, req.user.id], function (err, results) {
            if (err) return res.cc(err)
            if (results.affectedRows !== 1) {
                return res.cc('更新密码失败！')
            }
            res.cc('更新密码成功', 0)
        })
    })
}

// 导出更换头像处理函数
exports.updateAvatar = function (req, res) {
    let sql = 'update ev_users set user_pic=? where id=?'
    db.query(sql, [req.body.avatar, req.user.id], function (err, results) {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) {
            return res.cc('更新头像失败！')
        }
        res.cc('更新头像成功', 0)
    })
}