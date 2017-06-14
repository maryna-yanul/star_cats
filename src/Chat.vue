<template>
  <div class="chat">
    <h1 class="title">{{name}}</h1>
    <div class="message-container">
      <div class="message-list">
        <ul class="messages">
          <li>
            <div class="message cats">
              <span>Maryna <small>09:00</small></span>
              <p>dbfsbdfdjfbdksbfdsjbfk</p>
            </div>
          </li>
          <li>
            <div class="message current-user">
              <span>Maryna <small>09:00</small></span>
              <p>dbfsbdfdjfbdksbfdsjbfk</p>
            </div>
          </li>
          <li>
            <div class="message current-user">
              <span>Maryna <small>09:00</small></span>
              <p>dbfsbdfdjfbdksbfdsjbfk</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <form class="message-types">
      <div class="">
        <textarea class="message-input" type="text" id="msgIpt" placeholder="Message" value="" autofocus />
      </div>
      <button type="button" name="submit">Submit</button>
    </form>
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
      padding: 220px 50px;
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

      .message-input {
        width: 100%;
        min-height: 300px;
        font-size: 40px;
      }
      button {
        font-size: 50px;
        width: 100%;
      }
    }
  }
</style>
