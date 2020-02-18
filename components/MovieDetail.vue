
<template>
  <div class="movie-detail">
    <BackgroundImage :url="backdropPath | image-backdrop">
      <Container class="movie-detail__container">
        <div class="movie-detail__content">
          <div class="movie-detail__poster-image">
            <img :src="posterPath | image-poster">
          </div>
          <div class="movie-detail__details">
            <h1 class="movie-detail__title">
              {{ title }}
            </h1>
            <div class="movie-detail__info">
              Overview
            </div>
            <div class="movie-detail__overview">
              {{ overview }}
            </div>
            <div class="movie-detail__info">
              Genres
            </div>
            <div class="movie-detail__genres">
              {{ genresAsString }}
            </div>
            <div class="movie-detail__info">
              Release date
            </div>
            <div class="movie-detail__release-date">
              {{ releaseDate }}
            </div>
          </div>
        </div>
      </Container>
    </BackgroundImage>
  </div>
</template>

<script>
import Container from '../components/Container'
import BackgroundImage from '../components/BackgroundImage'

export default {
  components: {
    Container,
    BackgroundImage
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    genres: {
      type: Array,
      default: () => []
    },
    overview: {
      type: String,
      default: ''
    },
    releaseDate: {
      type: String,
      default: ''
    },
    posterPath: {
      type: String,
      default: ''
    },
    backdropPath: {
      type: String,
      default: ''
    }
  },
  computed: {
    genresAsString () {
      return this.genres.map(genre => genre.name).join(', ')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables';

.movie-detail {
  .movie-detail__container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: $lg;
    min-height: 100%;
    padding-top: 65px;
    padding-bottom: 65px;
  }

  .movie-detail__content {
    display: grid;
    grid-template-rows: 450px auto;

    @media (min-width: $lg) {
      grid-template-rows: auto;
      grid-template-columns: 300px auto;
    }
  }

  .movie-detail__poster-image {
    box-shadow: 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);
  }

  .movie-detail__details {
    padding-top: 30px;
    padding-bottom: 30px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);

    @media (min-width: $lg) {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  .movie-detail__title {
    font-size: 48px;
    margin-bottom: 30px;
  }

  .movie-detail__info {
    font-size: 20px;
    font-weight: bold;
  }

  .movie-detail__overview,
  .movie-detail__genres {
    margin-bottom: 15px;
  }

}
</style>
