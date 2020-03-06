import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from '../App.vue'
import loginCom from '../loginCom.vue'
import registerCom from '../registerCom.vue'
export default  new VueRouter({
  routes: [
    { path: '/app',
      component: App,
      children: [
        { path: 'login', component: loginCom },
        { path: 'register', component: registerCom }
      ]
    }
  ]
})
