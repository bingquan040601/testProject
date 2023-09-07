<template>
  <div class="menu-container">
    <RouterLink
      :to="{ name: item.name }"
      v-for="item in items" :key="item.link"
      active-class="selected"
      exact-active-class=""
      :exact="item.exact"
    >
      <div class="icon">
        <Icon :type="item.icon"/>
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </div>
</template>

<script>
import "@/styles/global.less"
import Icon from "@/components/Icon"
export default {
  name: "Menu",
  components: {
    Icon
  },
  data: ()=> ({
    curPathName: "/",
    items: [
      {
        name: "Home",
        title: "首页",
        icon: "home",
        exact: true
      },
      {
        name: "About",
        title: "文章",
        icon: "blog",
        exact: false
      },
      {
        name: "Blog",
        title: "关于我",
        icon: "about",
        exact: true
      },
      {
        name: "Project",
        title: "项目&效果",
        icon: "code",
        exact: true
      },
      {
        name: "Message",
        title: "留言板",
        icon: "chat",
        exact: true
      },
    ]
  }),
  methods: {
    isSelected(path) {
      console.log(path)
      return '/testProject' + path === location.pathname;
    },
    test(path) {
      // console.log(1)
      // this.;
    }
  }
}
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
  .menu-container {
    color: @gray;
    margin: 24px 0;
    a {
      display: flex;
      padding: 0 50px;
      align-items: center;
      height: 45px;
      .icon {
        width: 24px;
        font-size: 16px;
      }
      &:hover {
        color: #fff;
      }
      &.selected {
        background: darken(@words, 3%);
        color: #fff;
      }
    }
  }
</style>