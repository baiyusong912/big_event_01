// 导入
const express = require('express')

// 创建路由实例
const router = express.Router()

// 导入发布文章处理函数
const article_handler = require('../router_handler/article')

// 导入multer
const multer = require('multer')
const path = require('path')
// 设置上传图片的目标目录
const upload = multer({ dest: path.join(__dirname, '../uploads') })

// 导入校验规则模块
const { add_article_schema } = require('../schema/article')
const expressJoi = require('@escook/express-joi')

// 定义发布文章路由模块
router.post('/add', upload.single('cover_img'), expressJoi(add_article_schema), article_handler.addArticle)

// 导出
module.exports = router