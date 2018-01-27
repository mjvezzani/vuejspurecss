<template>
  <div>
    <div class="modal-header">
      <slot name="header">
        {{ markup.title }}
      </slot>
    </div>

    <div class="modal-body">
      <slot name="body">
        <iframe v-bind:src=markup.videoSource
                      width="560"
                      height="315"
                      frameborder="0"
                      allow="encrypted-media"
                      allowfullscreen>
        </iframe>
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
  export default{
    props: ['markup'],
    methods: {
      closeModal() {
        this.$root.$emit('close');
      },
    },
  };
</script>
