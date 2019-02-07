<template>
  <main>
    <newsSingleComp />
  </main>
</template>

<script>
import newsSingleComp from '../components/news/comp.news.single.vue'

export default {
  name: 'NewsSinglePage',
  components: { newsSingleComp },
  data () {
    return {
      nId: this.route.params.nId,
      title: this.params.title
    }
  }
}
</script>

<style>

</style>
