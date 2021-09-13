const fs = require('fs')

fs.writeFile('./data/123.txt', '我是writeFile写入的', (err) => {
    if (err) {
        return console.log('文件写入错误：' + err.message);
    }
    console.log('恭喜您写入成功！');
})