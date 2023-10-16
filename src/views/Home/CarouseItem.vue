<template>
    <div class="carouse-item-container">
        <div class="carousel-img">
            <ImageLoader
                :src="carousel.bigImg"
                :placeholder="carousel.midImg"
                :duration="3000"
            />
        </div>
        <div class="title">{{ carousel.title }}</div>
        <div class="desc">{{ carousel.description }}</div>
    </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader/index.vue";
export default {
    name: "CarouseItem",
    props: {
      carousel: {
        type: Object
      }
    },
    components: {
      ImageLoader
    },
    mounted() {
      console.log("item", this.carousel)
    }
}
</script>

<style scoped lang="less">
    @import url("~@/styles/var.less");
    .carouse-item-container {
        position: relative;
        background: @dark;
        width: 100%;
        height: 100%;
        .carousel-img {
          height: 100%;
        }
        .title, .desc {
            position: absolute;
            left: 30px;
            color: #fff;
            letter-spacing: 3px;
            text-shadow: 1px 0 0 rgba(0, 0, 0, .5), -1px 0 0 rgba(0, 0, 0, .5), 0 1px 0 rgba(0, 0, 0, .5), 0 -1px 0 rgba(0, 0, 0, .5);
        }
        .title {
          top: calc(50% - 40px);
          font-size: 2em;
        }
        .desc {
          //font-size: 30px;
          top: calc(50% + 20px);
          font-size: 1.2em;
          color: lighten(@gray, 20%);
        }
    }
</style>