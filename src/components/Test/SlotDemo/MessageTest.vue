<template>
  <div class="test-container">
    <Message>
      <div>
        <p>这是插槽内容</p>
      </div>
    </Message>
    <div class="layout-test-container">
      <Layout>
        <template #left>
          <div class="left">
            左边栏区域，宽度适应内容，溢出隐藏
          </div>
        </template>
        <template>
          <div class="main">
            主区域，宽度占满剩余空间溢出
          </div>
        </template>
        <template #right>
          <div class="right">
            右边栏区域，宽度适应内容，溢出隐藏
          </div>
        </template>
      </Layout>
    </div>
  </div>
</template>

<script>
import Message from "@/components/Test/SlotDemo/index";
import Layout from "@/components/Test/SlotDemo/Layout";
export default {
  name: "MessageTest",
  components: {
    Message,
    Layout
  }
}
</script>

<style scoped>
  .layout-test-container {
    width: 100%;
    height: 600px;
    border: 2px solid;
    margin: auto;
  }
  .left {
    width: 200px;
    height: 100%;
    background: lightcoral;
  }
  .main {
    width: 100%;
    height: 100%;
    background: lightseagreen;
  }
  .right {
    width: 150px;
    height: 100%;
    background-color: lightblue;
  }
</style>