
<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
$sm: 576px;
$md: 768px;
$lg: 992px;
$xl: 1200px;

.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1140px;

  @media (min-width: $md) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: $xl) {
    padding-left: 60px;
    padding-right: 60px;
  }
}
</style>
