<template>
  <div class="nav_bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "navBarContainer"
}
</script>

<style lang="less" scoped>
  .nav_bar{
    display: flex;
    justify-content: space-around;
    height: 44px;
    line-height: 44px;
    background-color: white;
  }
</style>
