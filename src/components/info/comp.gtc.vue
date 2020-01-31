<template>
  <div class="gtc">
    <div v-for="(dat,idx) in data.gtcValue" :key="idx">
      <span v-html="dat.value[currentLang]"></span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    data: Object
  },
  computed: {
    currentLang () {
        return this.$route.params.lang
      }
  }
}
</script>

<style>
  .gtc-list {
    text-align: left;
  }

  .gtc-listitems {
    left: 10rem;
  }
</style>
