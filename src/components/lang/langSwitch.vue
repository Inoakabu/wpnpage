<template>
  <div class="lang-switch">
    <router-link v-for="lang in langs" :key="lang.id" :to="{name: currentName, params: currentParams(lang.id)}">
      <img class="lang-img" :src="lang.icon" :alt="lang.name">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'langSwitch',
  data () {
    return {
      langs: [
              { id: 'en', name: 'English', 
              icon: '/icons/gb_icon.png'
              }, 
              { id: 'de', name: 'Deutsch', 
              icon: '/icons/ger_icon.png'
              }
            ]
    }
  },
  computed: {
    currentLang () {
      return this.$route.params.lang
    },
    currentName () {
      console.log(this.$route)
      return this.$route.name
    }
  },
  methods: {
    currentParams (lang) {
      return {lang: lang, id: this.$route.params.id}
    }
  }
}
</script>
<style>
.lang-switch{
  display: flex;
  align-self: center;
}
.lang-img{
  max-width: 90%;
  filter: saturate(55%)
}
.lang-img:hover{
  filter: saturate(90%);
  transition: all 400ms ease-in-out;
}
@media (max-width: 960px){
    .lang-img{
      max-width: 100%;
      align-self: center;
    }
  }
</style>
