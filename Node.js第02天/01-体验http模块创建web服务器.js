const http = require('http')
const server = http.createServer()

server.on('request', function (req, res) {
    console.log('有人访问');
    res.end('Hello,everybody!')
})
server.listen(3006, function () {
    console.log('服务器已开启，请访问http://localhost:3006/');

})