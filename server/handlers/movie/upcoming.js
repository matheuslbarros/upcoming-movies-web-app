const querystring = require('querystring')
const request = require('../../common/request')
const { THEMOVIEDB_API_KEY, THEMOVIEDB_LANGUAGE } = require('../../config')

module.exports = (req, res) => {
  const params = {
    api_key: THEMOVIEDB_API_KEY,
    language: THEMOVIEDB_LANGUAGE,
    page: Number(req.query.page) || 1
  }

  request.get('/movie/upcoming?' + querystring.stringify(params))
    .then((response) => {
      res.send(response.data)
    })
    .catch(() => {
      res.status(500).send({ message: 'Something went wrong.' })
    })
}
