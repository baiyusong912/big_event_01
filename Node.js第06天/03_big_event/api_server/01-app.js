// 导入
const express = require('express')

// 创建
const app = express()

// 在路由之前APP创建之后配置cors跨域
const cors = require('cors')
app.use(cors())

// 用中间件解析post参数
app.use(express.urlencoded({ extended: false }))

// 添加一个中间件，添加一个快捷发送错误消息的方法
app.use(function (req, res, next) {
    res.cc = function (err, status = 1) {
        res.send({
            status: status,
            message: typeof err == 'object' ? err.message : err
        })
    }
    next()
})

// 使用第三方中间件，检验token，如果想在报错中使用cc()，就必须写到cc()中间件之后
const expressJwt = require('express-jwt')
const config = require('./02-config')
app.use(expressJwt({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))

// 挂载路由模块
// 挂载登录注册路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)
// 挂载用户信息路由模块
const userinfoRouter = require('./router/userinfo')
app.use('/my', userinfoRouter)
// 挂载文章分类路由模块
const artCateRouter = require('./router/artcate')
app.use('/my/article', artCateRouter)
// 挂载发布文章路由模块
const articleRouter = require('./router/article')
app.use('/my/article', articleRouter)

// 错误处理中间件
app.use(function (err, req, res, next) {
    // 众多错误中，分离出身份认证错误
    if (err.name == 'UnauthorizedError') return res.cc('身份认证失败！')
    // 众多错误中分离出校验错误——未来可以特殊处理
    if (err.name == 'ValidationError') {
        return res.send({
            status: 1,
            message: '参数格式错误：' + err.message
        })
    }
    // 普通错误，普通处理
    res.send({
        status: 1,
        message: err.message
    })
})

// 监听
app.listen(3007, function () {
    console.log('http://127.0.0.1:3007');
})