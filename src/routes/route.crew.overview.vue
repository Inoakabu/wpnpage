<template>
  <section class="bands ov">
    <div class="blog-page-headline" v-if="comingSoon">
      Crew is coming soon. Stay tuned!
    </div>
    <div v-else>
      <h2>Organizer</h2>
      <div class="list four ov">
        <SwitchTile
          v-for="(item, idx) in promoter"
          :key="idx"
          :name="item.name"
          :imageBefore="item.imageBefore.path"
          :imageAfter="item.imageAfter.path"
          :imagePath="'logo/crew'"
          :route="'CrewPage'"
          :id="item.name"
          backgroundImg
          border
        />
      </div>
      <h2>Crew</h2>
      <div class="list four ov">
        <SwitchTile
          v-for="(item, idx) in team"
          :key="idx"
          :name="item.name"
          :imageBefore="item.imageBefore.path"
          :imageAfter="item.imageAfter.path"
          :imagePath="'logo/crew'"
          :route="'CrewPage'"
          :id="item.name"
          backgroundImg
          border
        />
      </div>
      <div v-if="partners.length">
        <h2>Partner</h2>
        <div class="list four ov">
          <SwitchTile
            v-for="(item, idx) in partners"
            :key="idx"
            :name="item.name"
            :imageBefore="item.imageBefore.path"
            :imageAfter="item.imageAfter.path"
            :imagePath="'logo/crew'"
            :route="'CrewPage'"
            :id="item.name"
            backgroundImg
            border
          />
        </div>
      </div>
    </div>
    <router-view></router-view>
  </section>
</template>
<script>
import SwitchTile from "@/components/switchTile/comp.switchTile.vue";

import fetcher from "../helpers/fetcher/fetcher";
const cockpit = require("../assets/conf/cpAPI.json");

const collURL =
  JSON.stringify(cockpit.call.collURL).replace(/"/g, "") +
  "crew" +
  cockpit.call.endStr +
  JSON.stringify(cockpit.call.token).replace(/"/g, "");

export default {
  name: "Crew",
  components: { SwitchTile: SwitchTile },
  data() {
    return {
      data: [],
      promoter: [],
      team: [],
      partners: [],
      comingSoon: false,
    };
  },
  computed: {},
  methods: {
    filteredData() {
      let toFilter = this.data;

      if (toFilter.length) {
        toFilter = toFilter.filter((e) => {
          return e.show === true;
        });
      }

      return toFilter;
    },
    crew() {
      const filteredData = this.filteredData();

      let sorting = filteredData.slice().sort(function (a, b) {
        return a.position - b.position;
      });

      for (let item of sorting) {
        if (item.assignment === "Veranstaltende") {
          this.promoter.push(item);
        }

        if (item.assignment === "Team") {
          this.team.push(item);
        }

        if (item.assignment === "Partner") {
          item.imageAfter = item.imageBefore;
          this.partners.push(item);
        }
      }
    },
    getData: function () {
      fetcher(collURL).then((res) => {
        this.data = res.entries;
        this.crew();
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
