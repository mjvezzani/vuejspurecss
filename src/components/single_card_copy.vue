<template>
  <div>
  </div>
</template>

<script>

  export default {
    props: ['markup'],
    methods: {
      openModal(markup) {
        this.$root.$emit('open', markup);
      },
    },
  };
</script>

<style>
</style>
