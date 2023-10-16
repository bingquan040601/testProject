<template>
  <div v-loading="isLoading" class="home-container" ref="container" @wheel="handleWheel">
    <ul class="carousel-container" 
      :style="{
        marginTop
      }"
      @transitionend="handleTransitionend"
    >
      <li v-for="(item) in data" :key="item.id">
        <CarouseItem :carousel="item"/>
      </li>
    </ul>
    <div class="icon icon-up"
      @click="currentIndex--" 
      v-show="currentIndex > 0"
    >
      <Icon type="arrowUp" />
    </div>
    <div class="icon icon-down" 
      @click="currentIndex++"  
      v-show="currentIndex < data.length - 1"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li 
        :class="{active: currentIndex === index}"
        v-for="(item, index) in data"
        :key="item.id"
        @click="switchTo(index)"
      ></li>
    </ul>
    <!-- <Loading v-if="isLoading"/> -->
  </div>
</template>

<script>
import CarouseItem from "./CarouseItem.vue";
import Icon from "@/components/Icon";
import Loading from "@/components/Loading";
import fetchData from "../../mixins/fetchData";

export default {
  mixins: [fetchData([])],
  name: "Home",
  components: {
    CarouseItem,
    Icon,
    Loading
  },
  data: () => ({
    msg: "Home",
    // bannerList: [],
    currentIndex: 0, // 当前现实的是第几张图片
    containerHeight: 0, // 整个容器的高度
    switching: false, // 是否滚动
    // isLoading: true
  }),
  mounted() {
    // this.getBanner();
    this.getContainerHeight();
    window.addEventListener('resize', this.quoteGetContainerHeight);
  },
  methods: {
    async fetchData() {
      return await this.$http.bannerServer.getBanner();
    },
    // async getBanner() {
    //   const bannerList = await this.$http.bannerServer.getBanner();
    //   this.bannerList = bannerList;
    //   this.isLoading = false;
    // },
    getContainerHeight() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
    switchTo(index) {
      this.currentIndex = index;
    },
    handleTransitionend() {
      this.switching = false;
    },
    debounce(fn, delay) {
      let timer;
      return (e)=> {
        clearTimeout(timer)
        timer = null;
        timer = setTimeout(function(){
          fn.call(this, e);
        }, delay)
      }
    },
    handleWheel(e) {
      if(this.switching || e.deltaY <= 5 && e.deltaY >= -5) {
        return;
      }
      if(e.deltaY < -5 && this.currentIndex > 0) {
        this.switching = true;
        this.currentIndex--;
      }else if(e.deltaY > 5 && this.currentIndex < this.data.length - 1) {
        this.switching = true;
        this.currentIndex++;
      }
    }
  },
  computed: {
    marginTop: {
      get() {
        return -this.currentIndex * this.containerHeight + 'px';
      }
    },
    quoteGetContainerHeight: { // 拿到闭包函数引用 好做释放
      get() {
        return this.debounce(this.getContainerHeight, 2000);
      },
      set() {
        this.debounce = null;
      }
    }
  },
  destroyed() {
    console.log('destroy')
    removeEventListener('resize', this.quoteGetContainerHeight);
    this.quoteGetContainerHeight = null;
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin";
@import "~@/styles/var";
.home-container {
  position: relative;
  height: 100%;
  height: 100%;
  background: @dark;
  overflow: hidden;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .carousel-container {
    width: 100%;
    height: 100%;
    transition: .5s;
    li {
      transition: .5s;
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    .self-center();
    font-size: 30px;
    color: @gray;
    @gap: 25px;
    transform: translate(-50%, 0);
    cursor: pointer;
    &.icon-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      top: auto;
      bottom: @gap;
      animation: jump-up 2s infinite;
    }
    @jump: 5px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }
      50% {
        transform: translate(-50%, -@jump);
      }
      100% {
        transform: translate(-50%, @jump);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }
  .indicator {
    .self-center();
    transform: translateY(-50%);
    right: 20px;
    left: auto;
    list-style: none;
    li {
      padding: 0;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: @words;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;
      transition: .5s;
      &.active {
        background: #fff;
      }
    }
  }
}
</style>