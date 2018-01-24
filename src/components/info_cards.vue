<template>
  <div>
    <ul class='pure-g neg-y'>
      <li v-for="card in cards" class='pure-u-md-1-3 pure-u-sm-1-2 pure-u-1-1'>
        <SingleCard card=card></SingleCard>
      </li>
    </ul>
  </div>
</template>

<script>
  import SingleCard from './single_card';

  export default {
    components: {
      SingleCard,
    },
    data() {
      return {
        cards: [
          { html: '<h3>Buy Me!!</h3><p>Some lorem ipsum</p><button class="pure-button button-xsmall button-dark-blue">Subscribe!</button>' },
          { html: '<h3>Buy That!!</h3><p>More lorem ipsum</p><button class="pure-button button-xsmall button-dark-blue">Purchase!</button>' },
          { html: '<h3>Over Here!!</h3><p>A new Car!!</p><button class="pure-button button-xsmall button-light-blue">Click for chance to win!</button>' },
          { html: '<h3>Avoid Me</h3><p>I\'m a virus</p><button class="button-xsmall pure-button button-dark-blue">Click in Emergency Only</button>' },
          { html: '<h3>Over Here!!</h3><p>A new Car!!</p><button class="pure-button button-xsmall button-light-blue">Click for chance to win!</button>' },
          { html: '<h3>Buy Me!!</h3><p>Some lorem ipsum</p><button class="pure-button button-xsmall button-dark-blue">Subscribe!</button>' },
          { html: '<h3>Avoid Me</h3><p>I\'m a virus</p><button class="button-xsmall pure-button button-dark-blue">Click in Emergency Only</button>' },
          { html: '<h3>Buy That!!</h3><p>More lorem ipsum</p><button class="pure-button button-xsmall button-dark-blue">Purchase!</button>' },
          { html: '<h3>Over Here!!</h3><p>A new Car!!</p><button class="pure-button button-xsmall button-light-blue">Click for chance to win!</button>' },
          { html: '<h3>Avoid Me</h3><p>I\'m a virus</p><button class="button-xsmall pure-button button-dark-blue">Click in Emergency Only</button>' },
          { html: '<h3>Over Here!!</h3><p>A new Car!!</p><button class="pure-button button-xsmall button-light-blue">Click for chance to win!</button>' },
          { html: '<h3>Buy Me!!</h3><p>Some lorem ipsum</p><button class="pure-button button-xsmall button-dark-blue">Subscribe!</button>' },
        ],
        showModal: false,
      };
    },
  };
</script>

<style>
  .card {
    background-color: rgb(255, 255, 255);
    min-height: 7em;
    margin: 1em;
    padding: 1rem;
    border: 1px solid rgb(230, 230, 230);
    box-shadow: 10px, 10px, 8px, 5px, #111;
  }

  ul {
    -webkit-padding-start: 0px;
  }

  h3 {
    margin-top: 0px;
  }

  .neg-y {
    transform: translateY(-5rem);
  }

  .modal-mask {
    position: fixed;
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
