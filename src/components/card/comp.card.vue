<template>
  <div class="card">
    <div class="card-wrapper">
      <div class="img">
        <img class="image" :src="image" />
      </div>
      <div class="content">
        <h1 class="press-headline">{{ headline }}</h1>
        <p class="text">{{ text }}</p>
        <a :href="link" target="_blank"
          ><div class="link-text">{{ linkText }}</div></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    link: String,
    headline: String,
    text: String,
    image: String,
  },
  computed: {
    linkText() {
      if (this.currentLang) {
        return "Hier klicken, um den Artikel zu öffnen.";
      }

      return "Click here to open the article.";
    },
    currentLang() {
      return this.$route.params.lang;
    },
  },
};
</script>

<style>
.card {
  padding: 10px;
}

.content {
  margin-left: 5px;
}

.card-wrapper {
  display: flex;
  flex-direction: row;
  background-color: #1e1e1e;
  mix-blend-mode: screen;
}

.link-text {
  text-align: justify;
  padding: 5px 5px 5px 5px;
  flex: 70%;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0;
  line-height: normal;
  text-decoration: underline;
  white-space: nowrap;
}

.text {
  padding: 5px 5px 5px 5px;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0;
  line-height: normal;
}

.press-headline {
  text-align: justify;
  padding: 5px 5px 5px 5px;
  font-weight: 800;
  font-size: 20px;
  line-height: normal;
  white-space: nowrap;
}

.image {
  flex: 30%;
  width: 20rem;
  object-fit: cover;
  aspect-ratio: 1/1;
}
</style>