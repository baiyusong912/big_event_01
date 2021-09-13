const express = require('express')
const app = express()
app.get('/get', function (req, res) {
    res.send(`您输入的账户名是：${req.query.username}，密码是：${req.query.password}`)
})
app.listen(3006, function () {
    console.log('服务器已成功启动');
})