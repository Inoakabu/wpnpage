<template>
  <section class="news-single">
      <div class="news-inner-single" v-if="news">
        <h1> {{ news.title }}</h1>
        <div> {{ news.text[currentLang] }}</div>
        <img :src="imageSrc"/>
      </div>
  </section>
</template>

<script>
  import newsJson from '@/assets/json/news.json'

  export default {
    name: 'News',
    computed: {
      id() {
        return Number(this.$route.params.id)
      },
      news () {
        return newsJson.filter(b => b.id === this.id)[0]
      },
      imageSrc() {
        return require(`@/assets/images/news/${this.news.image}`)
      },
      currentLang () {
        return this.$route.params.lang
      }
    }
  }
</script>

<style>

</style>
