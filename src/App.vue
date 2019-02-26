<template>
  <div id="website">
    <headerComp/>
    <router-view></router-view>
    <foot/>
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

  /*@import url("https://fonts.googleapis.com/css?family=Metal+Mania");*/
  @font-face {
    font-family: "Haze";
    src: url('../src/assets/font/Subway_Haze.ttf') format("ttf"),
    url('../src/assets/font/Subway_Haze.woff') format("woff"),
    url('../src/assets/font/Subway_Haze.woff2') format("woff2");
    font-weight: normal;
  }

  :focus {
    outline: 0;
  }

  :root {
    --main: #ab784b;
    --typo: #57514a;
    --motiv: #9d8c7c;
    --background: #e9e6e2;
  }

  html {
    max-width: 1250px;
    margin: 0 auto;
    background-color: var(--background);
    color: var(--typo);
    font-family: 'Haze', serif;
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
  a {
    color: var(--main);
    text-decoration: none;
  }

  .button {
    color: var(--typo);
    font-weight: bold;
    font-family: 'Haze', serif;
    font-size: 1rem;
    line-height: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    border: 2px solid var(--typo);
    background-color: transparent;
    margin: 1rem;
    padding: 1rem;
    position: relative;
    transition: all 250ms ease-in-out;
    cursor: pointer;
  }

  .button::after {
    content: '';
    width: 100%;
    position: absolute;
    height: 100%;
    z-index: -1;
    left: 2%;
    top: 8%;
    border: 2px solid var(--main);
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
    border-color: var(--main);
  }

  section > h2 {
    margin: 3rem 0;
  }

  section {
    margin: 2rem 0;
    padding: 2rem;
  }

  .list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    margin-bottom: 3rem;
  }

  .list.four {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 960px) {
    .list {
      grid-template-columns: 1fr 1fr;
    }
    h3 {
      font-size: 1rem;
    }
    .button {
      font-size: 1rem
    }
  }

  @media (max-width: 560px) {
    .list {
      grid-template-columns: 1fr 1fr;
    }
    .list.four {
      grid-template-columns: 1fr 1fr;
    }
    h3 {
      font-size: 0.8rem;
    }
    .button {
      font-size: 0.8rem
    }
  }

  @media (max-width: 411px) {
    .list {
      grid-template-columns: 1fr 1fr;
    }
    .list.four {
      grid-template-columns: 1fr 1fr;
    }
    h3 {
      font-size: 0.6rem;
    }
    .button {
      font-size: 0.6rem
    }
  }

</style>
