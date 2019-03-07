<template>
  <div>
    <!-- <select v-model="currentLang">
      <option v-for="lang in langs" v-bind:key="lang.id" v-bind:value="lang.id">{{ lang.name }}</option>
    </select> -->
    <div>
      {{currentName}}
      <router-link v-for="lang in langs" :key="lang.id" :to="{name: currentName, params: currentParams(lang.id)}" class="dropdown-item">
        <span class="select-name">{{ lang.name }}</span>
      </router-link>
    </div>
    <div> {{ currentLang }}</div>
  </div>
</template>

<script>

  // TODO: emit currentLang value to globalStore.globalLang ?maybe not

  export default {
    name: 'langSwitch',
    data () {
      return {
        langs: [{ id: 'eng', name: 'English' }, { id: 'de', name: 'Deutsch' }]
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
