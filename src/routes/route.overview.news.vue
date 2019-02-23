<template>
  <main>
    <h1>{{ id }}</h1>
    <newsComp/>
  </main>
</template>

<script>
import newsComp from '../components/news/comp.news.list'

export default {
  name: 'News',
  components: { newsComp },
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style>

</style>
