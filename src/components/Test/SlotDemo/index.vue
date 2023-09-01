<template>
  <div class="message-container">
    <div class="content">
      <!-- 内置组建 -->
      <slot></slot>
    </div>
    <button>确认</button>
    <button>关闭</button>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: ['cs'],
  mounted() {
    console.log(1)
  }
}
</script>

<style scoped>
  .message-container {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid;
    padding: 20px;
  }
</style>