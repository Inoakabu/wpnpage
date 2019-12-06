<template>
  <section>
    <div class="iframeWrapper">
      <iframe width="560" height="349" :src="link" frameborder="0" :allow="allow" allowfullscreen></iframe>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'youtube-embedded',
    props: { link: String },
    computed: {
      allow () {
        let data = ['accelerometer', 'autoplay', 'encrypted-media', 'gyroscope', 'picture-in-picture']
        return data.join(';')
      }
    }
  }
</script>

<style>
.iframeWrapper {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
}
.iframeWrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
