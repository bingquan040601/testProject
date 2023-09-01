<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div style="width: 500px">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <p>Main区域</p>
      </template>
      <template #right>
        <p>内容区</p>
      </template>
    </Layout>
  </div>
</template>

<script>
import "@/styles/global.less"
import SiteAside from "@/components/SiteAside/index";
import Layout from "@/components/Test/SlotDemo/Layout";
export default {
  name: "test",
  components: {
    SiteAside,
    Layout
  }
}
</script>

<style scoped>
  .test-container {
    /*width: 250px;*/
    /*height: 600px;*/
    border: 2px solid;
    overflow: hidden;
  }
</style>