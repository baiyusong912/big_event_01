// 0. 项目初始化:    npm  init  -y
// 1. 安装express:  npm i express@4.17.1

// 2.导入
const express = require('express');
// 3.创建
const app = express();

function mv1(req, res, next) {
    console.log('我是局部中间件01');
    next()
}
function mv2(req, res, next) {
    console.log('我是局部中间件02');
    next()
}


// 创建简单路由 - (路由也是中间件，后面讲，只不过路由不用写next)
app.get('/user/list', mv1, mv2, (req, res) => {
    res.send('获取用户列表成功！');
})
app.post('/user/add', (req, res) => {
    res.send('添加用户成功！');
})

// 4.监听
app.listen(3006, function () {
    console.log('http://localhost:3006');
});
