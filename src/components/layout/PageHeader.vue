<template>
<body>
  <header class="header">
    <img class="logo" src="@/assets/DMEDLogo.png">
    <div class="header-wrapper">
      <nav class="nav-bar">
        <div class="nav-wrapper">
          <a href="#" class="nav-item nav-item--big">Tickets</a>
          <a href="#" class="nav-item nav-item--big">Bands</a>
        </div>
        <div class="nav-wrapper">
          <a href="#" class="nav-item">Shop</a>
          <a href="#" class="nav-item">News</a>
          <a href="#" class="nav-item">Info</a>
        </div>
      </nav>
      <nav class="social-bar">
        <a href="#" class="social-item facebook">F</a>
        <a href="#" class="social-item twitter">T</a>
        <a href="#" class="social-item instagram">I</a>
        <a href="#" class="social-item youtube">y</a>
      </nav>
    </div>
  </header>
  <section class="intro">
    <div class="count">
      <h3>Festival-Countdown</h3>
      <h1>{{days}} : {{hours}} : {{minutes}} : {{seconds}}</h1>
      <p>Days : Hrs : Min : Sec</p>
    </div>
  </section>
</body>
</template>
<script>
export default {

}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Metal+Mania");


/* :root {
  --first: #e9e5e0;
  --first-darken: darken(#e9e5e0, 50%);
  --second: #9a6d46;
  --background: #171717;
} */

.body {
  max-width: 1600px;
  margin: 0 auto;
  background-color: var(--background);
  color: var(--first);
  font-family: 'Metal Mania', cursive;
  font-size: 16px;
}

.header {
  display: flex;
  padding-top: 5rem;
}

.logo {
  width: 150px;
  align-self: center;
  filter: invert(100%)
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
}

.nav-wrapper {
  align-self: center;
}

.nav-item {
  margin: 1rem;
  line-height: 1rem;
  color: var(--main);
  text-decoration: none;
  transition: color 200ms ease-in-out;
}

.nav-item:hover {
  color: var(--gold);
}

.nav-item--big {
  font-size: 1.8rem;
}

.social-bar {
  display: inline-flex;
  padding: 1rem;
}

.social-item {
  display: inline-block;
  text-align: center;
  padding: 1rem;
  margin: 0 1rem;
  min-width: 1rem;
  border-radius: 100%;
  background-color: var(--first);
  color: var(--background);
  font-weight: bold;
  text-decoration: none;
  transition: all 200ms ease-in-out;
}

.social-item:hover {
  background-color: var(--second);
}

.social-item.facebook:hover {
  background-color: #3b5998;
}

.social-item.youtube:hover {
  background-color: #ff0000;
}

.social-item.twitter:hover {
  background-color: #1da1f2;
}

.social-item.instagram:hover {
  background-color: #e1306c;
}

.intro {
  margin-top: 150px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro:before {
  content: "";
  display: block;
  max-width: 1600px;
  width: 100%;
  position: absolute;
  height: 750px;
  top: 0;
  z-index: -1;
  opacity: 0.25;
}

.count {
  text-align: center;
}

.count p {
  color: var(--first-darken);
  text-transform: uppercase;
}

.footer {
  height: 500px;
}

</style>
