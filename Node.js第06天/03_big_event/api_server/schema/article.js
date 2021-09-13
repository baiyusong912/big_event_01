// 导入
const joi = require('@hapi/joi')

// 定义发布文章规则
const title = joi.string().required()
const cate_id = joi.number().integer().min(1).required()
const content = joi.string().required().allow('')
const state = joi.string().valid('草稿', '已发布').required()

// 导出校验规则
exports.add_article_schema = {
    body: {
        title,
        cate_id,
        content,
        state
    }
}