<template>
  <div class='pure-g banner'>
    <div class='pure-u-1-24'></div>
    <div class='pure-u-15-24'>
      <h3 class='thin-text padding-top'>Hi Michael, welcome back!</h3>
      <p class='thin-text'><em>How can we help you improve your financial wellness?</em></p>
      <br/>
      <p class='thin-text'>STAY CONNECTED</p>
      <div class='pure-g'>
        <div class='pure-u-md-1-24 pure-u-sm-1-12 margin-right'>
          <img class='pure-img' src='../assets/facebook.png'/>
        </div>
        <div class='pure-u-md-1-24 pure-u-sm-1-12 margin-right'>
          <img class='pure-img' src='../assets/twitter.png'/>
        </div>
        <div class='pure-u-md-1-24 pure-u-sm-1-12'>
          <img class='pure-img' src='../assets/insta.png'/>
        </div>
      </div>
    </div>
    <div class='pure-u-6-24 justify-right'>
      </br>
      <p class='thin-text'>A valuable benefit</p>
      <p class='thin-text'>Provided Courtesy of</p>
      <img class='pure-img background-white margin-bottom' src='../assets/transunion-logo.png' align='right'/>
      <button v-on:click="openModal('email', {})" class=' pure-u-1-1 pure-button button-dark'><span class="small-text">Need direction?Connect!</span><br/>Financial Wellness Concierge*</button>
    </div>
    <div class='pure-u-2-24'>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openModal(type, markup) {
      this.$root.$emit('openModal', type, markup);
    },
  },
};
</script>

<style>
  .banner {
    color: rgb(255, 255, 255);
    background-color: rgb(151, 205, 93);
    padding-bottom: 6rem;
  }

  .thin-text {
    font-weight: 100;
  }

  .background-white {
    background-color: white;
  }

  .margin-right {
    margin-right: .5rem;
  }

  .margin-bottom {
    margin-bottom: .7rem;
  }

  .justify-right {
    text-align: right;
  }
  
  .padding-top {
    padding-top: 1rem;
  }
</style>
