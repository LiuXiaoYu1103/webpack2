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