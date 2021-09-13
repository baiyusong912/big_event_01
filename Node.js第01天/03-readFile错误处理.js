const fs = require('fs');

fs.readFile('01-node.js体验.js', 'utf8', (err, data) => {
    if (err) {
        return console.log('文件读取错误，错误信息：' + err.message);
    }
    console.log('文件读取到的内容：' + data);
})