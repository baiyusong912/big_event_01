// 导入
const { required } = require('@hapi/joi')
const express = require('express')

// 创建路由实例
const router = express.Router()

// 导入路由处理模块
const artcate_handler = require('../router_handler/artcate')

// 导入规则模块和规则使用模块
const { add_cate_schema, delete_cate_schema, get_cate_schema, update_cate_schema } = require('../schema/artcate')
const expressJoi = require('@escook/express-joi')

// 获取文章分类列表路由
router.get('/cates', artcate_handler.getArticleCates)
// 添加文章分类路由
router.post('/addcates', expressJoi(add_cate_schema), artcate_handler.addArticleCates)
// 根据id删除文章分类路由
router.get('/deletecate/:id', expressJoi(delete_cate_schema), artcate_handler.deleteCateById)
// 根据id获取文章分类路由
router.get('/cates/:id', expressJoi(get_cate_schema), artcate_handler.getArtCateById)
// 根据id修改文章分类路由
router.post('/updatecate', expressJoi(update_cate_schema), artcate_handler.updateCateById)

// 导出
module.exports = router