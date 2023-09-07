<template>
  <div class="layout-container">
    <header style="background: red">
      <slot name="left"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer style="background: #6b9eee">
      <slot name="right"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style scoped lang="less">
  .layout-container {
    display: flex;
    height: 100%;
    .left,.right {
      flex: 0 0 auto;
      overflow: hidden;
    }
    main {
      flex: 1;
    }
  }
</style>