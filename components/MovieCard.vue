
<template>
  <n-link class="movie-card" :to="`/movie/${id}`">
    <BackgroundImage :url="backdropPath | image-backdrop" :gradient="true" width="100%" height="100%">
      <div class="movie-card__wrapper">
        <div class="movie-card__title">
          {{ title }}
        </div>
      </div>
    </BackgroundImage>
  </n-link>
</template>

<script>
import BackgroundImage from '../components/BackgroundImage'

export default {
  components: {
    BackgroundImage
  },
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    backdropPath: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-card {
  text-decoration: none;

  .movie-card__wrapper {
    display: flex;
    align-items: flex-end;
    padding: 10px;
    height: 100%;
    text-decoration: none;
  }

  .movie-card__title {
    color: white;
    font-size: 20px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
  }
}
</style>
