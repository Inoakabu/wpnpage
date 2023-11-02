<template>
  <header class="header">
    <div class="header__meta">
      <div class="social-bar">
        <social
          v-for="item in socials"
          :key="item.name"
          :url="item.url"
          :name="item.name"
        />
      </div>
      <langSwitch />
    </div>
    <div class="header__navigation">
      <router-link
        :to="{ name: 'MainPage', params: { lang: currentlang } }"
        class="header-logo"
        alt="De Mortem Et Diabolum"
      >
        <logoComp />
      </router-link>
      <navComp />
    </div>
  </header>
</template>

<script>
import navComp from "./comp.navigation";
import logoComp from "@/assets/images/logo/festival/logo.svg";
import langSwitch from "../lang/langSwitch";
import { socials } from "@/assets/json/header.json";
import social from "@/components/social/comp.social-tag";

export default {
  name: "Header",
  components: { logoComp, navComp, langSwitch, social },
  data() {
    return {
      socials,
    };
  },
  computed: {
    currentlang() {
      return this.$route.params.lang;
    },
  },
};
</script>

<style>
.header {
  padding: 1rem 2rem;
  position: relative;
}

.header__meta {
  display: flex;
  justify-content: flex-end;
}

.header__navigation {
  display: flex;
}

.header-logo > svg {
  align-self: center;
  height: 5rem;
  width: auto;
  fill: var(--typo);
  transition: fill 200ms ease-in-out;
}

.header-logo:hover > svg {
  fill: var(--motiv);
}

@media (max-width: 960px) {
  .header,
  .header__navigation {
    justify-content: center;
    flex-direction: column;
  }

  .header-logo {
    justify-content: center;
    align-items: center;
    align-self: center;
  }
}

.header:before {
  content: "";
  background: radial-gradient(
    circle,
    var(--background-translute) 0%,
    var(--background) 85%
  );
  display: block;
  width: 100%;
  position: absolute;
  min-height: 750px;
  top: 0;
  left: 0;
  z-index: -1;
}

.header:after {
  content: "";
  background-image: url("../../assets/images/background/bg.jpg");
  display: block;
  width: 100%;
  background-size: 100%;
  background-position-y: 30%;
  background-repeat: no-repeat;
  position: absolute;
  min-height: 750px;
  top: 0;
  left: 0;
  z-index: -2;
  opacity: 0.15;
}

@media (max-width: 960px) {
  .header:before {
    background-size: 120%;
    background-position-y: 100%;
    background-position-x: 50%;
    min-height: 1000px;
  }
}

@media (max-width: 700px) {
  .header:before {
    background-size: 275%;
  }
}

@media (max-width: 425px) {
  .header:before {
    background-size: 235%;
  }
}

@media (max-width: 320px) {
  .header:before {
    background-size: 275%;
  }
}
</style>
