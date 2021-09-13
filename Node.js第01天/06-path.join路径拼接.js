const fs = require('fs')

const path = require('path')

let url = path.join(__dirname, '01-node.js体验.js')

fs.readFile(url, 'utf8', function (err, data) {
    if (err) {
        return console.log(err.message);
    }
    console.log(data);
})