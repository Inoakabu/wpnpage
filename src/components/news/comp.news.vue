<template>
  <section class="news">
    <h2>News</h2>
    <ul class="news-list">
      <NewsTile v-for="news in news" :key="news.id" :id="news.id" :title="news.title" :image="news.image"
      />
    </ul>
  </section>
</template>

<script>
  import NewsTile from './comp.tile.news'
  import newsJson from '@/assets/json/news.json'

  export default {
    name: 'News',
    components: { NewsTile },
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

  .news-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    list-style: none;
    padding: 0;
  }

  @media (max-width: 960px) {
    .news-list {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 560px) {
    .news-list {
      grid-template-columns: 1fr;
    }
  }
</style>
