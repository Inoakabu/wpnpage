<template>
  <section class="band-single">
    <div > ID: {{ bId }} Name: {{ bandObj }}</div>
  </section>
</template>

<script>

export default {
  name: 'Band',
  data () {
    return {
      bId: this.$route.params.bId,
      name: this.$route.params.name,
      bandObj: require('../../assets/bandSinglePageJson/bands.json')
    }
  }
}
</script>

<style>

</style>
