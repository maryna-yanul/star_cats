<template>
  <div class="choose-planet">
    <h1 class="title">Choose the Planet</h1>
    <img src="/src/assets/planets.svg" alt="planets" />
    <div class="next-btn">
      <button type="button" name="button">Next -> </button>
    </div>
  </div>
</template>

<style lang="scss">
  .choose-planet {
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
    }

    img {
      width: 80%;
      margin: 0 auto;
      display: block;
      height: 68%;
    }

    .next-btn {
      position: absolute;
      bottom: 0px;
      left: 0;
      right: 0;
      text-align: center;
      padding: 30px;
      background-color: #550e5e;
      button {
        font-size: 70px;
        color: #fff;
      }
    }
  }
</style>
