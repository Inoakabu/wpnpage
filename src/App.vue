<template>
  <div id="app">
    <PageHeader/>
    <PageFooter/>
  </div>
</template>

<script>
import PageHeader from './components/layout/PageHeader.vue'
import PageFooter from './components/layout/PageFooter.vue'

export default {
  name: 'app',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>
@font-face {
    font-family: 'Subway Haze';
    src: url('') format('woff2'),
        url('') format('woff');
    font-weight: normal;
    font-style: normal;
}

:root {
  --first: #e9e5e0;
  --first-darken: darken(#e9e5e0, 50%);
  --second: #9a6d46;
  --background: #171717;
  --gold: #ab784b; /*Typo / DMED-Logo*/
  --mittelgrau: #57514a; /*Typo / Bandlogos*/
  --beige: #9d8c7c; /*Hintergrundmotiv*/
  --elfenbein: #e9e6e2; /*Hintergrund*/
}

#app {
  font-family: 'Metal Mania', cursive;
  text-align: center;
  margin-top: 60px;
  content: '';
  background-color: var(--background);
  color: var(--elfenbein);
  font-family: 'Metal Mania', cursive;
}
</style>
