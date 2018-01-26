<template>
  <div>
    <div class='card text-center'>
      <h3>{{ markup.title }}</h3>
      <p>{{ markup.description }}</p>
      <a v-if="markup.fileSource" class="pure-button button-xsmall button-dark-blue" v-bind:href=markup.fileSource target="_blank">Read Me!</a>
      <button v-else id="show-modal"
              @click="showModal = true"
              class="pure-button button-xsmall button-dark-blue">{{ markup.buttonText }}</button>
    </div>
    <modal :markup=markup v-if="showModal" @close="showModal = false"></modal>
  </div>
</template>

<script>
  import Modal from './modal';

  export default {
    props: ['markup'],
    components: {
      Modal,
    },
    data() {
      return {
        showModal: false,
      };
    },
  };
</script>

<style>
</style>
