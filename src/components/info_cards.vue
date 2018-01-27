<template>
  <div>
   <modal :markup=modalMarkup v-if="showModal" v-on:close="showModal = false"></modal>
   <ul class='pure-g neg-y'>
      <li v-for="card in cards" class='pure-u-md-1-3 pure-u-sm-1-2 pure-u-1-1'>
        <SingleCard :markup=card></SingleCard>
      </li>
    </ul>
  </div>
</template>

<script>
  import SingleCard from './single_card';
  import Modal from './modal';
  import SeedData from './seed_data';

  export default {
    components: {
      SingleCard,
      Modal,
    },
    created() {
      this.$root.$on('open', (markup) => {
        this.modalMarkup = markup;
        this.showModal = true;
      });
      this.$root.$on('close', () => {
        this.modalMarkup = '';
        this.showModal = false;
      });
    },
    data() {
      return {
        cards: SeedData,
        showModal: false,
        modalMarkup: '',
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
