// 导入
const express = require('express')

// 创建router路由实例对象
const router = express.Router()

// 导入用户信息处理函数模块
const userinfo_handler = require('../router_handler/userinfo')

// 导入校验规则
const { update_userinfo_schema, update_password_schema, update_avatar_schema } = require('../schema/user')
// 导入校验规则模块
const expressJoi = require('@escook/express-joi')

// 定义获取用户基本信息路由
router.get('/userinfo', userinfo_handler.getUserInfo)

// 定义更新用户基本信息路由
router.post('/userinfo', expressJoi(update_userinfo_schema), userinfo_handler.updateUserInfo)

// 重置密码路由
router.post('/updatepwd', expressJoi(update_password_schema), userinfo_handler.updatePassword)

// 更换头像路由
router.post('/update/avatar', expressJoi(update_avatar_schema), userinfo_handler.updateAvatar)

// 导出
module.exports = router