<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              {{ markup.title }}
            </slot>
          </div>

          <div v-if="markup.videoSource" class="modal-body">
            <slot name="body">
              <iframe v-bind:src=markup.videoSource
                            width="560"
                            height="315"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen>
              </iframe>
              <button class="pure-u-1-1 pure-button
                             button-xsmall button-light-blue"
                            @click="$emit('close')">
                      Close
              </button>
            </slot>
          </div>

          <div v-else-if="markup.externalLink">
            <div v-if="markup.externalLink" class="modal-body">
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
                          @click="$emit('close')">
                    Close
                  </button>
                </div>
              </slot>
            </div>
          </div>

          <div v-else>
            <button class="pure-u-1-1 pure-button
                           button-xsmall button-light-blue"
                          @click="$emit('close')">
                    Close
            </button>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default{
    props: ['markup'],
  };
</script>

<style>
  .modal-mask {
    position: fixed !important;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
