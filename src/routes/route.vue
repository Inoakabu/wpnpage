<template>
  <div id="website">
    <!-- <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <p class= "conText">The embers deep in the darkness will rise to an unholy fire in 2020.</p>
            <div class="modal-body">
              <constructionComp />
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <headerComp />
    <router-view></router-view>
    <foot />
  </div>
</template>

<script>
import headerComp from "@/components/header/comp.header";
import foot from "@/components/footer/comp.footer";
import constructionComp from "../components/construction/comp.construction";

export default {
  name: "app",
  components: { headerComp, foot, constructionComp },
  data() {
    return {
      showModal: true,
    };
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.98);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  } */

.modal-container {
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 120px;
  font-size: 2.5rem;
  text-align: justify;
  text-transform: uppercase;
  justify-content: space-between;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}
/* @media (max-width: 560px) {
    .modal-header {
      font-size: 1.5rem;
      padding: 500px
    }
    .modal-body {
      padding: 10px 5px
    }
  } */
:focus {
  outline: 0;
}

/*@import url("https://fonts.googleapis.com/css?family=Metal+Mania");*/
@font-face {
  font-family: "Haze";
  src: url("../../src/assets/font/Subway_Haze.ttf") format("ttf"),
    url("../../src/assets/font/Subway_Haze.woff") format("woff"),
    url("../../src/assets/font/Subway_Haze.woff2") format("woff2");
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
  --alert: #9b0025;
}

html {
  max-width: 1250px;
  margin: 0 auto;
  background-color: var(--background);
  color: var(--typo);
  font-family: "Haze", serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
  /* font-size: 1.4rem */
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
p {
  font-size: 1.8rem;
}

.button {
  color: var(--typo);
  font-weight: bold;
  font-family: "Haze", serif;
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
  content: "";
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
    font-size: 1rem;
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
    font-size: 0.8rem;
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
    font-size: 0.6rem;
  }
}
</style>
