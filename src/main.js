import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Demo1 from './Demo1.vue'
import Demo2 from './Demo2.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: App },
  { path: '/demo1', component: Demo1 },
  { path: '/demo2', component: Demo2 }
]

const router = new VueRouter({
  routes // short for routes: routes
})


new Vue({
  router
}).$mount('#app')
