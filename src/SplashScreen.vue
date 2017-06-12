<template>
  <div class="splash-screen">
    <div class="bg-icons" />
    <h1 class="title">Star Cats</h1>
  </div>
</template>

<style lang="scss">
  @keyframes animatedBackground {
    0% {
      background-position: 0 5000px;
    }
    100% {
      background-position: -10000px -5000px;
    }
  }

  h1, h2 {
    font-weight: normal;
  }

  .splash-screen,
  .bg-icons {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .splash-screen {
    background: #003268;
    background: -moz-linear-gradient(-45deg, #003268 0%, #770073 100%);
    background: -webkit-linear-gradient(-45deg, #003268 0%,#770073 100%);
    background: linear-gradient(135deg, #003268 0%,#770073 100%);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg-icons {
    background-image: url('assets/icons.svg');
    background-size: contain;
    animation: animatedBackground 200s linear infinite;
  }

  .title {
    color: #fff;
    font-size: 100px;
    font-weight: bold;
  }
</style>
