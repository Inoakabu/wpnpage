<template>
  <section class="band-page" v-if="band">
    <h1 class="band-page-headline">{{ band.name }}</h1>
    <div class="band-page-social" v-for="(link, idx) in band.links" :key="idx">
      <social :url="link.value.url" :name="link.value.language" />
    </div>
    <p class="band-page-description">
      {{ description }}
    </p>
    <youtube class="band-page-video" :link="band.video" />
    <router-view></router-view>
  </section>
</template>

<script>
import youtube from "@/components/social/comp.youtube-embedded";
import social from "@/components/social/comp.social-tag";
// import bandJson from '@/assets/json/bands.json'
const cockpit = require("../assets/conf/cpAPI.json");
// const fetcher = require('../helpers/fetcher/fetcher')
// eslint-disable-next-line import/first
import fetcher from "../helpers/fetcher/fetcher";

const collURL =
  JSON.stringify(cockpit.call.collURL).replace(/"/g, "") +
  "wpnBands" +
  cockpit.call.endStr +
  JSON.stringify(cockpit.call.token).replace(/"/g, "");

export default {
  name: "Band",
  components: { youtube, social },
  data() {
    return {
      data: [],
    };
  },
  computed: {
    name() {
      return this.$route.params.id;
    },
    band() {
      return this.data;
      // return this.data.filter(
      //   (b) => b.name.toLowerCase() === this.name.toLowerCase()
      // )[0];
    },
    description() {
      if (!this.band.description) {
        return "";
      }
      const result = this.band.description.filter(
        (item) => item.value.language === this.currentLang
      );
      return result[0].value.description;
    },
    currentLang() {
      return this.$route.params.lang;
    },
  },
  methods: {
    getData: function () {
      fetcher(collURL).then((res) => {
        const result = res.entries.filter((item) => {
          return item.name === this.name;
        })[0];
        this.data = result;
      });
    },
  },
  created: function () {
    this.getData();
  },
};
</script>

<style scoped>
.band-page {
  text-align: center;
}
.band-page-headline {
  text-align: center;
  margin: 5rem 0;
}

.band-page-description {
  line-height: 1.5rem;
  /* padding-top: 10rem; */
  padding-top: 3rem;
  hyphens: auto;
  text-align: left;
}

.band-page-video {
  padding-top: 1rem;
}

.band-page-social {
  display: inline-flex;
  padding: 1rem;
  align-self: center;
}

@media (max-width: 960px) {
  .band-page-headline {
    font-size: 3rem;
  }
  .band-page-description {
    font-size: 1.5rem;
  }
  /* .band-page-video {
      width: 100%;
      height: 100%;
    } */
}

@media (max-width: 560px) {
  .band-page-headline {
    font-size: 2.3rem;
  }
  .band-page-description {
    font-size: 1rem;
  }
}

@media (max-width: 411px) {
  .band-page-headline {
    font-size: 2.3rem;
  }
  .band-page-description {
    font-size: 1rem;
  }
}
</style>
