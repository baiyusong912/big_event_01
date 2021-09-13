const express = require('express')
const app = express()
app.get('/getbooks', function (req, res) {
    res.send('获取图书成功！');
})
app.post('/addbook', function (req, res) {
    res.send('添加图书成功');
})
app.listen(3006, function () {
    console.log('http://localhost:3006');
})