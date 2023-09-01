<template>
  <div class="icon-container">
<!--    {{ fontClass }}-->
    <i :class="`iconfont ${fontClass}`"></i>
  </div>
</template>

<script>
import { Icon } from "@/enum"
export default {
  props: {
    type: {
      type: String,
      require: true
    }
  },
  name: "Icon",
  computed: {
    fontClass: {
      get() {
        console.log(this.type)
        return Icon[this.type];
      }
    }
  },
  mounted() {
    // window.test =
    // console.log()
  }
}
</script>

<style scoped lang="less">
//@import "//at.alicdn.com/t/c/font_4231505_i3mqg4swra.css";
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
.icon-container {
  i {
    font-size: inherit;
  }
}
</style>