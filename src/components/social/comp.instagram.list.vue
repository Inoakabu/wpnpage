<template>
  <section class="Instagram">
    <a class="button" :href="instagramlink" target="_blank">{{
      content[currentLang]
    }}</a>
  </section>
</template>

<script>
import content from "@/assets/json/content.json";

export default {
  name: "Instagram",
  components: {},
  data() {
    return {
      parse: [],
      user: "de_mortem_et_diabolum",
      content: content.social.instagram,
    };
  },
  computed: {
    instagramlink() {
      return `https://www.instagram.com/${this.user}/`;
    },
    posts() {
      return this.parse;
    },
    currentLang() {
      return this.$route.params.lang;
    },
  },
};
</script>

<style>
.Instagram {
  text-align: center;
  padding: 2rem;
}
</style>
