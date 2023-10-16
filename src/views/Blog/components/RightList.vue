<!--
 * @Author: HuangBingQuan <17671241237@163.com>
 * @Date: 2023-09-30 13:32:33
 * @LastEditTime: 2023-09-30 19:12:09
 * @FilePath: /mySite/src/views/Blog/components/RightList.vue
-->
<template>
    <ul class="right-container">
        <li v-for="(item, index) in list" :key="index">
            <span :class="{ active: item.isSelect }" @click="handleClick(item)">{{
                item.name
            }}</span>
            <RightList v-if="item.children" :list="item.children" @select="handleClick"/>
        </li>
    </ul>
</template>

<script>
export default {
    name: "RightList",
    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        handleClick(item) {
            // console.log(item)
            this.$emit("select", item);
        },
    },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.right-container {
    list-style: none;
    padding: 0;

    .right-container {
        margin-left: 1em;
    }

    li {
        min-height: 40px;
        line-height: 40px;

        .active {
            color: @warn;
            font-weight: bold;
        }
    }
}</style>