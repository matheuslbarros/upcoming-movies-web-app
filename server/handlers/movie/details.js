const querystring = require('querystring')
const request = require('../../common/request')
const { THEMOVIEDB_API_KEY, THEMOVIEDB_LANGUAGE } = require('../../config')

module.exports = (req, res) => {
  const params = {
    api_key: THEMOVIEDB_API_KEY,
    language: THEMOVIEDB_LANGUAGE
  }

  request.get('/movie/' + req.params.id + '?' + querystring.stringify(params))
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        res.status(404).send({ message: 'Movie not found' })
      } else {
        res.status(500).send({ message: 'Something went wrong.' })
      }
    })
}
