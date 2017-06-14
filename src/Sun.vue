<template>
  <div class="sun">
    <h1 class="title">You burnt out!</br>The <span class="cat-name">Sun</span> is a star</h1>
    <img src="/src/assets/sun.jpg" alt="sun">
  </div>
</template>

<style lang="scss">
  .sun {
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
      height: 60%;
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
