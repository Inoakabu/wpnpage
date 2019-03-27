<template>
  <div class="gtc">
    <h3>{{ content.title[currentLang] }}</h3>
    <ol class="gtc-list" type="I">
      <li class="gtc-listitems" v-for="(item, index) in content[currentLang]" :key="index">
        {{ item }}
      </li>
    </ol>
  </div>
</template>

<script>
import content from '@/assets/json/content.json'

export default {
  data () {
    return {
      content: content.info.gtc
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
  .gtc-list {
    text-align: left;
  }

  .gtc-listitems {
    left: 10rem;
  }
</style>
