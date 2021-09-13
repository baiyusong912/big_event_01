// 导入
const express = require('express')

//创建路由实例
const router = express.Router()

// 导入路由处理函数模块
const userHandler = require('../router_handler/user')

// 导入 校验规则使用模块（中间件）和校验规则
const expressJoi = require('@escook/express-joi')
const { reg_login_schema } = require('../schema/user')

// 注册路由
router.post('/reguser', expressJoi(reg_login_schema), userHandler.regUser)

// 登陆路由
router.post('/login', expressJoi(reg_login_schema), userHandler.login)

// 导出
module.exports = router