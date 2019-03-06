<template>
  <main>
    <h1>{{ id }}</h1>
    <infoComp/>
  </main>
</template>
<script>
import infoComp from '../components/info/comp.info'

export default {
  name: 'Info',
  components: { infoComp },
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>
<style>

</style>
