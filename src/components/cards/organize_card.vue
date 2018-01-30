<template>
  <div class='card text-center'>
    <h3>{{ markup.title }}</h3>
    <p>{{ markup.description }}</p>
    <h6>{{markup.buttonLabel}}</h6>
    <div class="pure-g">
      <a v-bind:href="markup.download" class="pure-u-1-1 pure-button button-xsmall button-dark-blue">
              {{ markup.buttonText }}
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['markup'],
  };
</script>
