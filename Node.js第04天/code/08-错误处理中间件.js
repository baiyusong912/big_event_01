// 0. 项目初始化:    npm  init  -y
// 1. 安装express:  npm i express@4.17.1

// 2.导入
const express = require('express');
// 3.创建
const app = express();





// 创建简单路由 - (路由也是中间件，后面讲，只不过路由不用写next)
app.get('/user/list', (req, res) => {
    // 错误一
    // const num = 1;
    // num = 2;
    // 错误二
    throw new Error('自定义错误')
    res.send('获取用户列表成功！');
})


app.use((err, req, res, next) => {
    res.send('程序出现错误，已停止，错误信息为：' + err.message)
})

// 4.监听
app.listen(3006, function () {
    console.log('http://localhost:3006');
});
