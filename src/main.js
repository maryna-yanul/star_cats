import Vue from 'vue'
import VueRouter from 'vue-router'
import { firebase } from './firebase'

import App from './App.vue'
import Demo1 from './Demo1.vue'
import SplashScreen from './SplashScreen.vue'
import ChoosePlanet from './ChoosePlanet.vue'
import Login from './Login.vue'
import Cat from './Cat.vue'
import Sun from './Sun.vue'
import Chat from './Chat.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: App },
  { path: '/demo1', component: Demo1 },
  { path: '/splash-screen', component: SplashScreen },
  { path: '/choose-planet', component: ChoosePlanet, props: true },
  { path: '/login', component: Login },
  { path: '/cat', component: Cat, props: true },
  { path: '/cat/:planet', component: Cat, props: true },
  { path: '/cat/:planet/chat', component: Chat, props: true },
  { path: '/sun', component: Sun, props: true },

]

const router = new VueRouter({
  mode: 'history',
  routes // short for routes: routes
})


new Vue({
  router
}).$mount('#app')
