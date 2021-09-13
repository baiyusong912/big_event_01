const express = require('express')
const app = express()

app.get('/jsonp', function (req, res) {
    const fnName = req.query.callback
    const str = JSON.stringify({ a: 1, b: 2 })
    setTimeout(function () {
        res.send(`${fnName}(${str})`)
    }, 20000)
})

const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use('/api', require('./02-router'))

app.listen(80, function () {
    console.log('http://localhost');
})