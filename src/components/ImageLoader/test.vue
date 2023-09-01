<template>
  <div class="test-container">
  <ImageLoader
    src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
    placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
    :duration="3000"
    @load="handelLoaded"
  />
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader/index";
export default {
  name: "test",
  components: {
    ImageLoader
  },
  methods: {
    handelLoaded() {
      console.log("图片加载完成")
    }
  }
}
</script>

<style scoped>
  .test-container {
    width: 500px;
    height: 400px;
    border: 1px solid red;
    margin: 0 auto;
  }
</style>