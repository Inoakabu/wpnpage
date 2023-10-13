<template>
  <section class="band-page" v-if="crew">
    <h1 class="band-page-headline">{{ crew.name }}</h1>
    <div v-if="crew.assignment === 'Partner'">
      <a :href="crew.social" target="_blank">
        <div class="tile-image--wrapper">
          <img
            style="w"
            class="tile-image"
            :src="imageSrc"
            :alt="`Bild von ${name}`"
          />
          <figcaption>{{ captionText }}</figcaption>
        </div>
      </a>
    </div>
    <div v-else>
      <div class="tile-image--wrapper">
        <img
          style="w"
          class="tile-image"
          :src="imageSrc"
          :alt="`Bild von ${name}`"
        />
      </div>
    </div>
    <p class="band-page-description">
      {{ text }}
    </p>
    <router-view></router-view>
  </section>
</template>

<script>
const cockpit = require("../assets/conf/cpAPI.json");
// const fetcher = require('../helpers/fetcher/fetcher')
// eslint-disable-next-line import/first
import fetcher from "../helpers/fetcher/fetcher";

const collURL =
  JSON.stringify(cockpit.call.collURL).replace(/"/g, "") +
  "crew" +
  cockpit.call.endStr +
  JSON.stringify(cockpit.call.token).replace(/"/g, "");

export default {
  name: "Band",
  components: {},
  data() {
    return {
      data: [],
      image: "",
    };
  },
  computed: {
    imageSrc() {
      return cockpit.call.baseURL + "/" + this.image;
    },
    name() {
      return this.$route.params.id;
    },
    crew() {
      return this.data;
    },
    text() {
      if (this.crew.text) {
        const result = this.crew.text.filter(
          (item) => item.value.language === this.currentLang
        );

        if (result[0]) {
          return result[0].value.description;
        }
      }
      return "";
    },
    captionText() {
      if (this.currentLang === "de") {
        return "Bild klicken, um die Homepage zu öffnen.";
      }

      return "Click on the image to open the homepage.";
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

        this.image = result.imageBefore.path;
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
.tile {
  position: relative;
  padding: 1rem;
  padding-bottom: 3rem;
  transition: all 200ms ease-in-out;
}

.tile-image--wrapper {
  height: 100%;
  overflow: hidden;
  text-align: -webkit-center;
}

.tile-image {
  display: block;
}

.tile-image--wrapper > img {
  height: 50%;
  width: 50%;
  object-fit: cover;
  transition: all 550ms ease-in-out;
}
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
