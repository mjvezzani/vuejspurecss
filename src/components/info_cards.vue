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
          { title: 'Buy Me!!',
            description: "It's so good!",
            buttonText: 'Buy!' },
          { title: 'Watch Me!!',
            description: 'A great video',
            videoSource: 'https://www.youtube.com/embed/RUCN4Q3egmw',
            buttonText: 'Watch!' },
          { title: 'Go to there!!',
            description: 'A great place to visit',
            externalLink: 'https://www.youtube.com/embed/RUCN4Q3egmw',
            buttonText: 'Go!' },
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
