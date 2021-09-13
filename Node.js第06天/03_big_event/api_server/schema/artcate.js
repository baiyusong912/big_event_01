// 导入
const joi = require('@hapi/joi')

// 定义添加文章分类规则
const name = joi.string().required()
const alias = joi.string().alphanum().required()

// 定义删除文章分类规则
const id = joi.number().integer().min(1).required()

// 导出添加文章分类规则
exports.add_cate_schema = {
    body: {
        name,
        alias
    }
}

// 导出删除文章分类规则
exports.delete_cate_schema = {
    params: {
        id
    }
}

// 导出获取文章分类规则
exports.get_cate_schema = {
    params: {
        id
    }
}

// 导出修改文章分类规则
exports.update_cate_schema = {
    body: {
        Id: id,
        name,
        alias
    }
}