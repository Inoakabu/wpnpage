<template>
  <main>
    <h1>{{ id }}</h1>
  </main>
</template>
<script>
export default {
  name: 'Band',
  data() {
    return {
      id: this.$route.params.id
    }
  }
}
</script>
<style>

</style>
