const express = require('express')

const app = express()

app.use(function (req, res, next) {
    res.time = new Date()
    next()
})
app.get('/user/list', function (req, res) {
    res.send('获取成功' + res.time)
})
app.post('/user/add', function (req, res) {
    res.send('提交成功' + res.time)
})
app.listen(3006, function () {
    console.log('http://localhost:3006');
})
