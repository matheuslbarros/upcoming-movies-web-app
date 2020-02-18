import MovieService from '~/services/MovieService'

export default {
  state () {
    return {
      movie: null,
      error: null
    }
  },
  mutations: {
    setMovie (state, movie) {
      state.movie = movie
    },
    setError (state, error) {
      state.error = error
    }
  },
  actions: {
    async loadMovieDetail (context, params) {
      context.commit('setMovie', null)
      context.commit('setError', null)

      try {
        const movie = await MovieService.loadMovieDetail(params)
        context.commit('setMovie', movie)
      } catch (e) {
        context.commit('setError', e)
      }
    }
  }
}
