import Vue from 'vue'
import VueRouter from 'vue-router'
import { firebase } from './firebase'
import 'firebase/auth';
import VueFire from 'vuefire'

import App from './App.vue'
import Demo1 from './Demo1.vue'
import SplashScreen from './SplashScreen.vue'
import ChoosePlanet from './ChoosePlanet.vue'
import Login from './Login.vue'
import Cat from './Cat.vue'
import Sun from './Sun.vue'
import Chat from './Chat.vue'
import DogsPlanet from './DogsPlanet.vue'

Vue.use(VueRouter)
Vue.use(VueFire)

const routes = [
  { path: '/', component: App },
  { path: '/demo1', component: Demo1 },
  { path: '/splash-screen', component: SplashScreen },
  { path: '/login', component: Login },
  { path: '/choose-planet', component: ChoosePlanet, props: true, ifNoLogin },
  { path: '/cat', component: Cat, props: true, ifNoLogin },
  { path: '/cat/:planet', component: Cat, props: true, ifNoLogin },
  { path: '/cat/:planet/chat', component: Chat, props: true, ifNoLogin },
  { path: '/sun', component: Sun, props: true, ifNoLogin },
  { path: '/dogs-planet', component: DogsPlanet, ifNoLogin },
]

const ifNoLogin = firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    router.push({ path: '/login' });
  }
});

const router = new VueRouter({
  ifNoLogin,
  mode: 'history',
  routes // short for routes: routes
})



new Vue({
  router
}).$mount('#app')
