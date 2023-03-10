<template>
  <section class="impressum">
    <!-- <div v-for="(dat, idx) in data" :key="idx">
      <span
        v-for="(da, idx) in dat.impressum"
        :key="idx"
        v-html="da.value[currentLang]"
      ></span>
    </div> -->
    <div>
      <h3>Impressum</h3>
      <br />
      <h4>{{ impressum.name }}</h4>
      <br />
      <div>
        {{ info.strasse }} <br />
        {{ info.plz }} <br />
        {{ info.ort }} <br />
        {{ info.land }} <br />
        Vertreten durch: {{ impressum.name_CO }} <br />
      </div>
      <br />
      <h4>Phone</h4>
      {{ info.tel }}<br /><br />
      <h4>E-Mail</h4>
      {{ impressum.email }}<br /><br />
      Umsatzsteuer-ID {{ impressum.umsatzsteuerID }} <br />
      Steuer Nr {{ impressum.steuerNR }}<br /><br />
      {{ impressum.FA }}<br /><br />
      <ul class="impressum-list">
        <li
          class="impressum-listitems"
          v-for="(item, index) in impressum[currentLang]"
          :key="index"
        >
          <h3>{{ item.h }}</h3>
          {{ item.text }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import infoJson from "../../assets/json/info.json";
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
      info: infoJson.info.contact,
      impressum: infoJson.impressum,
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
.impressum {
  text-align: left;
  padding: 2rem;
}
.impressum-listitems {
  list-style: none;
  padding-top: 2rem;
  padding-inline-end: 40px;
}
</style>
