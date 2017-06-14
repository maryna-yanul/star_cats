<template>
  <div class="cat">
    <h1 class="title">Chat</h1>

  </div>
</template>

<script>
  export default {
    name: 'Cat',
    data () {
      const planetName = this.$route.params.planet || '';
      return {
        name:  planetName,
      }
    }
  }
</script>

<style lang="scss">
  .chat {
    background-color: #192A49;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .title {
      color: #fff;
      text-align: center;
      margin-top: 100px;
      padding: 0 10px;
    }
  }
</style>
