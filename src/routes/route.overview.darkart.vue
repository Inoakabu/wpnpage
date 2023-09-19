<template>
  <section class="bands ov">
    <h2>Artists</h2>
    <div class="list four ov">
      <Tile
        v-for="(artist, idx) in darkart"
        :key="idx"
        :name="artist.name"
        :image="artist.image.path"
        :imagePath="'logo/artist'"
        :route="'ArtistPage'"
        :id="artist.name"
        backgroundImg
        border
      />
    </div>
    <router-view></router-view>
  </section>
</template>
<script>
import Tile from "@/components/tile/comp.tile";
const cockpit = require("../assets/conf/cpAPI.json");
// const fetcher = require('../helpers/fetcher/fetcher')
// eslint-disable-next-line import/first
import fetcher from "../helpers/fetcher/fetcher";

const collURL =
  JSON.stringify(cockpit.call.collURL).replace(/"/g, "") +
  "darkart" +
  cockpit.call.endStr +
  JSON.stringify(cockpit.call.token).replace(/"/g, "");

export default {
  name: "Darkart",
  components: { Tile },
  data() {
    return {
      data: [],
    };
  },
  computed: {
    darkart() {
      return this.filteredData.slice().sort(function (a, b) {
        return a.position - b.position;
      });
    },
    filteredData() {
      let toFilter = this.data;
      if (toFilter.length) {
        toFilter = toFilter.filter((e) => {
          return e.show === true;
        });
      }
      return toFilter;
    },
  },
  methods: {
    getData: function () {
      fetcher(collURL).then((res) => {
        this.data = res.entries;
      });
    },
  },
  created: function () {
    this.getData();
  },
};
</script>
<style>
.bands.ov {
  text-align: center;
  padding: 2rem;
  /* padding-top: 11rem; */
  padding-top: 3rem;
}
.list.four.ov {
  /* padding-top: 12rem; */
  padding-top: 3rem;
}
</style>
