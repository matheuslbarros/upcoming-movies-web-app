
<template>
  <div class="background-image" :class="{ 'background-image--gradient': gradient }" :style="style">
    <div class="background-image__overlay">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100vw'
    },
    height: {
      type: String,
      default: '100vh'
    },
    gradient: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style () {
      return {
        '--background-image-url': `url("${this.url}")`,
        '--background-image-width': this.width,
        '--background-image-height': this.height
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.background-image {
  display: flex;
  background: var(--background-image-url);
  background-size: cover;
  background-repeat: no-repeat;
  width: var(--background-image-width);
  min-height: var(--background-image-height);

  .background-image__overlay {
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
  }

  &--gradient {
    .background-image__overlay {
      background: linear-gradient(180deg, transparent 30%, rgba(0, 0, 0, 0.8) 100%);
    }
  }
}
</style>
