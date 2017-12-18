<template>
  <div id="app">
    <Header/>
    <WelcomeBanner/>
    <InfoCards/>
  </div>
</template>

<script>
  import Header from './components/header';
  import WelcomeBanner from './components/welcome_banner';
  import InfoCards from './components/info_cards';

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
</style>
