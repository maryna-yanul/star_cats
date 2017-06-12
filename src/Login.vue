<template>
  <div class="login">
    <h1 class="title">Go to project</h1>
    <div class="soc-icons">
      <span class="facebook" />
      <span class="google" />
    </div>
    <form class="login-form">
      <input
        class="input-field"
        type="email"
        name="email"
        placeholder="Email"
      >
      <input
        class="input-field"
        type="password"
        name="password"
        placeholder="Password"
      >
      <input
        class="input-field"
        type="password"
        name="password-repeat"
        placeholder="Repeat Password"
      >
    </form>
    <div class="next-btn">
      <button type="button" name="button">Next -> </button>
    </div>
  </div>
</template>

<style lang="scss">
  .login {
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

    .soc-icons {
      text-align: center;
    }

    .facebook, .google {
      display: inline-flex;
      width: 200px;
      height: 200px;
      background-size: contain;
      background-repeat: no-repeat;
      margin: 0 30px;
    }

    .facebook {
      background-image: url('assets/facebook.svg');
    }

    .google {
      background-image: url('assets/google-plus.svg');
    }

    .login-form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 100px;

      .input-field {
        width: 80%;
        height: 150px;
        border-radius: 15px;
        border: 1px solid #000;
        margin: 10px;
        font-size: 75px;
        padding: 0 30px;
        color: #b4b4b4;
        &::placeholder {
          color: #ccc;
          font-weight: 300;
        }
        &:active, &:focus {
          color: #000;
          outline: none;
          background-color: #faffbd;
        }
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
      button {
        font-size: 70px;
        color: #fff;
      }
    }
  }
</style>
