<template>
  <header class ="header">
    <router-link to="/"><logoComp class ="header-logo"/></router-link>
    <navComp />
  </header>
</template>

<script>
import navComp from './comp.navigation'
import logoComp from './comp.logo'

export default {
  name: 'Header',
  components: { logoComp, navComp }
}
</script>

<style>
.header {
  display: flex;
  padding-top: 5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  position: relative;
  align-items: center;
}
.header-logo {
  align-self: center;
  height: 100px;
  width: auto;
  fill: var(--beige);
  transition: fill 200ms ease-in-out;
}
.header-logo:hover {
  fill: var(--gold);
}
@media (max-width: 960px) {
  .header {
    justify-content: center;
    flex-direction: column;
  }
  .header-logo {
    justify-content: center;
    align-items: center;
  }
}
.header::before {
  content: '';
  background-image: url('../../assets/images/dmed2019_web_bg_blank.jpg');
  display: block;
  max-width: 1600px;
  width: 100%;
  background-size: 100%;
  background-position-y: 90%;
  background-repeat: no-repeat;
  position: absolute;
  min-height: 750px;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.15;
}
@media (max-width: 960px) {
  .header:before {
    background-size: 120%;
    background-position-y: 100%;
    background-position-x: 50%;
    min-width: 1000px;
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
