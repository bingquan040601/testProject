<template>
  <div class="test-container">
    <Empty text="无数据"/>
  </div>
</template>

<script>
import Empty from "@/components/Empty/index";
export default {
  name: "test",
  components: {
    Empty
  }
}
</script>

<style scoped>
  .test-container {
    position: relative;
    width: 500px;
    height: 400px;
    border: 1px solid red;
  }
</style>