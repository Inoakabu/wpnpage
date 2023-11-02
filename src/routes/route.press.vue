<template>
  <section class="pressSection">
    <div v-for="(year, idx) in years" :key="idx">
      <h1 class="yearHead">{{ year }}</h1>
      <div
        class="press__articles"
        v-for="(articel, idx) in articels(year)"
        :key="idx"
      >
        <compCard
          class="press__article"
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
  },
  methods: {
    getData() {
      fetcher(collURL).then((res) => {
        this.data = res.entries.filter((e) => {
          return e.festival === "wpn";
        });

        this.setYearArray(this.data);
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
  padding: 3rem;
  text-align: center;
}

.press__articles .press__article {
  margin-bottom: 1rem;
}
</style>