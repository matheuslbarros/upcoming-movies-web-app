
<template>
  <div class="index-page">
    <Container>
      <MovieCardList :movies="movies" />
      <ButtonGroup>
        <Button v-if="page < pages" @click="onLoadMoreClick">
          Load more
        </Button>
      </ButtonGroup>
    </Container>
  </div>
</template>

<script>
import querystring from 'querystring'
import { mapState, mapActions } from 'vuex'
import Container from '~/components/Container'
import MovieCardList from '~/components/MovieCardList'
import ButtonGroup from '~/components/ButtonGroup'
import Button from '~/components/Button'

export default {
  components: {
    Container,
    MovieCardList,
    ButtonGroup,
    Button
  },
  computed: mapState({
    page: state => state.movies.page,
    pages: state => state.movies.pages,
    movies: state => state.movies.results
  }),
  watch: {
    $route () {
      this.loadUpcomingMovies(this.getParams())
    }
  },
  created () {
    this.loadUpcomingMovies(this.getParams())
  },
  methods: {
    getParams () {
      return {
        page: Number(this.$route.query.page) || 1
      }
    },
    onLoadMoreClick () {
      const params = this.getParams()
      params.page += 1

      this.$router.push('/?' + querystring.stringify(params))
    },
    ...mapActions({
      loadUpcomingMovies: 'movies/loadUpcomingMovies'
    })
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  margin-top: 65px;
  margin-bottom: 65px;
}
</style>
