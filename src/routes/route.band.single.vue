<template>
  <main>
    <bandSingleComp />
  </main>
</template>

<script>
import bandSingleComp from '../components/bands/comp.band.single'
export default {
  name: 'BandSinglePage',
  components: { bandSingleComp },
  data () {
    return {
      bId: this.$route.params.bId,
      name: this.$route.params.name
    }
  }
}
</script>

<style>

</style>
