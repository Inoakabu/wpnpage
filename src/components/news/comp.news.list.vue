<template>
  <section class="news">
    <h2>News</h2>
    <div class="list">
      <Tile v-for="(news,idx) in news" :key="idx" :name="news.title" :image="news.image" :imagePath="'news'"
            :route="'NewsPage'" :id="news.id.toString()" sepia shadow/>
    </div>
    <router-link class="button" :to="'News'">Mehr News anzeigen</router-link>
  </section>
</template>

<script>
  import newsJson from '@/assets/json/news.json'
  import Tile from '@/components/tile/comp.tile'

  export default {
    name: 'News',
    components: { Tile },
    computed: {
      news () {
        return newsJson.slice(0, 3)
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
