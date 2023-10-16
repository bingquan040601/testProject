<!--
 * @Author: HuangBingQuan <17671241237@163.com>
 * @Date: 2023-09-05 18:52:05
 * @LastEditTime: 2023-09-29 22:55:56
 * @FilePath: /mySite/src/components/Icon/test.vue
-->
<template>
  <div class="icon-container">
    <div class="item" v-for="item in types" :key="item">
      <Icon :type="item" />
    </div>
  </div>
</template>

<script>
import Icon from "./index"
import { default as types } from "@/enum/Icon"
export default {
  name: "test",
  components: {
    Icon
  },
  data: ()=>({
    types: Object.keys(types)
  }),
  mounted() {
    console.log(this.types)
  }
}
</script>

<style scoped>

</style>