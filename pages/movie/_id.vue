
<template>
  <div class="movie-page">
    <MovieDetail
      v-if="movie"
      :title="movie.title"
      :genres="movie.genres"
      :overview="movie.overview"
      :release-date="movie.release_date"
      :poster-path="movie.poster_path"
      :backdrop-path="movie.backdrop_path"
    />
    <ErrorMessage
      v-if="error"
      :error="error"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import MovieDetail from '~/components/MovieDetail'
import ErrorMessage from '~/components/ErrorMessage'

export default {
  components: {
    MovieDetail,
    ErrorMessage
  },
  computed: {
    ...mapState({
      movie: state => state.movie.movie,
      error: state => state.movie.error
    })
  },
  created () {
    this.loadMovieDetail({ id: this.$route.params.id })
  },
  methods: {
    ...mapActions({
      loadMovieDetail: 'movie/loadMovieDetail'
    })
  }
}
</script>
