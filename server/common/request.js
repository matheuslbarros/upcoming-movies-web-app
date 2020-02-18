const axios = require('axios')
const { THEMOVIEDB_BASE_URL } = require('../config')

module.exports = axios.create({
  baseURL: THEMOVIEDB_BASE_URL
})
