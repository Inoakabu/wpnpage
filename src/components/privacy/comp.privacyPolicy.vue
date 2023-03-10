<template>
  <section class="privacy-policy">
    <!-- <div v-for="(dat,idx) in data" :key="idx">
      <span v-for="(da,idx) in dat.privacyPolicy" :key="idx" v-html="da.value[currentLang]"></span>
    </div> -->
    <div class="privacy-policy">
      <h1>{{ content.title[currentLang] }}</h1>
      <ol class="privacy-policy-list">
        <li
          class="privacy-policy-listitems"
          v-for="(item, index) in content[currentLang]"
          :key="index"
        >
          <h2>{{ item.h }}</h2>
          <br />
          <h3>{{ item.h2 }}</h3>
          {{ item.text }}<br />
          <ul class="privacy-policy-sublist">
            <li
              class="privacy-policy-sublistItem"
              v-for="(subitem, index) in item.list"
              :key="index"
            >
              {{ subitem }}
            </li>
          </ul>
          <br />
          {{ item.text2 }}
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import content from "@/assets/json/info.json";
const cockpit = require("../../assets/conf/cpAPI.json");
// const fetcher = require('../../helpers/fetcher/fetcher')
// eslint-disable-next-line import/first
import fetcher from "../../helpers/fetcher/fetcher";

const collURL =
  JSON.stringify(cockpit.call.collURL).replace(/"/g, "") +
  "footer" +
  cockpit.call.endStr +
  JSON.stringify(cockpit.call.token).replace(/"/g, "");

export default {
  data() {
    return {
      data: [],
      content: content.privacy_policy,
    };
  },
  computed: {
    currentLang() {
      return this.$route.params.lang;
    },
  },
  // methods: {
  //   getData: function () {
  //     fetcher(collURL).then((res) => {
  //       this.data = res.entries;
  //     });
  //   },
  // },
  // created: function () {
  //   this.getData();
  // },
};
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
