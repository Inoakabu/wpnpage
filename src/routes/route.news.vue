<template>
  <main>
    <h1>{{ id }}</h1>
    <router-link to="/">Home</router-link>
  </main>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style>

</style>
