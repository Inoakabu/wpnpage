<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/DMEDLogo.png">
    <PageHeader/>
    <Bands/>
  </div>
</template>

<script>
import Bands from './components/Bands.vue'
import PageHeader from './components/layout/PageHeader.vue'

export default {
  name: 'app',
  components: {
    Bands,
    PageHeader
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
