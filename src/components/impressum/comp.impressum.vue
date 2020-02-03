<template>
  <section class="impressum">
    <div v-for="(dat,idx) in data" :key="idx">
      <span v-for="(da,idx) in dat.impressum" :key="idx" v-html="da.value[currentLang]"></span>
    </div>
  </section>
</template>

<script>
const cockpit = require('../../assets/conf/cpAPI.json')
// const fetcher = require('../../helpers/fetcher/fetcher')
// eslint-disable-next-line import/first
import fetcher from '../../helpers/fetcher/fetcher';

const collURL = JSON.stringify(cockpit.call.collURL).replace(/"/g, "") + 'footer' + cockpit.call.endStr + JSON.stringify(cockpit.call.token).replace(/"/g, "")

export default {
  data () {
    return {
      data: []
    }
  },
  computed: {
    currentLang () {
        return this.$route.params.lang
      }
  },
  methods: {
    getData: function() {
      fetcher(collURL).then((res) => {
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
  .impressum {
    text-align: center;
    padding: 2rem;
  }
  .impressum-listitems {
    list-style: none;
    padding-top: 2rem;
    padding-inline-end: 40px;
  }
</style>
