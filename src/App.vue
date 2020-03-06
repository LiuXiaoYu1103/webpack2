<template>
<div>
  <router-link to='/app/login'>登录页</router-link>
  <router-link to='/app/register'>注册页</router-link>
  <router-view></router-view>
</div>
</template>
<script>
import login from './loginCom.vue'
import register from './registerCom.vue'
// 每个类中都有个constructor 函数 实例new 是调用constructor用来传参数   继承中的 super函数 是自雷constructor中调用的父的constructor

// super放在constructor 调用的是父类的constructor
// 放在普通函数中可以调用父类的方法
class Person {
  constructor (name, age, x, y) {
    this.name = name,
    this.age = age,
    this.x = x,
    this.y = y
  }
  sing (sing) {
    console.log(sing)
  }
  sum () {
    return this.x + this.y
  }
  write () {
    return '我是父亲'
  }
}
class Son extends Person {
  constructor (name, age, x, y, sex) {
    super (name, age, x, y)
    // this.sex = 'girl'
  }
  write () {
    console.log(super.write() + '的儿子')
  }
}
var pesonL = new Person('刘德华', '14')
var pesonZ = new Person('张学友', '18')
var son = new Son('haha', 1, 2, 3, 'girl')
son.write()
console.log(son)
console.log(son.sum())
console.log(pesonL.name)
pesonZ.sing('吻别')
export default {
  name: 'App',
  components: {
    login,
    register
  }
}
</script>