<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/DMEDLogo.png">
    <PageHeader/>
    <Bands/>
    <PageFooter/>
  </div>
</template>

<script>
import PageHeader from './components/layout/PageHeader.vue'
import Bands from './components/Bands.vue'
import PageHeader from './components/layout/PageFooter.vue'

export default {
  name: 'app',
  components: {
    PageHeader,
    Bands,
    PageFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  background-image: -moz-element()
}
body{
  background-color: black
}
</style>
