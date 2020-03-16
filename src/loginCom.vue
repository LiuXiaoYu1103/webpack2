<template>
<div>
  <div class="login">登录单独组件</div>
  <span class="glyphicon glyphicon-export" aria-hidden="true"></span>
  <button type="button" class="btn btn-default">Default</button>
  <div class="input-group">
    <span class="input-group-addon" id="basic-addon1">@</span>
    <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
  </div>
</div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
export default {
  name: 'loginCom'
}
</script>
<style scoped>
  .login {
    width: 100px;
    height: 100px;
    background-color: aquamarine;
  }
</style>
