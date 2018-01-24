<template>
  <div>
   <ul class='pure-g neg-y'>
      <li v-for="card in cards" class='pure-u-md-1-3 pure-u-sm-1-2 pure-u-1-1'>
        <SingleCard :markup=card></SingleCard>
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
          { html: `<h3>Buy Me!!</h3>
                   <p>Some lorem ipsum</p>
                   <button id="show-modal" @click="showModal = true"
                           class="pure-button button-xsmall button-dark-blue">
                     Subscribe!
                   </button>
                   <modal v-if="showModal" @close="showModal = false"></modal>`,
            title: 'Buy Me!!',
            description: 'Some Lorem Ipsum' },
        ],
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
 
</style>
