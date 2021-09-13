const http = require("http")
const server = http.createServer()
server.on('request', function (req, res) {
    console.log(req.method);
    console.log(req.url);
    res.end(`Your request method is ${req.method},url is ${req.url}`)
})
server.listen(3006, function () {
    console.log('服务器已启动');
})