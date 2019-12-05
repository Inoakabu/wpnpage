<template>
  <section class="news-page" v-if="news">
      <h1 class="news-page-headline">{{ news.title }}</h1>
      <!-- <p class="news-page-description">{{ news.text[currentLang] }}</p> -->
      <div><span v-html="news.text[currentLang]"></span></div>
      <div class="div-image">
        <img class="news-page-image" :src="imageSrc"/>
      </div>
      <PSC pSCimagePath = 'news/pictureSCcontent' :arr="nArr" />
      <router-view></router-view>
  </section>
</template>

<script>
  import newsJson from '@/assets/json/news.json'
  import PSC from '@/components/pictureShowCase/comp.pictureSC'

  export default {
    name: 'News',
    components: { PSC },
    data() {
      return {
        nArr: newsJson.pictureSC
      }
    },
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
  }

  @media (max-width: 560px) {
    .news-page-image{
    max-width: 350px;
    }
  }

  @media (max-width: 411px) {
    .news-page-image{
    max-width: 220px;
    }
  }
</style>
