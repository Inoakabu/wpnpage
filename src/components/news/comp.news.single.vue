<template>
  <section class="news-single">
    <div class="news-wrapper" v-for="news in news" :key="news.nId">
      <div class="news-inner-single" v-if="nId == news.nId">
        <h1> {{ news.title }}</h1>
        <div> {{ news.text }}</div>
        <div> </div>
      </div>
    </div>
  </section>
</template>

<script>
import newsJson from '../../assets/newsJson/news.json'

export default {
  name: 'News',
  data () {
    return {
      nId: this.$route.params.nId,
      news: newsJson.news
    }
  }
}
</script>

<style>

</style>
