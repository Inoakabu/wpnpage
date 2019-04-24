<template>
  <section class="news">
    <h2>News</h2>
    <div class="list">
      <Tile v-for="(news,idx) in news" :key="idx" :name="news.title" :image="news.image" :imagePath="'news'"
            :route="'NewsPage'" :id="news.id.toString()" sepia shadow backgroundImg border/>
    </div>
    <router-link class="button" :to="'News'">{{ content[currentLang] }}</router-link>
  </section>
</template>

<script>
  import newsJson from '@/assets/json/news.json'
  import Tile from '@/components/tile/comp.tile'
  import content from '@/assets/json/content.json'

  export default {
    name: 'News',
    components: { Tile },
    data () {
      return {
        content: content.news.button,
        newsContent: newsJson.news
      }
    },
    computed: {
      news () {
        return newsJson.slice(0, 3)
      },
      currentLang () {
        return this.$route.params.lang
      }
    }
  }
</script>

<style>
  .news {
    text-align: center;
    padding: 2rem;
  }
</style>
