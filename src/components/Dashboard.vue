<template>
  <div id="app">
    <Header/>
    <WelcomeBanner/>
    <InfoCards/>
  </div>
</template>

<script>
  import Header from './header';
  import WelcomeBanner from './welcome_banner';
  import InfoCards from './info_cards';

  export default {
    name: 'app',
    components: {
      Header,
      WelcomeBanner,
      InfoCards,
    },
  };
</script>

<style>
  .text-center {
    text-align: center;
  }

  .button-xsmall {
    font-size: 70%;
  }

  body {
    background-color: rgb(243, 243, 243);
  }

  .button-light {
    color: rgb(148, 206, 88);
    border-radius: 25px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    background: rgb(255, 255, 255);
    border: 2px solid rgb(148, 206, 88);
  }

  .button-dark {
    color: white;
    border-radius: 25px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    background: rgb(63, 63, 63);
  }

  .button-dark-blue {
    color: white;
    border-radius: 25px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    background: rgb(30, 177, 237);
  }

  .button-light-blue {
    color: rgb(30, 177, 237);
    border-radius: 25px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    background: rgb(255, 255, 255);
    border: 1px solid rgb(30, 177, 237);
  }
</style>
