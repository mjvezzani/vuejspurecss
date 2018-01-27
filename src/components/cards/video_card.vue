<template>
  <div class='card text-center'>
    <h3>{{ markup.title }}</h3>
    <h5>{{ markup.subtitle }}</h5>
    <a href="#" v-on:click="openModal(markup)">
      <img v-bind:src=markup.thumbnail class="pure-img"></img>
    </a>
    <br/>
    <div class="pure-g">
      <button v-on:click="openModal(markup)"
              class="pure-u-1-1 pure-button button-xsmall button-dark-blue">{{ markup.button1Text }}</button>
      <button v-on:click="openModal(markup)"
              class="pure-u-1-1 pure-button button-xsmall button-light-blue">{{ markup.button2Text }}</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['markup'],
  };
</script>
