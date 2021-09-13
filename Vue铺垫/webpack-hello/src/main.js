import $ from 'jquery'

$(function() {
    $('#app1 li:nth-child(odd)').css('color', 'red')
})

import './css/li.css'

import './less/index.less'

import imgUrl from './assets/big.gif'
const theImg = document.createElement('img')
theImg.src = imgUrl
document.body.appendChild(theImg)

import './assets/fonts/iconfont.css'


const fn = () => {
    console.log('你好');
}
console.log(fn);

import App from './App.vue' // 根vue文件
import Vue from 'vue' // 引入vue.js对象

new Vue({
    el: "#app", // 把vue文件的标签结构 -> 挂载到id为app的标签里
    render: (h) => h(App) // id叫app位置替换成App组件里标签
})