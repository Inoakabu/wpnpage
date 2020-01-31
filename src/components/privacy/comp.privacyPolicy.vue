<template>
  <section class="privacy-policy">
    <div v-for="(dat,idx) in data" :key="idx">
      <span v-for="(da,idx) in dat.privacyPolicy" :key="idx" v-html="da.value[currentLang]"></span>
    </div>
  </section>
</template>

<script>
const cockpit = require('../../assets/conf/cpAPI.json')
const fetcher = require('../../helpers/fetcher/fetcher')
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
      fetcher.getData(collURL).then((res) => {
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
  .privacy-policy-list {
    text-align: left;
    list-style: none;
  }

  .privacy-policy-listitems {
    left: 10rem;
    padding-top: 2rem;
  }
</style>
