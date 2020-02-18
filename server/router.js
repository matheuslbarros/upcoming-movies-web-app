const { Router } = require('express')

const searchMovies = require('./handlers/search/movie')
const getUpcomingMovies = require('./handlers/movie/upcoming')
const getMovieDetails = require('./handlers/movie/details')

const router = new Router()

router.get('/search/movie', searchMovies)
router.get('/movie/upcoming', getUpcomingMovies)
router.get('/movie/:id', getMovieDetails)

module.exports = router
