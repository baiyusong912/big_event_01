const express = require('express')
const app = express()
app.get('/get', function (req, res) {
    res.send('Hello,everybody!欢迎来到狂欢Patty')
})
app.listen(3006, function () {
    console.log('服务器已开启：请访问http://localhost:3006/get');
})