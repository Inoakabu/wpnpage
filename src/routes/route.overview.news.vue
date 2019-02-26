<template>
  <section class="news">
    <h2>News</h2>
    <div class="list">
      <Tile v-for="(news,idx) in news" :key="idx" :name="news.title" :image="news.image" :imagePath="'news'"
            :route="'NewsPage'" :id="news.id.toString()" sepia shadow backgroundimg border/>
    </div>
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
  }
}
</script>

<style>
  .news {
      text-align: center;
      padding: 2rem;
  }
</style>
