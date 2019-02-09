export default {
  data () {
    return {
      activeIndex: 0
    }
  },
  computed: {
    slides () {
      return this.$children
        .find(x => x.$options.name === 'SliderSlides').$children
    },
    slidesCount () {
      return this.slides.length
    },
    nextIndex () {
      const nextIndex = this.activeIndex + 1

      return nextIndex <= this.slidesCount - 1 ? nextIndex : 0
    },
    prevIndex () {
      const prevIndex = this.activeIndex - 1

      return prevIndex >= 0 ? prevIndex : this.slidesCount - 1
    }
  },
  mounted () {
    this.goToIndex(this.activeIndex)
  },
  methods: {
    goToIndex (index) {
      const direction = index > this.activeIndex ? 'left' : 'right'

      this.slides[this.activeIndex].hide(direction)
      this.activeIndex = index
    },
    next () {
      this.goToIndex(this.nextIndex)
    },
    prev () {
      this.goToIndex(this.prevIndex)
    }
  },
  render () {
    return this.$scopedSlots.default({
      activeIndex: this.activeIndex,
      goToIndex: this.goToIndex,
      next: this.next,
      prev: this.prev
    })
  }
}
