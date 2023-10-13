<template>
  <div class="impression-page" v-if="data">
    <h1 class="impression-page-headline">{{ header }}</h1>
    <compPictureSliderVue :input="data" />
  </div>
</template>

<script>
import compPictureSliderVue from "../components/carousel/comp.pictureSlider.vue";
import fetcher from "../helpers/fetcher/fetcher";
const cockpit = require("../assets/conf/cpAPI.json");

const collURL =
  JSON.stringify(cockpit.call.collURL).replace(/"/g, "") +
  "impression" +
  cockpit.call.endStr +
  JSON.stringify(cockpit.call.token).replace(/"/g, "");

export default {
  name: "Impressions",
  components: {
    compPictureSliderVue,
  },
  data() {
    return {
      data: [],
    };
  },
  computed: {
    header() {
      if (this.currentLang === "de") {
        return "Impressionen";
      }
      return "Impressions";
    },
    currentLang() {
      return this.$route.params.lang;
    },
  },
  methods: {
    async getData() {
      await fetcher(collURL).then((res) => {
        this.sculpArray(res.entries);
      });
    },
    sculpArray(data) {
      const result = [];

      for (let image of data[0].pictures) {
        result.push(image);
      }

      this.data = result;
    },
  },
  created: function () {
    this.getData();
  },
};
</script>

<style>
.impression-page {
  text-align: center;
}
.impression-page-headline {
  text-align: center;
  margin: 5rem 0;
}
</style>