<template>
  <div class='card text-center'>
    <h3 class="title">{{ title }}</h3>
    <p class="sub-title">{{ subTitle }}</p>
    <div class="body-actions" v-html="bodyActions"></div>
    <p class="body-content"></p>
    <p class="footer-text">{{ footerText }}</p>
    <div class="footer-actions">
      <button v-for="button in footerButtons" :class='["footer-button", "pure-button", "button-small", button.primary ? "button-dark-blue" : "button-light-blue" ]'>{{ button.label }}</button>
    </div>
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
      footerActions: '', 
      footerButtons: []
    };
  }, 
  methods: {
    mkFooterButtons(labels) {
      return labels.split(/ *, */);
    }
  }, 
  created() {
    this.title = this.card.title; 
    this.subTitle = this.card.subTitle; 
    this.bodyActions = this.card.bodyActions; 
    this.bodyContent = this.card.bodyContent; 
    this.footerText = this.card.footerText; 
    this.footerActions = this.card.footerActions; 

    var footerLabels = this.footerActions.split(/ *, */);
    var firstLabel = true;
    $.each( footerLabels, (idx, label) => {
      this.footerButtons.push({label: label, primary: firstLabel})
      firstLabel = false;
    });
  }
};
</script>

<style>
  .card {
    background-color: rgb(255, 255, 255);
    min-height: 18em;
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

  .title, 
  .sub-title, 
  .body-actions, 
  .body-content, 
  .footer-text, 
  .footer-actions {}

  .card .sub-title {
    font-size: smaller;
  }

  .card .footer-text {
    color: #1FA7C9; 
  }

  .card .body-actions {
    color: #98CC63; 
  }

  .card .footer-button {
    width: 100%;
  }

  .card .footer-button-secondary {
  }

  .card .body-actions i {
    color: black; 
  }

</style>

