const express = require('express')
const app = express()
app.get('/get/:id/:age', function (req, res) {
    res.send(`ID是：${req.params.id},年龄：${req.params.age}`)
})
app.listen(3006, function () {
    console.log('启动');

})