<template>
  <section class="pressSection">
    <div v-if="!this.data.length">Keine Presse Posts vorhanden</div>
    <div v-else v-for="(year, idx) in years" :key="idx">
      <h1 class="yearHead">{{ year }}</h1>
      <div v-for="(articel, idx) in articels(year)" :key="idx">
        <compCard
          :image="imageSrc(articel.image.path)"
          :headline="articel.name"
          :text="description(articel)"
          :link="articel.links"
        />
      </div>
    </div>
  </section>
</template>

<script>
import fetcher from "../helpers/fetcher/fetcher";
import compCard from "../components/card/comp.card.vue";

const cockpit = require("../assets/conf/cpAPI.json");

const collURL =
  JSON.stringify(cockpit.call.collURL).replace(/"/g, "") +
  "presse" +
  cockpit.call.endStr +
  JSON.stringify(cockpit.call.token).replace(/"/g, "");

export default {
  name: "Press",
  components: {
    compCard,
  },
  data() {
    return {
      data: [],
      years: [],
    };
  },
  computed: {
    filteredData() {
      let toFilter = this.data;

      if (toFilter.length) {
        toFilter = toFilter.filter((e) => {
          return e.show === true;
        });
      }

      return toFilter;
    },
    currentLang() {
      return this.$route.params.lang;
    },
    captionText() {
      if (this.currentLang === "de") {
        return "Bild klicken, um den Artikel zu öffnen.";
      }

      return "Click on the image to open the article.";
    },
  },
  methods: {
    getData() {
      fetcher(collURL).then((res) => {
        this.data = res.entries.filter((e) => {
          return e.festival === "wpn";
        });

        this.setYearArray(res.entries);
      });
    },
    imageSrc(image) {
      return cockpit.call.baseURL + "/" + image;
    },
    description(data) {
      if (!data.description) {
        return "";
      }
      const result = data.description.filter(
        (item) => item.value.language === this.currentLang
      );
      return result[0].value.description;
    },
    setYearArray(data) {
      const result = [];

      for (let item of data) {
        result.push(item.year);
      }

      result.sort();
      result.reverse();

      this.years = new Set(result);
    },
    articels(year) {
      return this.filteredData.filter((item) => {
        return item.year === year;
      });
    },
  },
  created: function () {
    this.getData();
  },
};
</script>

<style>
.yearHead {
  padding-bottom: 3rem;
}
.pressSection {
  text-align: center;
  padding: 2rem;
  padding-top: 3rem;
}
</style>