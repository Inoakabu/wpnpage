<template>
  <div class="card">
    <div class="card__image">
      <img :src="image" />
    </div>
    <div class="card__content">
      <h1 class="content__headline">{{ headline }}</h1>
      <p class="content__text">{{ text }}</p>
      <a class="content__link" :href="link" target="_blank">{{ linkText }}</a>
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
      if (this.currentLang === "de") {
        return "Zum Artikel.";
      }

      return "To the article.";
    },
    currentLang() {
      return this.$route.params.lang;
    },
  },
};
</script>

<style>
.card {
  display: flex;
  flex-direction: row;
  background-color: #1e1e1e;
  mix-blend-mode: screen;
  gap: 2rem;
  padding: 1rem;
}

.card__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.content__headline,
.content__text {
  margin: 0;
}

.content__headline {
  font-size: 1.75rem;
  line-height: 1.3;
  font-weight: 800;
}

.content__text {
  font-size: 1.2rem;
  line-height: 1.3;
  max-width: 90%;
}

.content__link {
  font-size: 1.2rem;
}

.content__link:hover {
  text-decoration: underline;
}

.card__image img {
  width: 16.5rem;
  object-fit: cover;
  aspect-ratio: 1/1;
}

@media (max-width: 768px) {
  .card {
    flex-direction: column;
  }

  .card__image img {
    width: 100%;
  }
}
</style>