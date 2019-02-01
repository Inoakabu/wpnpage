<template>
  <div class = "bands">
    <h2>Bands</h2>
    <ul class = "band-list">
      <li class = "band">
        <h3 class = "band-name">arroganz</h3>
        <img class = "band-image" src="../../assets/BandLogos/BandLogosWBackground/dmed2019_web_announce_band_arroganz.jpg">
      </li>
      <li class = "band">
        <h3 class = "band-name">ascension</h3>
        <img class = "band-image" src="../../assets/BandLogos/BandLogosWBackground/dmed2019_web_announce_band_ascension.jpg">
      </li>
      <li class = "band">
        <h3 class = "band-name">membaris</h3>
        <img class = "band-image" src="../../assets/BandLogos/BandLogosWBackground/dmed2019_web_announce_band_membaris.jpg">
      </li>
      <li class = "band">
        <h3 class = "band-name">sinmara</h3>
        <img class = "band-image" src="../../assets/BandLogos/BandLogosWBackground/dmed2019_web_announce_band_sinmara.jpg">
      </li>
    </ul>
  </div>
</template>

<style>
.bands {
  text-align: center;
  padding: 2rem;
}

.band-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  list-style: none;
  padding: 0;
}

.band {
  position: relative;
  border: 2px solid var(--motiv);
  padding: 1rem;
  transition: all 200ms ease-in-out;
}
.band:hover {
  border-color: var(--main);
}

.band::after {
  content: "";
  width: 100%;
  position: absolute;
  height: 100%;
  z-index: -1;
  left: 2%;
  top: 2%;
  border: 2px solid var(--main);
  background-color: transparent;
  transition: all 200ms ease-in-out;
}
.band:hover::after {
  height: 95%;
  width: 95%;
  border-color: var(--main);
  background-color: var(--main);
  opacity: 0.2;
}

.band::before {
  /* filter: invert(100%); /* Invert */
  content: "";
  /* background-image: url("src/images/background/bg.jpg"); */
  width: 95%;
  background-size: 350%;
  background-position: center;
  position: absolute;
  height: 95%;
  z-index: -1;
  left: 2.5%;
  top: 2.5%;
  opacity: 0.2;
}

.band-name {
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  color: var(--main);
  font-size: 2rem;
}
.band-name::before {
  content: "[";
}
.band-name::after {
  content: "]";
}

.band-image {
  /* filter: invert(100%); /* Invert */
  width: 100%;
}

</style>
