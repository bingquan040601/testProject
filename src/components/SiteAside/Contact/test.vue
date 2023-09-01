<template>
  <div class="test-container">
    <Contact :contactList="contactList" />
  </div>
</template>

<script>
import Contact from "@/components/SiteAside/Contact/index";
export default {
  name: "test",
  components: {
    Contact
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

<style scoped>
.test-container {
  width: 400px;
  height: 600px;
  border: 2px solid red;
  background: #000;
  margin: 0 auto;
  padding-top: 200px;
}
</style>