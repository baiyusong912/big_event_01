const express = require('express')
const app = express()

// 普通挂载
// const router = require('./03-router')
// app.use(router);

// 路由前缀挂载
app.use('/my', require('./03-router'))


app.listen(3006, function () {
    console.log('http://localhost:3006');
})