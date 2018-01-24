<template>
  <div>
    <script type="text/x-template" id="modal-template">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  default header
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                  default body
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  default footer
                  <button class="modal-default-button" @click="$emit('close')">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </script>
    <div class='card text-center'>
      <h3>{{ markup.title }}</h3>
      <p>{{ markup.description }}</p>
      <button id="show-modal"
              @click="showModal = true"
              class="pure-button button-xsmall button-dark-blue">Click here</button>
    </div>
    <modal v-if="showModal" @close="showModal = false"></modal>
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
