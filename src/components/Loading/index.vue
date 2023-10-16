<!--
 * @Author: HuangBingQuan <17671241237@163.com>
 * @Date: 2023-09-29 22:36:01
 * @LastEditTime: 2023-09-29 23:17:51
 * @FilePath: /mySite/src/components/Loading/index.vue
-->
<template>
  <img class="loading-container" :src="loadingSrc" alt="">
</template>

<script>  
import loadingSrc from "@/assets/loading.svg";
export default {
    data() {
        return {
            loadingSrc
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.loading-container {
    .self-center();
}
</style>