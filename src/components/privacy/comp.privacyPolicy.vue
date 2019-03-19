<template>
  <section class="privacy-policy">
    <div class="privacy-policy">
      <h1>{{ content.title[currentLang] }}</h1>
      <ol class="privacy-policy-list">
        <li class="privacy-policy-listitems" v-for="(item, index) in content[currentLang]" :key="index">
          <h2>{{ item.h }}</h2>
          <h3>{{ item.h2 }}</h3>
          {{ item.text }}<br>
          <ul class="privacy-policy-sublist">
            <li class="privacy-policy-sublistItem" v-for="(subitem, index) in item.list" :key="index">
              {{ subitem }}
            </li>
          </ul><br>
          {{ item.text2 }}
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import content from '@/assets/json/info.json'
export default {
  data () {
    return {
      content: content.privacy_policy
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
    list-style: none;
  }

  .privacy-policy-listitems {
    left: 10rem;
    padding-top: 2rem;
  }
</style>
