
<template>
  <button class="button" type="button" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  methods: {
    onClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  background: red;
  border: 2px solid transparent;
  outline: none;

  &:hover {
    background: transparent;
    border: 2px solid white;
  }
}
</style>
