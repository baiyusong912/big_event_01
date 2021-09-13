const db = require("../db/index")
const bcrypt = require('bcryptjs')

// 导入
const jwt = require('jsonwebtoken')

const config = require('../02-config')

// 定义注册处理函数
exports.regUser = function (req, res) {
    // 获取参数-检验是否传递和传递的对否是空字符串
    const body = req.body
    // if (!body.username || !body.password) {
    //     // return res.send('用户名和密码不正确！')
    //     return res.cc('用户名和密码不正确！')
    // }
    // 判断用户名是否被占用
    let sql = 'select * from ev_users where username=?'
    db.query(sql, body.username, function (err, results) {
        // 判断sql
        if (err) {
            // return res.send(err.message)
            return res.cc(err)
        }
        // 判断查询结果，如果大于等于1，说明用户名已存在
        if (results.length >= 1) {
            // return res.send('用户名已存在')
            return res.cc('用户名已存在')
        }
        // 密码加密
        // console.log(body.password);
        body.password = bcrypt.hashSync(body.password, 10)
        // console.log(body.password);
        // 插入用户
        let sql = 'insert into ev_users set ?'
        db.query(sql, body, function (err, results) {
            if (err) {
                // return res.send({status: 1,message: err.message})
                return res.cc(err)
            }
            if (results.affectedRows != 1) {
                // return res.send({status: 1,message: '注册用户失败，请稍后重试'})
                return res.cc('注册用户失败，请稍后重试')
            }
            // res.send({status: 0,message: '注册用户成功'})
            res.cc('注册用户成功', 0)
        })
        // res.send('注册 OK')
    })
    // 注意db.query之外，不允许向客户端发送数据
}

// 定义登陆处理函数
exports.login = function (req, res) {
    // 获取post参数
    const body = req.body
    // 定义SQL执行
    let sql = 'select * from ev_users where username=?'
    db.query(sql, body.username, function (err, results) {
        // 判断sql
        if (err) return res.cc(err)
        // 判断数组中元素个数，如果不是1或是等于0，说明用户名错误
        if (results.length !== 1) return res.cc('用户名或密码错误')
        // 判断密码是否正确
        const compareResult = bcrypt.compareSync(body.password, results[0].password)
        if (!compareResult) return res.cc('密码输入错误，请重试')
        // 因为要发送第三方参数token，所以不用cc()
        // 保存到token中的对象，不能包含密码（私密）头像（大）
        const user = { ...results[0], password: '', user_pic: '' }
        // 生成token
        const token = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expreiseIn })
        res.send({
            status: 0,
            message: '登录成功',
            token: 'Bearer ' + token
        })
    })
}