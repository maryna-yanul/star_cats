<template>
  <div class="chat">
    <h1 class="title">{{name}}</h1>
    <div class="message-container" id="scroll">
      <div class="message-list">
        <ul class="messages">
          <li v-for="message in messages">
            <div class="message current-user" v-if="currentUserId === message.userId">
              <span><small>{{formatDate(message.date)}}</small></span>
              <p>{{message.text}}</p>
            </div>

            <div class="message cats" v-else>
              <span><small>{{message.date}}</small></span>
              <p>{{message.text}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <form class="message-types" v-on:submit.prevent="addMessage" ref="form">
      <div>
        <textarea
          ref="msgIpt"
          class="message-input"
          type="text"
          id="msgIpt"
          placeholder="Message"
          autofocus
        />
      </div>
      <button type="submit" name="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  import firebase from 'firebase/app';
  import 'firebase/auth';
  import moment from 'moment';

  export default {
    name: 'Cat',
    updated() {
      // console.log(document.getElementById('scroll').scrollTop);
    },
    firebase() {
      const planetName = this.$route.params.planet || '';
      return {
        messages: firebase.database().ref().child('messages').orderByChild('planetName').equalTo(planetName),
      }
    },
    data() {
      const planetName = this.$route.params.planet || '';
      return {
        name:  planetName,
        currentUserId: firebase.auth().currentUser.uid,
      }
    },
    methods: {
      formatDate(date) {
        return moment(date).fromNow();
      },
      addMessage() {
        const { uid: userId } = firebase.auth().currentUser || {};
        const { value: text } = this.$refs.msgIpt;
        const { name: planetName } = this.$data;
        const date = new Date();
        const { key: messageId } = firebase.database().ref().child('messages').push();

        firebase.database().ref().update({
          [`/messages/${messageId}`]: {
            userId,
            text,
            planetName,
            date
          }
        });
        this.$refs.form.reset();
      }
    }
  }
</script>

<style lang="scss">
  .chat {
    .title {
      color: #fff;
      text-align: center;
      font-size: 70px;
      margin: 0;
      padding: 50px;
      background-color: #192A49;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }
    .message-container {
      position: fixed;
      overflow-y: scroll;
      z-index: 1;
      height: 60% !important;
      margin-bottom: 300px;
      margin-top: 200px;
      padding: 0 50px;
      flex: 1;
      display: flex;
      height: 100%;
      flex-direction: column;
    }
    ul {
      padding: 10px;
      flex: 1 1 auto;
      overflow-y: auto;
      min-height: 0;
      li {
        width: 100%;
      }
    }
    .message {
      background-color: #6e117f;
      border-radius: 20px;
      color: #fff;
      font-size: 30px;
      padding: 15px 20px;
      position: relative;
      display: inline-block;
      margin: 30px 0;
      span {
        font-weight: bold;
      }
      &:after{
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
      }
    }
    .message.cats {
      float: right;
      &:after {
        left: auto;
        right: 0px;
        bottom: -22px;
        border: 20px solid;
        border-color: #6e117f #6e117f transparent transparent;
      }
    }
    .message.current-user {
      &:after{
        content: ' ';
        left: 0px;
        right: auto;
        top: auto;
        bottom: -20px;
        border: 22px solid;
        border-color: transparent transparent transparent #6e117f;
      }
    }
    .message small {
      font-size: 20px;
      color: #ccc;
      font-weight: normal;
    }
    .message-types {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 90;

      .message-input {
        width: 100%;
        min-height: 300px;
        font-size: 40px;
      }
      button {
        font-size: 50px;
        width: 100%;
        z-index: 90;
      }
    }
  }
</style>
