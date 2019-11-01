<template>
  <section class="news ov">
    <h2>News</h2>
    <div class="list ov">
      <Tile v-for="(news,idx) in news" :key="idx" :name="news.title" :image="news.image" :imagePath="'news'"
            :route="'NewsPage'" :id="news.id.toString()" sepia shadow backgroundImg border :alert="news.alert"/>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
import newsJson from '@/assets/json/news.json'
import Tile from '@/components/tile/comp.tile'

export default {
  name: 'News',
  components: { Tile },
  data () {
    return {
      news: newsJson
    }
  },
  computed: {
    currentLang () {
        return this.$route.params.lang
    }
  }
}
</script>

<style>
  .news.ov {
    text-align: center;
    padding: 2rem;
    /* padding-top: 11rem; */
    padding-top: 3rem;
  }
  .list.ov {
    /* padding-top: 12rem; */
    padding-top: 3rem;
  }
</style>
