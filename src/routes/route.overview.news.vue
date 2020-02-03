<template>
  <section class="news ov">
    <h2>News</h2>
    <div class="list ov">
      <Tile v-for="(news,idx) in data.slice().reverse()" :key="idx" :name="news.title" :image="news.image.path" :imagePath="'news'"
            :route="'NewsPage'" :id="news._id.toString()" sepia backgroundImg border :alert="news.alert"/>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
import Tile from '@/components/tile/comp.tile'
const cockpit = require('../assets/conf/cpAPI.json')
// const fetcher = require('../helpers/fetcher/fetcher')
// eslint-disable-next-line import/first
import fetcher from '../helpers/fetcher/fetcher';

const collURL = JSON.stringify(cockpit.call.collURL).replace(/"/g, "") + 'news' + cockpit.call.endStr + JSON.stringify(cockpit.call.token).replace(/"/g, "")

export default {
  name: 'News',
  components: { Tile },
  data () {
    return {
      data: []
    }
  },
  computed: {
    currentLang () {
        return this.$route.params.lang
    }
  },
  methods: {
    getData: function() {
      fetcher(collURL).then((res) => {
        this.data = res.entries
      })
    }
  },
  created: function () {
    this.getData();
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
