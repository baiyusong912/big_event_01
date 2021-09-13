const querystring = require('querystring')

function fn(req, res, next) {
    let str = ''
    req.on('data', chunk => {
        str += chunk
    })
    req.on('end', () => {
        const obj = querystring.parse(str)
        req.body = obj
        console.log(obj);
        next()
    })
}

module.exports = fn