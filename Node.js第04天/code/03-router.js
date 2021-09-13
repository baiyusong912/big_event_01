const express = require('express')
const router = express.Router()

router.get('/user/list', function (req, res) {
    res.send('获取用户信息成功！');
})
router.post('/user/add', function (req, res) {
    res.send('添加用户信息成功！');
})
module.exports = router;