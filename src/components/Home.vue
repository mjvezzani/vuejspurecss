<template>
  <div>
    <div class='header pure-g extra-margin'>
      <div class='pure-u-1-1'>
        <img src='../assets/logo.png' class='pure-img logo-img'/>
      </div>
    </div>
    <p>Financial Wellness Education & Accountability</p>
    <h3>Clarify your road to financial wellness</h3>
    <router-link class='pure-button button-dark-blue' to="/dashboard">
      Get Started for Free
    </router-link>
    <br/>
    <router-link to="/dashboard">
      Learn More
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'home',
  };
</script>
