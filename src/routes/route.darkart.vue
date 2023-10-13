<template>
  <section class="band-page" v-if="artist">
    <h1 class="band-page-headline">{{ artist.name }}</h1>
    <div
      class="band-page-social"
      v-for="(link, idx) in artist.social"
      :key="idx"
    >
      <social
        :url="link.value.url"
        :name="link.value.name ? link.value.name : link.value.language"
      />
    </div>
    <p class="band-page-description">
      {{ description }}
    </p>
    <div class="tile-image--wrapper">
      <img
        style="w"
        class="tile-image"
        :src="imageSrc"
        :alt="`Bild von ${name}`"
      />
    </div>
    <h2>Galerie</h2>
    <compPictureSlider :input="pictures" />
    <router-view></router-view>
  </section>
</template>

<script>
import social from "@/components/social/comp.social-tag";
import fetcher from "../helpers/fetcher/fetcher";
import compPictureSlider from "../components/carousel/comp.pictureSlider.vue";

const cockpit = require("../assets/conf/cpAPI.json");
const collURL =
  JSON.stringify(cockpit.call.collURL).replace(/"/g, "") +
  "darkart" +
  cockpit.call.endStr +
  JSON.stringify(cockpit.call.token).replace(/"/g, "");

export default {
  name: "Artist",
  components: { social, compPictureSlider },
  data() {
    return {
      data: [],
      pictures: [],
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
    artist() {
      return this.data;
    },
    description() {
      if (!this.artist.text) {
        return "";
      }
      const result = this.artist.text.filter(
        (item) => item.value.language === this.currentLang
      );
      return result[0].value.description;
    },
    currentLang() {
      return this.$route.params.lang;
    },
  },
  methods: {
    async getData() {
      await fetcher(collURL).then((res) => {
        const result = res.entries.filter((item) => {
          return item.name === this.name;
        })[0];

        this.image = result.image.path;
        this.data = result;

        this.sculpArray(result);
      });
    },
    sculpArray(data) {
      const result = [];

      for (let image of data.pictures) {
        result.push(image);
      }

      this.pictures = result;
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
