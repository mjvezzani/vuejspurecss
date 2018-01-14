<template>
  <div class='card text-center'>
    <h3 class="title">{{ title }}</h3>
    <p class="sub-title">{{ subTitle }}</p>
    <div class="body-actions">
      <img class='pure-img' src='../assets/slide-show.png'/>
    </div>
    <div class="footer-actions">{{ footerActions }}</div>
  </div>
</template>

<script>
export default {
  props: {
    card: {required: true}
  }, 
  data() {
    return {
      title: '', 
      subTitle: '', 
      bodyActions: '', 
      bodyContent: '', 
      footerText: '', 
      footerActions: ''
    };
  }, 
  created() {
    this.title = this.card.title; 
    this.subTitle = this.card.subTitle; 
    this.bodyActions = this.card.bodyActions; 
    this.bodyContent = this.card.bodyContent; 
    this.footerText = this.card.footerText; 
    this.footerActions = this.card.footerActions; 
  }
};
</script>

<style>
  
</style>

