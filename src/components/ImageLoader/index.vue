<template>
  <div class="image-loader-container">
    <img v-if="!everythingDone" :src="placeholder" class="placeholder" />
<!--    {{ duration }}-->
    <img :style="{ opacity: originOpacity, transition: `${duration}ms` }" @load="handleLoad" :src="src" />
  </div>
</template>

<script>
export default {
  name:  "ImageLoader",
  props: {
    src: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data: ()=> ({
    originLoaded: false, // 原图是否加载完成
    everythingDone: false // 是否显示完成
  }),
  computed: {
    originOpacity: {
      get() {
        return this.originLoaded ? 1 : 0;
      }
    }
  },
  methods: {
    handleLoad() {
      this.originLoaded = true;
      setTimeout(()=> {
        this.everythingDone = true;
        this.$emit('load')
      }, this.duration)
      console.log("原图加载完成")
    }
  },
  created() {
    console.log('123')
  }
}
</script>

<style lang="less" scoped>
  @import "~@/styles/mixin.less";
  .image-loader-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .placeholder {
      filter: blur(2vw);
    }
    img {
      .self-fill();
      object-fit: cover;
    }
  }
</style>