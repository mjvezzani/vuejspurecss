<template>
  <div>
    <h1>These are your messages</h1>
    <ul>
      <li v-for="message in messages">
        <div class='message'>
          <p>{{ message.name }} | {{ message.email }} | {{ message.phone }}</p>
          <p>Sponsoring Entity: {{ message.sponsoring_entity }}</p>
          <p>Message:</p>
          <p>{{ message.content }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Messages',
    data() {
      return {
        messages: {},
      }
    },
    created() {
      console.log('Getting messages');
      axios.get('https://welfie.co/api/messages')
        .then(response => {
          this.messages = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
  };
</script>

<style>
  .message {
    border: 2px solid green;
  }
</style>
