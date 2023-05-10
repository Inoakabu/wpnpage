<template>
  <section class="blog-page" v-if="data">
    <div class="blog-page-headline" v-if="comingSoon">
      Blog is coming soon. Stay tuned!
    </div>
    <div v-else v-for="(entry, idx) in filteredData" :key="idx">
      <h1 class="blog-page-headline">{{ entry.title }}</h1>
      <span v-html="blogText(entry.text)"></span>
      <div class="div-image" v-if="imageSrc(entry)">
        <img class="blog-page-image" :src="imageSrc(entry)" alt="blog image" />
      </div>
    </div>
  </section>
</template>

<script>
import fetcher from "../helpers/fetcher/fetcher";

const cockpit = require("../assets/conf/cpAPI.json");

const collURL =
  JSON.stringify(cockpit.call.collURL).replace(/"/g, "") +
  "blog" +
  cockpit.call.endStr +
  JSON.stringify(cockpit.call.token).replace(/"/g, "");

export default {
  name: "Blog",
  data() {
    return {
      data: [],
      comingSoon: false,
    };
  },
  methods: {
    getData: function () {
      fetcher(collURL).then((res) => {
        if (!res.entries.length) {
          this.comingSoon = true;
        }
        this.data = res.entries;
      });
    },
    blogText(item) {
      const result = item.filter(
        (item) => item.value.language === this.currentLang
      );
      return result[0].value.text;
    },
    imageSrc(data) {
      if (!data.thumbnail) {
        return;
      }

      return cockpit.call.baseURL + "/" + data.thumbnail.path;
    },
  },
  computed: {
    filteredData() {
      let toFilter = this.data;

      if (toFilter.length) {
        toFilter = toFilter.filter((item) => {
          return item.published === true;
        });
      }

      return toFilter;
    },
    currentLang() {
      return this.$route.params.lang;
    },
  },
  created: function () {
    this.getData();
  },
};
</script>

<style>
.blog-page {
  text-align: center;
}
.blog-page-headline {
  text-align: center;
  margin: 5rem 0;
}

.blog-page-description {
  line-height: 1.5rem;
  /* padding-top: 10rem; */
  padding-top: 3rem;
  hyphens: auto;
  text-align: left;
}

.blog-page-video {
  padding-top: 5rem;
}

.blog-page-social {
  display: inline-flex;
  padding: 1rem;
  align-self: center;
}

.blog-page-image {
  max-width: 780px;
}
.div-image {
  text-align: center;
}

@media (max-width: 960px) {
  .blog-page-image {
    max-width: 450px;
  }
  .blog-page-headline {
    font-size: 2.5rem;
  }
  .blog-page-description {
    font-size: 1.5rem;
  }
}

@media (max-width: 560px) {
  .blog-page-image {
    max-width: 350px;
  }
  .blog-page-headline {
    font-size: 2rem;
  }
  .blog-page-description {
    font-size: 1rem;
  }
}

@media (max-width: 411px) {
  .blog-page-image {
    max-width: 220px;
  }
  .blog-page-headline {
    font-size: 1.7rem;
  }
  .blog-page-description {
    font-size: 1rem;
  }
}
</style>