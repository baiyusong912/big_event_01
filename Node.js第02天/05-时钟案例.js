const http = require('http')
const path = require('path')
const fs = require('fs')
const server = http.createServer()
server.on('request', function (req, res) {
    // let url = req.url;
    // url = path.join(__dirname, url)
    let url = req.url;
    if (url == '/') url = '/index.html'
    url = path.join(__dirname, 'clock', url)
    // res.setHeader('Content-Type', 'text/html;charset=utf8')
    fs.readFile(url, function (err, data) {
        if (err) {
            res.setHeader('Content-Type', 'text/html;charset=utf8')
            res.end('<h2>404 Not Found</h2>')
            return
        }
        res.end(data)
    })
})
server.listen(3006, function () {
    console.log('服务器已启动：欢迎访问');
})