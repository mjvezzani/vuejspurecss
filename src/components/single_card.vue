<template>
  <div>
    <div v-if="markup.type == 'video'" class='card text-center'>
      <VideoCard :markup=markup></VideoCard>
    </div>
    <div v-if="markup.type == 'blog'" class='card text-center'>
      <BlogCard :markup=markup></BlogCard>
    </div>
    <div v-if="markup.type == 'score'" class='card text-center'>
      <ScoreCard :markup=markup></ScoreCard>
    </div>
    <div v-if="markup.type == 'invest'" class='card text-center'>
      <InvestCard :markup=markup></InvestCard>
    </div>
    <div v-if="markup.type == 'organize'" class='card text-center'>
      <OrganizeCard :markup=markup></OrganizeCard>
    </div>
    <div v-if="markup.type == 'coaching'" class='card text-center'>
      <CoachingCard :markup=markup></CoachingCard>
    </div>
    <div v-if="markup.type == 'basics'" class='card text-center'>
      <BasicsCard :markup=markup></BasicsCard>
    </div>
    <div v-if="markup.type == 'gold'" class='card text-center'>
      <GoldCard :markup=markup></GoldCard>
    </div>
    <div v-if="markup.type == 'advice'" class='card text-center'>
      <AdviceCard :markup=markup></AdviceCard>
    </div>
  </div>
</template>

<script>
  import AdviceCard from './advice_card';
  import BasicsCard from './basics_card';
  import BlogCard from './blog_card';
  import CoachingCard from './coaching_card';
  import GoldCard from './gold_card';
  import InvestCard from './invest_card';
  import OrganizeCard from './organize_card';
  import ScoreCard from './score_card';
  import VideoCard from './video_card';

  export default {
    props: ['markup'],
    components: {
      AdviceCard,
      BasicsCard,
      BlogCard,
      CoachingCard,
      GoldCard,
      InvestCard,
      OrganizeCard,
      ScoreCard,
      VideoCard,
    },
    methods: {
      openModal(markup) {
        this.$root.$emit('open', markup);
      },
    },
  };
</script>

<style>
</style>
