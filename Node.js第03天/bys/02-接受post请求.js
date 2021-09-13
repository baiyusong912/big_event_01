const express = require('express')
const app = express()
app.post('/post', function (req, res) {
    res.send('提交成功')
})
app.listen(3006, function () {
    console.log('服务器已启动');
})