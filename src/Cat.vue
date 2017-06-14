<template>
  <div class="cat">
    <h1 class="title">Congratulations, you're a member of the <span class="cat-name">{{name}}</span></h1>
    <img :src="imgUrl" alt="cat" :class="name">
    <div class="next-btn" v-on:click="clickPlanet(name)">
      <div class="button" type="button" name="button">Start planet chat -> </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cat',
    data () {
      const planetName = this.$route.params.planet || '';
      return {
        name:  planetName,
        imgUrl: `/src/assets/${planetName}.png`,
      }
    },
    methods: {
      clickPlanet() {
        this.$router.push({
          path: `/cat/${this.$route.params.planet}/chat`,
          params: { name: this.$route.params.planet }
        });
      }
    }
  }
</script>

<style lang="scss">
  .cat {
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
    .cat-name {
      color: #d41eec;
    }

    img {
      margin: 0 auto;
      display: block;
      width: auto;
      padding: 15px;
      height: 45%;
      &.Pluto {
        height: 10%;
      }
    }

    .next-btn {
      position: absolute;
      bottom: 0px;
      left: 0;
      right: 0;
      text-align: center;
      padding: 30px;
      background-color: #550e5e;
      .button {
        font-size: 70px;
        color: #fff;
      }
    }
  }
</style>
