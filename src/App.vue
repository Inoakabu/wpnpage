<template>
  <div id="app">
   <headerComp />
   <router-view></router-view>
   <foot />
  </div>
</template>

<script>
import headerComp from './components/header/comp.header'
import foot from './components/footer/comp.footer'
export default {
  name: 'app',
  components: { headerComp, foot }
}
</script>

<style>
:focus {
  outline: 0;
}

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
html {
  max-width: 1250px;
  margin: 0 auto;
  background-color: var(--elfenbein);
  color: var(--mittelgrau);
  font-family: 'Haze';
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-smoothing: grayscale;
}
body {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4 {
  text-transform: uppercase;
  margin: 0;
}
h1 {
  font-size: 4rem;
  line-height: 4rem;
  margin: 0.5rem 0;
}

h2 {
  font-size: 2.5rem;
  line-height: 2.5rem;
}
.button {
  color: var(--main);
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  border: 2px solid var(--main);
  background-color: transparent;
  margin: 1rem;
  padding: 1rem;
  position: relative;
  transition: all 250ms ease-in-out;
}
.button::after {
  content: '';
  width: 100%;
  position: absolute;
  height: 100%;
  z-index: -1;
  left: 2%;
  top: 8%;
  border: 2px solid var(--motiv);
  background-color: transparent;
  transition: all 200ms ease-in-out;
  opacity: 0.6;
}
.button:hover::after {
  background-color: var(--main);
  opacity: 0.2;
}
.button:hover {
  color: var(--background);
  background-color: var(--main);
}

section > h2 {
  margin: 5rem 0;
}

section {
  margin: 3rem 0;
}
</style>
