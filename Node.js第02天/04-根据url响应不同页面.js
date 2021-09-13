const http = require('http')
const server = http.createServer()
server.on('request', function (req, res) {
    let url = req.url
    let content = '';
    if (url === '/' || url === '/index.html') {
        content = '<h2>首页</h2>'
    } else if (url === '/about.html') {
        content = '<h2>关于</h2>'
    } else {
        content = '<h2>404 Not Found</h2>'
    }
    res.setHeader('Content-Type', 'text/html;charset=UTF-8')
    res.end(content)
})
server.listen(3006, function () {
    console.log('服务器已开启');
})