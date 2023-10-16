<!--
 * @Author: HuangBingQuan <17671241237@163.com>
 * @Date: 2023-09-05 18:52:05
 * @LastEditTime: 2023-10-01 21:44:09
 * @FilePath: /mySite/src/views/Blog/index.vue
-->
<template>
  <div class="blog-container">
    <Layout>
      <template>
        <BlogList/>
      </template>
      <template #right>
        <BlogCategory/>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Test/SlotDemo/Layout';
import BlogList from '@/views/Blog/components/BlogList';
import BlogCategory from './components/BlogCategory.vue';

export default {
  name: "Blog",
  components: {
    Layout,
    BlogList,
    BlogCategory
  },
  data() {
    return {
      test: 66
    }
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>