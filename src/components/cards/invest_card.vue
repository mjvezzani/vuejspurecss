<template>
  <div class='card text-center'>
    <h3>{{ markup.title }}</h3>
    <p>{{ markup.description }}</p>
    <div class="pure-g">
      <button v-on:click="openModal('externalLink', 'link1', markup)"
              class="pure-u-1-1 pure-button button-xsmall button-light-blue">{{ markup.button1Text }}</button>
      <button v-on:click="openModal('externalLink', 'link2', markup)"
              class="pure-u-1-1 pure-button button-xsmall button-dark-blue">{{ markup.button2Text }}</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['markup'],
    methods: {
      openModal(type, link, markup) {
        if (link === 'link1') {
          markup.externalLink = markup.button1Link;
        } else if (link === 'link2') {
          markup.externalLink = markup.button2Link;
        } else {
          markup.externalLink = markup.buttonLink;
        }
        this.$root.$emit('openModal', type, markup);
      },
    },
  };
</script>
