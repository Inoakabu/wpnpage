<template>
  <main>
    <h1>{{ id }}</h1>
    <bandComp/>
  </main>
</template>
<script>
import bandComp from '../components/bands/comp.band.list'

export default {
  name: 'Band',
  components: { bandComp },
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>
<style>

</style>
