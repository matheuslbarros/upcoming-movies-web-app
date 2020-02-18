import Vue from 'vue'

const sizes = {
  backdrop: {
    w300: '300x169',
    w1280: '1280x720'
  },
  poster: {
    w300: '300x450'
  }
}

Vue.filter('image-poster', function (value, type = 'poster', width = 'w300') {
  const size = sizes[type][width]

  if (value) {
    return `https://image.tmdb.org/t/p/${width}${value}`
  }

  return `https://via.placeholder.com/${size}.png?text=No+image`
})

Vue.filter('image-backdrop', function (value, type = 'backdrop', width = 'w1280') {
  const size = sizes[type][width]

  if (value) {
    return `https://image.tmdb.org/t/p/${width}${value}`
  }

  return `https://via.placeholder.com/${size}.png?text=No+image`
})
