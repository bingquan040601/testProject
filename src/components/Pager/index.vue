<template>
  <div v-if="pageNumber > 1" class="pager-container">
    <a
      :class="{disabled: current === 1}"
      @click="handleClick(1)"
      href="#"
    >|&lt;&lt;</a>
    <a
      :class="{disabled: current === 1}"
      href="#"
      @click="handleClick(current === 1 ? current : current - 1)"
    >&lt;&lt;</a>
    <a
      href="#"
      v-for="item in numbers"
      :key="item"
      :class="{ active: item === current }"
      @click="handleClick(item)"
    >
      {{ item }}
    </a>
    <a
      :class="{disabled: current === pageNumber}"
      href="#"
      @click="handleClick(current === pageNumber ? pageNumber : current + 1)"
    >|&gt;&gt;</a>
    <a
      :class="{disabled: current === pageNumber}"
      href="#"
      @click="$emit('pageChange', pageNumber)"
    >&gt;&gt;</a>

    <div>
<!--      <p>{{ visibleMin }}</p>-->
      <!--      <p>{{ visibleMax }}</p>-->
      <!--      <p>{{ numbers }}</p>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    current: { // 当前页
      type: Number,
      default: 1
    },
    total: { // 总条数
      type: Number,
      default: 0
    },
    limit: { // 每页多少条
      type: Number,
      default: 10
    },
    visibleNumber: {
      type: Number,
      default: 10
    }
  },
  name: "Pager",
  computed: {
    pageNumber: {
      get() {
        return Math.ceil(this.total / this.limit);
      }
    },
    // 得到显示的最小数字
    visibleMin: {
      get() {
        let min = this.current - Math.floor(this.visibleNumber / 2);
        return min < 1 ? 1 : min;
      }
    },
    visibleMax: {
      get() {
        let max = this.visibleMin + this.visibleNumber - 1;
        return max > this.pageNumber ? this.pageNumber : max;
      }
    },
    numbers: {
      get() {
        let nums = [];
        for(let i = this.visibleMin; i <= this.visibleMax; i++) {
          nums.push(i)
        }
        return nums;
      }
    }
  },
  methods: {
    /**
     *
     * @param newPage
     */
    handleClick(newPage) {
      this.$emit('pageChange', newPage);
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~@/styles/var.less";
  .pager-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a {
      color: @primary;
      margin: 0 6px;
      &.disabled {
        color: @lightWords;
        cursor: not-allowed;
      }
      &.active {
        color: @words;
        font-weight: bold;
        cursor: text;
      }
    }
  }
</style>