<template>
<div>
  <!-- <select v-model="currentLang">
    <option v-for="lang in langs" v-bind:key="lang.id" v-bind:value="lang.id">{{ lang.name }}</option>
  </select> -->
  <div>
    <router-link v-for="lang in langs" :key="lang.id" :to="`/${lang.id}`" class="dropdown-item">
      <span class="select-name">{{ lang.name }}</span>
    </router-link>
  </div>
  <div> {{ currentLang }}</div>
</div>
</template>

<script>

// TODO: emit currentLang value to globalStore.globalLang ?maybe not

import {globalStore} from '../../main.js'
export default {
  name: 'langSwitch',
  data () {
    return{
      globalLang: globalStore.globalLang,
      langs: [{ id: 'eng', name: 'English' }, { id: 'de', name: 'Deutsch' }]
    }
  },
  computed: {
    computedVar: function () {
      return globalStore.globalLang
    },
    currentLang () {
      return this.$route.params.lang
    }
  }
}
</script>
