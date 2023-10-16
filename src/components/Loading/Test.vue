<!--
 * @Author: HuangBingQuan <17671241237@163.com>
 * @Date: 2023-09-29 22:40:40
 * @LastEditTime: 2023-09-30 20:28:26
 * @FilePath: /mySite/src/components/Loading/Test.vue
-->
<template>
  <div style="position: relative; height: 100vh">
    <Loading v-if="isLoading" />
    <button @click="isLoading = !isLoading">切换显示/隐藏</button>
    <input v-focus="true" type="text" />
    <RightList @select="handleSelect" :list="list" />
  </div>
</template>

<script>
import Loading from "./";
import RightList from "../../views/Blog/components/RightList.vue";
export default {
  components: {
    Loading,
    RightList,
  },
  data() {
    return {
      isLoading: true,
      list: [
        {
          name: "A",
          isSelect: true,
        },
        {
          name: "B",
          isSelect: false,
          children: [
            {
              name: "B-1",
              isSelect: false,
            },
            {
              name: "B-2",
              isSelect: false,
              children: [
                {
                  name: "B-2-1",
                  isSelect: false,
                },
                {
                  name: "B-2-2",
                  isSelect: false,
                },
              ]
            },
            {
              name: "B-3",
              isSelect: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    recursion(item) { // 递归清除
      item.isSelect = false;
      item.children && (
        item.children.forEach(item => {
          this.recursion(item)
        })
      )
    },
    resetSelect() {
      this.list.forEach(item => {
        this.recursion(item)
      })
    },
    handleSelect(item) {
      console.log("666", item);
      this.resetSelect();
      item.isSelect = true;
    }
  }
};
</script>

<style></style>