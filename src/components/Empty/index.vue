<!--
  使用该组件时，父元素得加相对定位
-->
<template>
  <div class="empty-container">
    <Icon type="empty"/>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  name: "Empty",
  components: {Icon},
  props: {
    text: {
      type: String,
      default: "无数据"
    }
  },
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container {
  .self-center();
  text-align: center;
  color: @gray;
}
.icon-container {
  font-size: 72px;
  color: @gray;
}
</style>