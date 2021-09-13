// 定义校验规则：@hapi/joi
const joi = require('@hapi/joi')

// 定义规则-抽离规则到规则对象外面，谁用谁调用
const username = joi.string().alphanum().min(1).max(10).required()
const password = joi.string().pattern(/^[\S]{6,12}$/).required()

// 修改用户信息需要的属性规则
const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
const email = joi.string().email().required()

// 定义base64头像规则
const avatar = joi.string().dataUri().required()

// 导出校验规则-登录注册都能使用
exports.reg_login_schema = {
    // body校验：req.body   query校验：req.query    params校验：req.params
    body: {
        // 参数的属性值，用哪些规则校验
        username,
        password
    }
}

// 导出校验规则-修改用户信息
exports.update_userinfo_schema = {
    body: {
        id,
        nickname,
        email
    }
}

// 导出校验规则-重置密码
exports.update_password_schema = {
    body: {
        oldPwd: password,
        newPwd: joi.not(joi.ref('oldPwd')).concat(password)
    }
}

// 导出校验规则-更换头像
exports.update_avatar_schema = {
    body: {
        avatar
    }
}