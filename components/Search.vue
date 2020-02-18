
<template>
  <div class="search" :class="{ 'search--open': open }">
    <form class="search__wrapper" @submit.prevent="onSubmit">
      <input id="search" ref="search" class="search__input" type="text">
      <label for="search" class="search__button" @click="onClick">
        <span class="search__button-label">cancel</span>
      </label>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  },
  methods: {
    onSubmit () {
      this.$router.push(`/search?query=${this.$refs.search.value}`)
    },
    onClick () {
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables';

.search {
  .search__wrapper {
    position: relative;
    display: flex;
  }

  .search__input {
    width: 32px;
    height: 32px;
    padding: 4px 32px 4px 0;
    color: transparent;
    border: 2px solid white;
    background: transparent;
    transition: width .4s;
  }

  .search__button {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 24px;
    height: 24px;
    background-image: url('/img/search.svg');
    background-size: contain;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    outline: none;
    opacity: 0.9;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .search__button-label {
    display: none;
  }

  &--open {
    .search__input {
      display: block;
      width: 160px;
      padding: 4px 32px 4px 4px;
      color: white;

      @media (min-width: $lg) {
        width: 240px;
      }
    }

    .search__button {
      background-image: url('/img/close.svg');
    }
  }
}
</style>
