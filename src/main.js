import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Dashboard from './components/dashboard/Dashboard.vue'
import Edit from './components/dashboard/Edit.vue'
import App from './App.vue'

window.bus = new Vue()

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/dashboard/:bid', name: 'edit', component: Edit }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el:"#app",
  router,
  render: h => h(App)
})