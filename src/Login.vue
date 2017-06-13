<template>
  <div class="login">
    <h1 class="title" v-if="this.registration">{{textRegistration}}</h1>
    <h1 class="title" v-else>{{textLogin}}</h1>
    <div class="soc-icons">
      <span class="facebook" v-on:click="userSignOut()" />
      <span class="google" />
    </div>
    <form class="login-form">
      <input
        id="email"
        class="input-field"
        type="email"
        name="email"
        placeholder="Email"
      >
      <input
        id="password"
        class="input-field"
        type="password"
        name="password"
        placeholder="Password"
      >
      <div v-if="this.registration" class="next-btn" v-on:click="handleSignUp()">
        <div class="button" type="button" name="button">Sign Up</div>
      </div>
      <div v-else class="next-btn" v-on:click="toggleSignIn()">
        <div class="button" type="button" name="button">Log In</div>
      </div>
    </form>
      <div class="choose-auth-form">
        Go to
        <span v-if="this.registration" v-on:click="toggleAuthFormLogin()">{{textLogin}}</span>
        <span v-else v-on:click="toggleAuthFormRegistration()">{{textRegistration}}</span>
      </div>
  </div>
</template>

<script>
  import firebase from 'firebase/app';
  import 'firebase/auth';

  export default {
    name: 'Login',
    data () {
      return {
        textRegistration: 'registration',
        textLogin: 'login',
        registration: false
      }
    },
    methods: {
      toggleAuthFormRegistration() {
        this.registration = true;
      },

      toggleAuthFormLogin() {
        this.registration = false;
      },

      userSignOut() {
       firebase.auth().signOut();
      },

      handleSignUp() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
        });
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            console.log(user)
            this.$router.push({ path: '/choose-planet' });
          }
        });
      },

      toggleSignIn() {
        if (firebase.auth().currentUser) {
          // [START signout]
          firebase.auth().signOut();
          // [END signout]
        } else {
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          if (email.length < 4) {
            alert('Please enter an email address.');
            return;
          }
          if (password.length < 4) {
            alert('Please enter a password.');
            return;
          }
          // Sign in with email and pass.
          // [START authwithemail]
          firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
          });
          firebase.auth().onAuthStateChanged(user => {
            if (user) {
              this.$router.push({ path: '/choose-planet' });
            }
          });
        }
      }
    }
  }
</script>

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
      text-transform: capitalize;
    }
    .choose-auth-form {
      color: #fff;
      text-align: center;
      font-size: 50px;
      margin-top: 100px;
      span {
        text-decoration: underline;
      }
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
      width: 80%;
      border-radius: 15px;
      text-align: center;
      padding: 20px 30px;
      background-color: #550e5e;
      margin-top: 25px;
      .button {
        font-size: 55px;
        color: #fff;
      }
    }
  }
</style>
