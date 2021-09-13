// 封装template的函数
function template(id, data) {
    let str = document.getElementById(id).innerHTML;
    let reg = /{{\s*([a-zA-Z]+)\s*}}/;
    let res;
    while (res = reg.exec(str)) {
        str = str.replace(res[0], data[res[1]])
    }
    return str;
}

function resolveData(obj) {
    let arr = [];
    for (var k in obj) {
        arr.push(`${k}=${obj[k]}`)
    }
    return arr.join('&')
}
// 封装ajax
function itheima(options) {
    let xhr = new XMLHttpRequest();
    let qs = resolveData(options.data);
    if (options.method.toUpperCase() == 'GET') {
        xhr.open('GET', options.url + '?' + qs);
        xhr.send();
    } else if (options.method.toUpperCase() == 'POST') {
        xhr.open('POST', options.url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let obj = JSON.parse(xhr.responseText)
            options.success(obj)
        }
    }
}

