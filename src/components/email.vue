<template>
  <div>
    <div class="modal-body">
      <slot name="body">
        <form class="pure-form pure-form-stacked">
          <fieldset>
            <legend>Email us!</legend>

            <input id="name" type="text" placeholder="Your Name" v-model="name">

            <input id="email" type="email" placeholder="Your Email" v-model="email">
            <textarea type="text" rows="9" cols="30" placeholder="Your Message" v-model="message"></textarea>
          </fieldset>
        </form>

        <button class="pure-u-1-1 pure-button
                       button-xsmall button-dark-blue"
                       v-on:click="sendMessage">
                Send Message
        </button>
        <button class="pure-u-1-1 pure-button
                       button-xsmall button-light-blue"
                       v-on:click="closeModal">
                Close
        </button>
      </slot>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default{
    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },
    props: ['markup'],
    methods: {
      closeModal() {
        this.$root.$emit('close');
      },
      sendMessage() {
        axios.post('https://welfie.co/api/messages', {
          name: this.name,
          email: this.email,
          content: this.message,
        })
        .then((resonse) => {})
        .catch((e) => {
          console.log(e);
        });
      },
    },
  };
</script>
