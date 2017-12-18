<template>
<div>
  <ul class='pure-g'>
    <li v-for="card in cards" class='pure-u-md-1-4 pure-u-sm-1-2 pure-u-1-1'>
      <div class='card text-center' v-html="card.html">
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { html: '<h3>Buy Me!!</h3><p>Some lorem ipsum</p><button>Subscribe!</button>' },
        { html: '<h3>Buy That!!</h3><p>More lorem ipsum</p><button>Purchase!</button>' },
        { html: '<h3>Over Here!!</h3><p>A new Car!!</p><button>Click for chance to win!</button>' },
        { html: '<h3>Avoid Me</h3><p>I\'m a virus</p><button>Click in Emergency Only</button>' },
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
    padding: .25em;
    border: 1px solid rgb(230, 230, 230);
    box-shadow: 10px, 10px, 8px, 5px, #111;
  }

  ul {
    -webkit-padding-start: 0px;
    top: -20px;
  }
</style>
