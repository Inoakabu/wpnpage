<template>
  <main>
    <h1>{{ id }}</h1>
    <impressumComp/>
  </main>
</template>
<script>
import impressumComp from '../components/impressum/comp.impressum'

export default {
  name: 'Info',
  components: { impressumComp },
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>
<style>

</style>
