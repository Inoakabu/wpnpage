<template>
<div>
  <select v-model="currentLang">
    <option v-for="lang in langs" v-bind:key="lang.id" v-bind:value="lang.id">{{ lang.name }}</option>
  </select>
  <div> {{ currentLang }}</div>
</div>
</template>

<script>

// TODO: emit currentLang value to globalStore.globalLang

import {globalStore} from '../../main.js'
export default {
  name: 'langSwitch',
  data () {
    return{
      currentLang: globalStore.globalLang,
      langs: [{ id: 'eng', name: 'English' }, { id: 'de', name: 'Deutsch' }]
    }
  },
  computed: {
    computedVar: function () {
      return globalStore.globalLang
    }
  }
}
</script>
