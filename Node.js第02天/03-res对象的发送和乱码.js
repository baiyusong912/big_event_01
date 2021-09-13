const http = require('http')
const server = http.createServer()
server.on('request', function (req, res) {
    res.setHeader('Content-Type', 'text/html;charset=UTF-8')
    res.end('<h2>我是一个标签</h2>')
})
server.listen(3006, function () {
    console.log('服务器已开启');
})