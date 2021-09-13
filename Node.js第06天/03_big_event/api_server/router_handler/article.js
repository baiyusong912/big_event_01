const { date } = require('@hapi/joi')
const path = require('path')

// 导入
const db = require('../db/index')

// 发布文章处理函数
exports.addArticle = function (req, res) {
    // 手动校验cover_img
    // if (req.file == undefined || req.file.fieldname == undefined)
    if (!req.file || req.file.fieldname !== 'cover_img') return res.cc('文章封面上传失败！')
    const articleInfo = {
        ...req.body,
        pub_date: new Date(),
        author_id: req.user.id,
        cover_img: path.join('/uploads', req.file.fieldname)
    }
    const sql = 'insert into ev_articles set ?'
    db.query(sql, articleInfo, function (err, results) {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('文章发布失败！')
        res.cc('文章发布成功！', 0)
    })
}