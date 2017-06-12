import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Demo1 from './Demo1.vue'
import SplashScreen from './SplashScreen.vue'
import ChoosePlanet from './ChoosePlanet.vue'
import Login from './Login.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: App },
  { path: '/demo1', component: Demo1 },
  { path: '/splash-screen', component: SplashScreen },
  { path: '/choose-planet', component: ChoosePlanet },
  { path: '/login', component: Login },

]

const router = new VueRouter({
  routes // short for routes: routes
})


new Vue({
  router
}).$mount('#app')
