
<template>
  <header class="toolbar">
    <Container class="toolbar__container">
      <n-link class="toolbar__brand" to="/">
        Upcoming Movies
      </n-link>
      <Search />
    </Container>
  </header>
</template>

<script>
import Container from '../components/Container'
import Search from '../components/Search'

export default {
  components: {
    Container,
    Search
  }
}
</script>

<style lang="scss" scoped>
.toolbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba($color: #000000, $alpha: 0.8);

  .toolbar__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 50px;
  }

  .toolbar__brand {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
}
</style>
