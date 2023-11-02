<template>
  <nav class="nav-wrapper">
    <div class="nav-bar">
      <router-link
        :to="{ name: item.route, params: { lang: currentLang } }"
        class="nav-item"
        :alt="item.alt[currentLang]"
        :title="item.alt[currentLang]"
        v-for="item in navigation"
        :key="item.name"
        :class="{ 'nav-item--big': item.big }"
      >
        {{ item.name }}
      </router-link>
    </div>
  </nav>
</template>

<script>
import { navigation } from "@/assets/json/header.json";

export default {
  name: "Navigation",
  data() {
    return {
      navigation: navigation,
    };
  },
  computed: {
    currentLang() {
      return this.$route.params.lang;
    },
    activeNav: function () {
      let filterNav = this.navigation;
      if (filterNav.tickets.active === true) {
        filterNav = filterNav.filter((n) => {
          return n.active === true;
        });
      }
      return filterNav;
    },
  },
};
</script>

<style>
.nav-bar {
  display: flex;
  padding: 1rem;
  flex-wrap: nowrap;
}

.nav-item {
  margin: 0.5rem 0.5rem 0.3rem 0.5rem;
  line-height: 1.3rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  align-self: center;
  display: inline-block;
  color: var(--typo);
  font-weight: bold;
  text-decoration: none;
  transition: color 200ms ease-in-out;
}

.nav-item:hover {
  color: var(--main);
}

.nav-item--big {
  margin: 0.5rem;
  font-size: 1.8rem;
  line-height: 1.8rem;
}

.social-bar {
  display: inline-flex;
  padding: 1rem;
  align-self: center;
}

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

.social-item.facebook:hover {
  background-color: #3b5998;
}

.social-item.youtube:hover {
  background-color: #ff0000;
}

.social-item.twitter:hover {
  background-color: #1da1f2;
}

.social-item.instagram:hover {
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
