<template>
  <div class="site-aside-container">
    <div class="avatar">
      <Avatar
        url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c"
        :size="150"
        circle
      />
    </div>
    <h1 class="title">HuangBingQuan</h1>
<!--    <p style="font-size: 20px; color: #fff; text-align: center">HuangBingQuan</p>-->
    <Menu/>
    <Contact :contactList="contactList"/>
    <p class="footer">黑ICP备17001719号</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "@/components/SiteAside/Contact";
import Menu from "@/components/SiteAside/Menu";
export default {
  name: "SiteAside",
  components: {
    Contact,
    Menu,
    Avatar
  },
  data: ()=> ({
    contactList: []
  }),
  mounted() {
    setTimeout(()=> {
      this.contactList = [
        {
          link: "https://github.com/bingquan040601",
          content: "BingQuan-Huang",
          icon: "github"
        },
        {
          link: "mailto:17671241237@163.com",
          content: "17671241237@163.com",
          icon: "mail"
        },
        {
          link: "tencent://message/?Menu=yes&uin=138020930&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45",
          content: "138020930@qq.com",
          icon: "qq"
        },
        {
          link: "",
          content: "XiaoQuan040601",
          icon: "weixin"
        },
      ]
    },  500)
  }
}
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
  .site-aside-container {
    width: 100%;
    height: 100%;
    padding: 20px 0;
    background: @dark;
    overflow: scroll;
    box-sizing: border-box;
  }
  .avatar {
    display: flex;
    justify-content: center;
  }
  .footer {
    text-align: center;
    font-size: 12px;
  }
  .title {
    font-size: 20px;
    color: #fff;
    text-align: center;
  }
</style>