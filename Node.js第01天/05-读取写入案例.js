const fs = require('fs')

fs.readFile('./成绩.txt', 'utf8', function (err, txt) {
    if (err) {
        return console.log('文件读取错误：' + err.message);
    }
    console.log(txt);
    let str = txt.replace(/=/g, '：').replace(/\s/g, '\n')
    fs.writeFile('成绩-ok.txt', str, function (err) {
        if (err) {
            return console.log('文件写入错误：' + err.message);
        }
        console.log('写入成功！');
    })
})

