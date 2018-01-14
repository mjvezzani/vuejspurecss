<template>
<div>
  <ul class='pure-g neg-y'>
    <li v-for="card in cards" class='pure-u-md-1-3 pure-u-sm-1-2 pure-u-1-1'>
      <InfoCardSlideShow :card="card" v-if="card.bodyActions == 'highlighted-blog-entries'"/>
      <InfoCardWelfieScore :card="card" v-else-if="card.bodyActions == 'welfie-score-chart'"/>
      <InfoCard :card="card" v-else/>
    </li>
  </ul>
</div>
</template>

<script>
import InfoCard from './info_card';
import InfoCardSlideShow from './info_card_slide_show';
import InfoCardWelfieScore from './info_card_welfie_score';

export default {
  data() {
    return {
      cards: [ 
      {"title":"Smartdollar", "subTitle":"Powered by Ramsey Solutions", "bodyActions":"Learn more >", "bodyContent":"Make progress with video lessons &amp; other financial wellness tools", "footerText":"Courtesy of your employer", "footerActions":"login-in, get-started"}, 
      {"title":"Welfie* Blog", "subTitle":"Useful stuff, not fluff", "bodyActions":"highlighted-blog-entries", "bodyContent":"", "footerText":"", "footerActions":"view-all-posts"}, 
      {"title":"Welfie* Score", "subTitle":"", "bodyActions":"welfie-score-chart", "bodyContent":"", "footerText":"", "footerActions":"details, update"}, 
      {"title":"Invest", "subTitle":"", "bodyContent":"Better prepare for lifeÕs curveballs with a household continuity plan", "bodyActions":'<i class="fa fa-usd" aria-hidden="true"></i>', "footerText":"Free template", "footerActions":"download"}, 
      {"title":"Organize", "subTitle":"", "bodyContent":"Improved financial wellness begins with better organization.", "bodyActions":'<i class="fa fa-file-text" aria-hidden="true"></i>', "footerText":"Free templates &amp; kits", "footerActions":"download"}, 
      {"title":"Coaching", "subTitle":"", "bodyContent":"Get encouragement, navigation, ideas, unity, &amp; accountability.", "bodyActions":'<i class="fa fa-user" aria-hidden="true"></i>', "footerText":"From $50 / month", "footerActions":"get-started"}, 
      {"title":"Financial Plan*", "subTitle":"Debt | Retirement | Big Ticket Item", "bodyActions":"Learn more >", "bodyContent":"Financial planning solutions with  adesignated planning associate.", "footerText":"From $95 / year", "footerActions":"get-started"}, 
      {"title":"Invest*", "subTitle":"", "bodyActions":"Learn more >", "bodyContent":"Proposed allocations &amp; managers; professionally managed portfolios.", "footerText":"< $25k to invest = $0 advisory fee", "footerActions":"get-started"}, 
      {"title":"Financial Advice*", "subTitle":"", "bodyActions":"Learn more >", "bodyContent":"Your own licensed professional for Q&amp;A, direction, &amp; sounding-board.", "footerText":"From $195 / year", "footerActions":"get-started"}, 
      ],
    };
  },
  components: { InfoCard, InfoCardSlideShow, InfoCardWelfieScore }
};
</script>

<style></style>
