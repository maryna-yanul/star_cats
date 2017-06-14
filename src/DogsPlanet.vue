<template>
  <div class="dogs-planet">
    <h1 class="title">This planet is already occupied by</br><span class="cat-name">Dogs!</span></h1>
    <img src="src/assets/dog.jpg" alt="cat">
  </div>
</template>

<style lang="scss">
  .dogs-planet {
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
      height: 35%;
      &.Pluto {
        height: 10%;
        margin-top: 30%;
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
