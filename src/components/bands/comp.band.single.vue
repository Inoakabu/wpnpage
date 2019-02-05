<template>
  <section class="band-single">
    <div class = "band-wrapper" v-for="band in bands" :key="band.bands.bId">
      <div class = "band" v-if="band.bands.bId == bId">
        <h1> {{ band.name }}</h1>
      </div>
      <div> {{ band }}</div>
    </div>
    <div> {{ bId }}</div>
  </section>
</template>

<script>
export default {
  name: 'Band',
  data () {
    return {
      bId: this.$route.params.bId,
      name: this.$route.params.name,
      bands: [require('../../assets/bandSinglePageJson/bands.json')]
    }
  },
  methods: {
    getData () {
    }
  }
}
</script>

<style>

</style>
