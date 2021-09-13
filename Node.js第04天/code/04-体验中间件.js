const express = require('express')
const app = express()

// 第一种
function middleWare(req, res, next) {
    console.log('我是第一个中间件');
    next();
}

app.use(middleWare)

// 第二种
app.use(function (req, res, next) {
    console.log("我是第二个中间件");
    next()
})

app.get('/user/list', function (req, res) {
    res.send('获取成功')
})

app.post('/user/add', function (req, res) {
    res.send('添加成功')
})

app.listen(3006, function () {
    console.log('http://localhost:3006');
})