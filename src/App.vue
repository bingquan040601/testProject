<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <SiteAside />
      </template>
      <template #default>
        <RouterView />
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
  .app-container {
    height: 100%;
    width: 100%;
  }
</style>