// 0. 项目初始化:    npm  init  -y
// 1. 安装express:  npm i express@4.17.1

// 2.导入
const express = require('express');
// 3.创建
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))



// 创建简单路由 - (路由也是中间件，后面讲，只不过路由不用写next)

app.post('/user/add', (req, res) => {
    res.send(req.body);
})

// 4.监听
app.listen(3006, function () {
    console.log('http://localhost:3006');
});
