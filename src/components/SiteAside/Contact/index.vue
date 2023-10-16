<template>
  <div class="contact-container">
    <div
      v-for="item in contactList"
      :key="item.icon"
    >
      <div class="item">
        <a>
          <div class="icon">
            <Icon :type="item.icon"/>
          </div>
          <span>{{ item.content }}</span>
        </a>
        <div v-if="item.icon === 'weixin'" class="pop">
          <img
            src="data:image/png;base64,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"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/styles/global.less"
import Icon from "@/components/Icon"
export default {
  props: {
    contactList: {
      type: Array,
      required: true
    }
  },
  name: "Contact",
  components: {
    Icon
  },
  updated() {
    console.log(this.contactList)
  },
  mounted() {
    console.log(this.contactList)
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.contact-container {
  width: 100%;
  background: initial;
  box-sizing: border-box;
  padding: 20px;
  color: @gray;
  @itemHeight: 30px;
  //background: #ccc;
  .item {
    position: relative;
    height: @itemHeight;
    line-height: @itemHeight;
    //display: flex;
    margin: 14px 0;
    a {
      display: flex;
      align-items: center;
      cursor: pointer;
      .icon {
        width: 36px;
        font-size: 26px;
      }
    }
    &:hover {
      .pop {
        transform: scaleY(1) !important;
      }
    }
    .pop {
      position: absolute;
      left: 0;
      transition: all .2s;
      bottom: @itemHeight + 5px;
      padding: 10px 15px;
      background-color: #fff;
      border-radius: 5px;
      box-sizing: border-box;
      transform-origin: center bottom;
      transform: scaleY(0);
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        width: 8px;
        height: 8px;
        //background-color: red;
        bottom: -4px;
        background-color: #fff;
      }
      img {
        width: 150px;
        height: 150px;
        display: block;
      }
      //top: 0;
    }
  }
}
</style>