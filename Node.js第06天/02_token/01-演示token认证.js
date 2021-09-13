const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))

const jwt = require('jsonwebtoken')

const expressJWT = require('express-jwt')

app.use(expressJWT({ secret: 'suibianxie' }).unless({ path: [/^\/api\//] }))

app.post('/api/login', function (req, res) {
    let body = req.body
    if (body.username != 'admin' || body.password != '123123') {
        return res.send({
            status: 1,
            message: '用户名或密码错误'
        })
    }
    const token = jwt.sign({ username: body.username }, 'suibianxie', { expiresIn: '12h' })
    res.send({
        status: 0,
        message: '登录成功',
        token: 'Bearer ' + token
    })
})

app.get('/my/userinfo', function (req, res) {
    res.send({
        status: 0,
        message: '用户信息获取成功',
        data: req.user
    })
})

app.use(function (err, req, res, next) {
    if (err.name === 'l') {
        return res.send({
            status: 1,
            message: '无效token'
        })
    }
    res.send({
        status: 1,
        message: err.message
    })
})

app.listen(3006, function () {
    console.log('http://localhost:3006');
})