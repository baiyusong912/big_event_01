const moment = require('moment')

// let time = moment().format()
// console.log(time);

// let time = moment().format('YYYY-MM-DD HH:mm:ss')
// console.log(time);

let oldTime = new Date('2001-01-01')
let time = moment(oldTime).format('YYYY-MM-DD HH:mm:ss')
console.log(time);