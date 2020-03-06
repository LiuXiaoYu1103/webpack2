// 导入jq es6中导入的方式
import Vue from 'vue'
import router from './router'
import MintUI from 'mint-ui'
import $ from 'jquery'
import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'

import './css/index.css'
import './css/index.less'
import './css/index.scss'

import loginCom from './loginCom.vue'
Vue.use(MintUI)
// var $ = require('jquery')
$(function() {
  $('li:odd').css('backgroundColor', 'green')
  $('li:even').css('backgroundColor', 'red')
})

// es6语法
class Person {
  static info = { name: 'ls', age: 12 }
}

console.log(Person.info)


var login = {
  template: '<h1>登录</h1>'
}

var vm = new Vue({
  el: '#app',
  router,
  data: {
    msg: '123'
  },
  components: {
    login,
    loginCom
  }
})