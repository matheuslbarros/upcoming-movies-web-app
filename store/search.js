import MovieService from '~/services/MovieService'

export default {
  state () {
    return {
      page: null,
      pages: 0,
      results: []
    }
  },
  mutations: {
    setResults (state, { page, total_pages: pages, results }) {
      state.page = page
      state.pages = pages
      state.results = results
    }
  },
  actions: {
    loadMovies (context, params) {
      if (params.page !== context.state.page) {
        MovieService.loadMovies(params).then((data) => {
          if (params.page > 1) {
            context.commit('setResults', {
              ...data,
              results: context.state.results.concat(data.results)
            })
          } else {
            context.commit('setResults', data)
          }
        })
      }
    }
  }
}
