<template>
  <header class="header">
    <router-link :to="{name:'MainPage', params: {lang: currentlang}}" class="header-logo" alt="De Mortem Et Diabolum">
      <logoComp/>
    </router-link>
    <navComp/>
    <langSwitch/>
  </header>
</template>

<script>
  import langSwitch from '../lang/langSwitch'
  import navComp from './comp.navigation'
  import logoComp from '@/assets/images/logo/festival/logo.svg'

  export default {
    name: 'Header',
    components: { logoComp, navComp, langSwitch },
    computed: {
      currentlang () {
        return this.$route.params.lang
      }
    }
  }
</script>

<style>
  .header {
    display: flex;
    padding-top: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    position: relative;
  }

  .header-logo > svg {
    align-self: center;
    height: 100px;
    width: auto;
    fill: var(--motiv);
    transition: fill 200ms ease-in-out;
  }

  .header-logo:hover > svg {
    fill: var(--main);
  }

  @media (max-width: 960px) {
    .header {
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
    /*filter: invert(100%); !* Invert *!*/
    content: '';
    background-image: url('../../assets/images/background/bg.jpg');
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
