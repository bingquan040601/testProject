<template>
  <div id="app">
    <div>
      <input v-model.number="current" />
    </div>
    <Pager :visible-number="10" :current="this.current" :total="total" @pageChange="handlePageChange($event)"/>
  </div>
</template>

<script>
import Pager from "@/components/Pager";
export default {
  name: 'App',
  data: ()=> ({
    current: 1,
    total: 300
  }),
  components: {
    Pager
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
      // 加载当前页数据
    }
  }
}
</script>

<style lang="less" scoped>

</style>
