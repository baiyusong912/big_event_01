const fs = require('fs');

fs.readFile('01-node.js体验11.js', 'utf8', (err, data) => {
    // 如果读取正常返回null，读取错误返回object
    console.log(err);
    console.log('---------------------');
    // 如果读取错误参数返回undefined
    console.log(data);
})

console.log('读取文件是异步操作');