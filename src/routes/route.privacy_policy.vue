<template>
  <main>
    <h1>{{ id }}</h1>
    <privacyPolicyComp/>
  </main>
</template>
<script>
import privacyPolicyComp from '../components/impressum/comp.privacyPolicy'

export default {
  name: 'Privacy Policy',
  components: { privacyPolicyComp },
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>
<style>

</style>
