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