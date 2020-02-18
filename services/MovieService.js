import querystring from 'querystring'
import axios from 'axios'

export default {

  async loadUpcomingMovies ({ page }) {
    const params = {
      page
    }
    const response = await axios.get('/api/movie/upcoming?' + querystring.stringify(params))
    return response.data
  },

}
