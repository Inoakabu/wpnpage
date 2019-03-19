<template>
  <div class="privacy-policy">
    <h3>{{ content.title[currentLang] }}</h3>
    <ol class="privacy-policy-list" type="I">
      <li class="privacy-policy-listitems" v-for="(item, index) in content[currentLang]" :key="index">
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
      content: content.info.privacy_policy
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
  .privacy-policy-list {
    text-align: left;
  }

  .privacy-policy-listitems {
    left: 10rem;
  }
</style>
