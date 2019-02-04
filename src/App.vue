<template>
  <div id="app">
   <headerComp />
   <router-view></router-view>
  </div>
</template>

<script>
import headerComp from './components/header/comp.header'
export default {
  name: 'app',
  components: { headerComp }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Metal+Mania");
@font-face {
    font-family: "Haze";
    src:  url('../src/assets/font/Subway_Haze.ttf') format("ttf"),
          url('../src/assets/font/Subway_Haze.woff') format("woff"),
          url('../src/assets/font/Subway_Haze.woff2') format("woff2");
    font-weight: normal;
}

:root {
  --first: #e9e5e0;
  --first-darken: darken(#e9e5e0, 50%);
  --second: #9a6d46;
  --background: #171717;
  --gold: #ab784b; /*Typo / DMED-Logo* -- main */
  --mittelgrau: #57514a; /*Typo / Bandlogos -- typo */
  --beige: #9d8c7c; /*Hintergrundmotiv -- motiv */
  --elfenbein: #e9e6e2; /*Hintergrund -- background */
}

#app {
  font-family: "Haze";
  font-size: 16px;
  color: var(--mittelgrau);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
