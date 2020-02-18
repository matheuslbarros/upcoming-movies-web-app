
<template>
  <div class="search-page">
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
    page: state => state.search.page,
    pages: state => state.search.pages,
    movies: state => state.search.results
  }),
  watch: {
    $route () {
      this.loadMovies(this.getParams())
    }
  },
  created () {
    this.loadMovies(this.getParams())
  },
  methods: {
    getParams () {
      return {
        page: Number(this.$route.query.page) || 1,
        query: this.$route.query.query
      }
    },
    onLoadMoreClick () {
      const params = this.getParams()
      params.page += 1

      this.$router.push('/search?' + querystring.stringify(params))
    },
    ...mapActions({
      loadMovies: 'search/loadMovies'
    })
  }
}
</script>

<style lang="scss" scoped>
.search-page {
  margin-top: 65px;
  margin-bottom: 65px;
}
</style>
