// 入口文件
import Vue from 'vue'
import App from './App.vue'
// 样式需要单独引入
import 'mint-ui/lib/style.css'
import './lib/css/mui.css'

import { Header } from 'mint-ui'
Vue.component(Header.name, Header)



var vm = new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})