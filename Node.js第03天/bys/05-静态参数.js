const express = require('express')
const app = express()

app.use(express.static('./clock'))
app.use('/files', express.static('./files'))

app.listen(3006, function () {
    console.log('启动');
})