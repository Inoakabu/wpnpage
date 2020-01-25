<template>
  <section class="news-page" v-if="news">
      <!-- <h1 class="news-page-headline">{{ news.title }}</h1> -->
      <!-- <p class="news-page-description">{{ news.text[currentLang] }}</p> -->
      <!-- <div><span v-html="news.text[currentLang]"></span></div> -->
      <!-- <div class="div-image">
        <img class="news-page-image" :src="imageSrc"/>
      </div> -->
      <!-- <PSC pSCimagePath = 'news/pictureSCcontent' :arr="nArr" /> -->
      <div>{{ news }}</div>
      <router-view></router-view>
  </section>
</template>

<script>
  import newsJson from '@/assets/json/news.json'
  import PSC from '@/components/pictureShowCase/comp.pictureSC'
  const cockpit = require('../assets/conf/cpAPI.json')
  const fetcher = require('../helpers/fetcher/fetcher')
  const collURL = JSON.stringify(cockpit.call.collURL).replace(/"/g, "") + 'news' + cockpit.call.endStr + JSON.stringify(cockpit.call.token).replace(/"/g, "")
/* eslint-disable */ 
  export default {
    name: 'News',
    components: { PSC },
    data() {
      return {
        nArr: newsJson.pictureSC,
        data: []
      }
    },
    computed: {
      id() {
        return this.$route.params.id
      },
      news() {
        return this.data.filter(b => b.id === this.id)[0]
      },
      imageSrc() {
        return cockpit.call.baseURL + this.news.image.path
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
    }
  }
</script>

<style>
.news-page {
    text-align: center;
  }
  .news-page-headline {
    text-align: center;
    margin: 5rem 0;
  }

  .news-page-description {
    line-height: 1.5rem;
    /* padding-top: 10rem; */
    padding-top: 3rem;
    hyphens: auto; 
    text-align: justify
  }

  .news-page-video {
    padding-top: 5rem;
  }

  .news-page-social {
    display: inline-flex;
    padding: 1rem;
    align-self: center;
  }

  .news-page-image{
    max-width: 780px;
  }
  .div-image{
    text-align: center
  }

  @media (max-width: 960px) {
    .news-page-image{
    max-width: 450px;
    }
    .news-page-headline {
      font-size: 2.5rem
    }
    .news-page-description{
      font-size: 1.5rem
    }
  }

  @media (max-width: 560px) {
    .news-page-image{
    max-width: 350px;
    }
    .news-page-headline {
      font-size: 2.3rem
    }
    .news-page-description{
      font-size: 1rem
    }
  }

  @media (max-width: 411px) {
    .news-page-image{
    max-width: 220px;
    }
    .news-page-headline {
      font-size: 2rem
    }
    .news-page-description{
      font-size: 1rem
    }
  }
</style>
