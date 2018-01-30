<template>
  <div class='card text-center'>
    <h3>{{ markup.title }}</h3>
    <p>{{ markup.description }}</p>
    <h6>{{markup.buttonLabel1}}</h6>
    <h6>{{markup.buttonLabel2}}</h6>
    <div class="pure-g">
      <button v-on:click="openModal(markup)"
              class="pure-u-1-1 pure-button button-xsmall button-light-blue">{{ markup.button1Text }}</button>
      <button v-on:click="openModal(markup)"
              class="pure-u-1-1 pure-button button-xsmall button-dark-blue">{{ markup.button2Text }}</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['markup'],
    methods: {
      openModal(markup) {
        markup.externalLink = markup.buttonLink;
        this.$root.$emit('openModal', 'externalLink', markup);
      },
    }
  };
</script>
