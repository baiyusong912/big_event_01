// 导入模块
const fs = require('fs')
const path = require('path')
// 定义正则
let styleReg = /<style>([\s\S]+)<\/style>/;
let scriptReg = /<script>([\s\S]+)<\/script>/;
// 读取路径
let url = path.join(__dirname, '/data/index.html')
// 读取文件
fs.readFile(url, 'utf8', function (err, data) {
    if (err) {
        return console.log('文件读取错误：' + err.message);
    }
    resolveCSS(data);
    resolveJS(data);
    resolveHTML(data);
})
// 封装css文件写入
function resolveCSS(htmlStr) {
    let res = styleReg.exec(htmlStr)
    let cssUrl = path.join(__dirname, './clock/index.css')
    fs.writeFile(cssUrl, res[1], function (err) {
        if (err) {
            return console.log('文件写入错误：' + err.message);
        }
        console.log('文件写入成功');
    })
}
// 封装js文件写入
function resolveJS(htmlStr) {
    let res = scriptReg.exec(htmlStr)
    let jsUrl = path.join(__dirname, './clock/index.js')
    fs.writeFile(jsUrl, res[1], function (err) {
        if (err) {
            return console.log('文件写入错误：' + err.message);
        }
        console.log('文件写入成功');
    })
}
// 封装html文件写入
function resolveHTML(htmlStr) {
    let res = htmlStr.replace(styleReg, '<link rel="stylesheet" href="./index.css">')
        .replace(scriptReg, '<script src="./index.js"></script>')
    let htmlUrl = path.join(__dirname, './clock/index.html')
    fs.writeFile(htmlUrl, res, function (err) {
        if (err) {
            return console.log('文件写入错误：' + err.message);
        }
        console.log('文件写入成功');
    })
}