<template>
  <div>
    <div class="modal-header">
      <slot name="header">
        {{ markup.title }}
      </slot>
    </div>

    <div class="modal-body">
      <slot name="body">
        <h3>Wait!</h3>
        <p>It looks like you are about to navigate away from Welfie.</p>
        <p>
          We are required to let you know that you are about to leave
          the Welfie website and navigate to an external website. Click
          ok if this is what you meant to do, cancel if you don't wish
          to leave Welfie.
        </p> 
        <div class='pure-g'>
          <a class='pure-u-md-1-2 pure-u-1-1 pure-button button-xsmall button-dark-blue' v-bind:href=markup.externalLink>
              Take me there!
          </a>
          <button class="pure-u-md-1-2 pure-u-1-1 pure-button button-xsmall button-light-blue"
                  v-on:click="closeModal">
            Close
          </button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['markup'],
    methods: {
      closeModal() {
        this.$root.$emit('close');
      },
    },
  };
</script>
