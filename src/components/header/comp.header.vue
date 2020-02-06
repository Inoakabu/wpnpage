<template>
  <header class="header">
    <router-link :to="{name:'MainPage', params: {lang: currentlang}}" class="header-logo" alt="Walpurgisnacht">
      <logoComp/>
    </router-link>
    <navComp/>
  </header>
</template>

<script>
  import navComp from './comp.navigation'
  import logoComp from '@/assets/images/logo/festival/logo.svg'

  export default {
    name: 'Header',
    components: { logoComp, navComp },
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
    fill: var(--typo);
    transition: fill 200ms ease-in-out;
  }

  .header-logo:hover > svg {
    fill: var(--motiv);
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
    content: '';
    background: radial-gradient(circle, var(--background-translute) 0%, var(--background) 85%);
    display: block;
    width: 100%;
    position: absolute;
    min-height: 750px;
    top: 0;
    left: 0;
    z-index: -1;
  }
  
  .header:after {
    content: '';
    background-image: url('../../assets/images/background/bg.jpg');
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
