<template>
  <div id="slider">
    <div class="slider">
      <a class="play" href="#"></a>
      <ul class="slides" :style="{ left: -width * current + 'px' }">
        <li v-for="(slide, i) in input" :key="i">
          <img :src="imageSrc(slide)" alt="" />
        </li>
      </ul>
      <a v-if="!this.isPause" class="pause" href="#" @click.prevent="pause"
        >||</a
      >
      <a v-else class="start" href="#" @click.prevent="start">></a>
      <a class="prev" href="#" @click.prevent="prevSlide">{{ prev }}</a>
      <a class="next" href="#" @click.prevent="nextSlide">{{ next }}</a>
    </div>
  </div>
</template>

<!-- eslint-disable vue/require-valid-default-prop -->
<script>
const cockpit = require("../../assets/conf/cpAPI.json");

export default {
  name: "pictureSlider",
  props: {
    input: { type: Array, default: [] },
  },
  data() {
    return {
      current: 0,
      width: 800,
      timer: 0,
      isPause: false,
      prev: "<",
      next: ">",
    };
  },
  methods: {
    imageSrc(image) {
      return cockpit.call.baseURL + "/" + image.path;
    },
    nextSlide: function () {
      this.current++;
      if (this.current >= this.input.length) this.current = 0;
      this.resetPlay();
    },
    prevSlide: function () {
      this.current--;
      if (this.current < 0) this.current = this.input.length - 1;
      this.resetPlay();
    },
    resetPlay: function () {
      clearInterval(this.timer);
      this.play();
    },
    pause() {
      this.isPause = !this.isPause;
      clearInterval(this.timer);
    },
    start() {
      this.isPause = !this.isPause;
      this.play();
    },
    play: function () {
      let app = this;
      this.timer = setTimeout(function () {
        app.nextSlide();
      }, 5000);
    },
  },
  created: function () {
    this.play();
  },
};
</script>

<style>
#slider {
  width: 100%;
}
.slider {
  margin: 0 auto;
  padding: 0;
  width: 800px;
  height: 400px;
  position: relative;
  overflow: hidden;
}

.slider ul.slides {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: table;
  position: absolute;
  top: 0;
  transition: left 800ms;
}

.slider ul.slides li {
  list-style-type: none;
  display: table-cell;
}

.slider ul.slides li img {
  width: 800px;
  aspect-ratio: 16/9;
  object-fit: contain;
}

.slider .prev,
.slider .next {
  text-decoration: none;
  color: #fff;
  position: absolute;
  z-index: 1;
  font-size: 42px;
  top: 43%;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.slider .prev {
  left: 20px;
}
.slider .next {
  right: 20px;
}

.slider .pause,
.slider .start {
  text-decoration: none;
  color: #fff;
  position: absolute;
  z-index: 1;
  font-size: 42px;
  top: 43%;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  top: 10px;
  right: 20px;
}

@media (max-width: 960px) {
  .slider {
    margin: 0 auto;
    padding: 0;
    width: 400px;
    height: 200px;
    position: relative;
    overflow: hidden;
  }
  .slider ul.slides {
    width: 50%;
    height: 50%;
    margin: 0;
    padding: 0;
    display: table;
    position: absolute;
    top: 0;
    transition: left 800ms;
  }
  .slider ul.slides li img {
    width: 400px;
  }

  .slider .prev,
  .slider .next {
    visibility: hidden;
  }
}

@media (max-width: 560px) {
  .slider {
    margin: 0 auto;
    padding: 0;
    width: 200px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }
  .slider ul.slides {
    width: 50%;
    height: 50%;
    margin: 0;
    padding: 0;
    display: table;
    position: absolute;
    top: 0;
    transition: left 800ms;
  }
  .slider ul.slides li img {
    width: 200px;
  }

  .slider .prev,
  .slider .next {
    visibility: hidden;
  }
}
</style>