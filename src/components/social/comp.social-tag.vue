<template>
  <a
    :href="url"
    class="social-item"
    :class="getType"
    :key="name"
    target="_blank"
    :alt="content[currentLang] + `${name.toUpperCase()}`"
    :title="content[currentLang] + `${name.toUpperCase()}`"
  >
    {{ firstLetterOfName }}
  </a>
</template>

<script>
import content from "@/assets/json/content.json";
export default {
  name: "Navigation",
  props: {
    url: { type: String, default: "https://www.instagram.com/stefvn.io/" },
    name: { type: String, default: "instagram" },
  },
  data() {
    return {
      content: content.header.social,
    };
  },
  computed: {
    getType() {
      /* eslint-disable */
      const regex = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/gim;
      let data = regex.exec(this.url) || null;
      if (data) {
        return data[1].replace(/\.com|\.de/gi, "");
      } else {
        return undefined;
      }
    },
    firstLetterOfName() {
      return this.name[0];
    },
    currentLang() {
      return this.$route.params.lang;
    },
  },
};
</script>

<style>
.social-item {
  display: inline-block;
  text-align: center;
  padding: 0.5rem;
  margin: 0 0.5rem;
  min-width: 1rem;
  max-height: 1rem;
  border-radius: 100%;
  border: 2px solid var(--motiv);
  background-color: transparent;
  color: var(--typo);
  font-weight: bold;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  text-transform: uppercase;
}

.social-item:hover {
  color: var(--background);
  border-color: transparent;
  background-color: var(--main);
}

.social-item.facebook.com:hover {
  background-color: #3b5998;
}

.social-item.facebook.com:hover {
  background-color: #ff0000;
}

.social-item.facebook.com:hover {
  background-color: #1da1f2;
}

.social-item.facebook.com:hover {
  background: #e1306c;
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

@media (max-width: 960px) {
  .nav-bar,
  .nav-wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .nav-item--big:nth-child(2) {
    margin-bottom: 1rem;
  }
}
</style>
