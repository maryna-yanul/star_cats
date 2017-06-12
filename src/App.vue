<template>
  <div id="app">
    <h2>Routes</h2>
    <router-link to="/demo1">Go to Demo1</router-link>
    <router-link to="/splash-screen">Go to Splash Screen</router-link>
    <router-link to="/choose-planet">Go to Choose the Planet</router-link>
    <router-link to="/login">Go to Login</router-link>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
