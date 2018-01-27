<template>
  <div>
    <div class='card text-center'>
      <h3>{{ markup.title }}</h3>
      <p>{{ markup.description }}</p>
      <a v-if="markup.fileSource" class="pure-button button-xsmall button-dark-blue" v-bind:href=markup.fileSource target="_blank">Read Me!</a>
      <button v-else id="show-modal"
              v-on:click="openModal(markup)"
              class="pure-button button-xsmall button-dark-blue">{{ markup.buttonText }}</button>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['markup'],
    methods: {
      openModal(markup) {
        this.$root.$emit('open', markup);
      },
    },
  };
</script>

<style>
</style>
