
<template>
  <div class="movie-card-list">
    <template v-for="(movie, key) in movies">
      <MovieCard
        :id="movie.id"
        :key="key"
        :title="movie.title"
        :backdrop-path="movie.backdrop_path"
        :poster-path="movie.poster_path"
      />
    </template>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard'

export default {
  components: {
    MovieCard
  },
  props: {
    movies: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables';

.movie-card-list {
  display: grid;
  grid-auto-rows: 194px;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  margin: 15px 0;

  @media (min-width: $sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: $md) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: $lg) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: $xl) {
    grid-template-columns: repeat(3, 1fr);
    margin: 60px 0;
  }
}
</style>
