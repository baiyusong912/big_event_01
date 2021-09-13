// 导入数据库模块
const db = require('../db/index')

// 获取文章分类列表处理函数
exports.getArticleCates = function (req, res) {
    const sql = 'select * from ev_article_cate where is_delete=0'
    db.query(sql, function (err, results) {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '获取文章分类列表成功',
            data: results
        })
    })
}

// 添加文章分类处理函数
exports.addArticleCates = function (req, res) {
    // 定义SQL
    const sql = 'select * from ev_article_cate where name=? or alias=?'
    // 执行SQL
    db.query(sql, [req.body.name, req.body.alias2], function (err, results) {
        // 判断SQL
        if (err) return res.cc(err)
        // 简单判断有没有找到查询结果
        // if (results.length !== 0) return res.cc('分类名称和分类别名被占用')
        // 判断每一种属性被占用情况，两个分别被占用
        if (results.length == 2) return res.cc('分类名称和分类别名被占用')
        // 判断每一种属性被占用情况，两个被同一条数据占用
        if (results.length == 1 && results[0].name == req.body.name && results[0].alias == req.body.alias) return res.cc('分类名称和分类别名被占用')
        // 判断每一种属性被占用情况，name被占用，alias未被占用
        if (results.length == 1 && results[0].name == req.body.name) return res.cc('分类名称被占用')
        // 判断每一种属性被占用情况，alias被占用，name未被占用
        if (results.length == 1 && results[0].alias == req.body.alias) return res.cc('分类别名被占用')
        // 添加文章分类到数据库
        const sql = 'insert into ev_article_cate set ?'
        db.query(sql, req.body, function (err, results) {
            // 判断错误
            if (err) return res.cc(err)
            if (results.affectedRows !== 1) return res.cc('添加文章分类失败！')
            res.cc('添加文章分类成功！', 0)
        })
    })
}

// 根据id删除文章分类处理函数
exports.deleteCateById = function (req, res) {
    const sql = 'update ev_article_cate set is_delete=1 where id=?'
    db.query(sql, req.params.id, function (err, results) {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('删除文章分类失败！')
        res.cc('删除文章分类成功！', 0)
    })
}

// 根据id获取文章分类处理函数
exports.getArtCateById = function (req, res) {
    const sql = 'select * from ev_article_cate where id=?'
    db.query(sql, req.params.id, function (err, results) {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('根据id获取文章分类失败！')
        res.send({
            status: 0,
            message: '根据id获取文章分类成功',
            data: results[0]
        })
    })
}

// 根据id修改文章分类处理函数
exports.updateCateById = function (req, res) {
    const sql = 'select * from ev_article_cate where id!=? and (name=? or alias=?)'
    db.query(sql, [req.body.Id, req.body.name, req.body.alias], function (err, results) {
        if (err) return res.cc(err)
        if (results.length == 2) return res.cc('分类名称和分类别名被占用')
        if (results.length == 1 && results[0].name == req.body.name && results[0].alias == req.body.alias) return res.cc('分类名称和分类别名被占用')
        if (results.length == 1 && results[0].name == req.body.name) return res.cc('分类名称被占用')
        if (results.length == 1 && results[0].alias == req.body.alias) return res.cc('分类别名被占用')
        const sql = 'update ev_article_cate set ? where id=?'
        db.query(sql, [req.body, req.body.Id], function (err, results) {
            if (err) return results.cc(err)
            if (results.affectedRows !== 1) return res.cc('更新文章分类失败！')
            res.cc('更新文章分类成功！', 0)
        })
    })
}