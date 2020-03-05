// 导入jq es6中导入的方式
import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'
// var $ = require('jquery')
$(function() {
  $('li:odd').css('backgroundColor', 'green')
  $('li:even').css('backgroundColor', 'red')
})

class Person {
  static info = { name: 'ls', age: 12 }
}

console.log(Person.info)

import Vue from 'vue'
import loginCom from './loginCom.vue'

var login = {
  template: '<h1>登录</h1>'
}

var vm = new Vue({
  el: '#app',
  data: {
    msg: '123'
  },
  components: {
    login,
    loginCom
  }
})