
<template>
  <div class="error-message">
    <Container class="error-message__container">
      <h1 class="error-message__title">
        Error
      </h1>
      <p class="error-message__message">
        {{ message }}
      </p>
      <n-link class="error-message__link" to="/">
        Go home
      </n-link>
    </Container>
  </div>
</template>

<script>
import Container from '../components/Container'

export default {
  components: {
    Container
  },
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    message () {
      if (this.error.response) {
        return this.error.response.data.message
      }
      return this.error.message
    }
  }
}
</script>

<style lang="scss" scoped>
.error-message {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 65px;
  margin-bottom: 65px;
  text-align: center;

  .error-message__title {
    font-size: 48px;
    text-transform: uppercase;
  }

  .error-message__message {
    font-size: 24px;
    margin-bottom: 30px;
  }

  .error-message__link {
    color: white;
  }
}
</style>
