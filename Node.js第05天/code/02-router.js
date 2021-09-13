const express = require('express')
const router = express.Router()

router.get('/get', function (req, res, next) {
    const query = req.query
    res.send({
        status: 0,
        message: 'get请求成功',
        data: query
    })
})
router.post('/post', function (req, res, next) {
    const body = req.body
    res.send({
        status: 0,
        message: 'post请求成功',
        data: body
    })
})
router.delete('/delete', function (req, res, next) {
    res.send('delete请求成功')
})


module.exports = router