<template>
<div class="pure-container">
  <div class="container">
      <div class="column is-3">
        <p class="control has-icon">
          <input class="input is-medium mont" id="email" type="email" placeholder="Email">
          <i class="fa fa-envelope"></i>
        </p>
      </div>
      <div class="column is-3">
        <p class="control has-icon">
          <input class="input is-medium mont" id="password" type="password" placeholder="Password">
          <i class="fa fa-lock"></i>
        </p>
      </div>
      <div class="column is-3">
        <p class="control has-icon login">
          <a class="button is-primary is-medium mont" id="login">
            <span class="icon">
              <i class="fa fa-sign-in"></i>
            </span>
            <span>Login</span>
          </a>
        </p>
      </div>
      <responses></responses>
  </div>
</div>
</template>

<script>
import Responses from './Responses.vue'

export default {
  name: 'login',
  data () {
    return {name:'login'}
  },
  updated(){
    window.bus.$emit('route-change','/login')
  },
  created(){
    window.bus.$emit('route-change','/login')
  },
  components:{
    'responses':Responses
  }
}
</script>

<style>

/* Horizontally center forms */
.container > .column {
  margin-left: auto;
  margin-right:auto;
}

/* Vertically center forms */
.container {
  margin-top: 8%;
}

/* Horizontally center login button */
.login {
  text-align: center;
}

/* Login button colors */
.login > .button{
  background-color: #5b5a5a;
}

.login > .button:hover, .login > .button:focus{
  background-color: #363636;
}
</style>