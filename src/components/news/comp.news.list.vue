<template>
  <section class="news">
    <h2>News</h2>
    <div class="list">
      <Tile v-for="(news,idx) in data" :key="idx" :name="news.title" :image="news.image.path" :imagePath="'news'"
            :route="'NewsPage'" :id="news._id.toString()" sepia shadow backgroundImg border/>
    </div>
    <router-link class="button" :to="'news'">{{ content[currentLang] }}</router-link>
  </section>
</template>

<script>
  import Tile from '@/components/tile/comp.tile'
  import content from '@/assets/json/content.json'
  const cockpit = require('../../assets/conf/cpAPI.json')
  const fetcher = require('../../helpers/fetcher/fetcher')
  const collURL = JSON.stringify(cockpit.call.collURL).replace(/"/g, "") + 'news' + cockpit.call.endStr + JSON.stringify(cockpit.call.token).replace(/"/g, "")

  export default {
    name: 'News',
    components: { Tile },
    data () {
      return {
        content: content.news.button,
        data: []
      }
    },
    computed: {
      news () {
        return this.data.slice(-3).reverse()
      },
      currentLang () {
        return this.$route.params.lang
      }
    },
    methods: {
      getData: function() {
        fetcher.getData(collURL).then((res) => {
          this.data = res.entries
        })
      }
    },
    created: function () {
      this.getData();
    },
    watch: {
      '$route.params.id': function (id) {
      this.$forceUpdate()
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
