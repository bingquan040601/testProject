/*
 * @Author: HuangBingQuan <17671241237@163.com>
 * @Date: 2023-09-05 18:52:05
 * @LastEditTime: 2023-10-01 00:28:02
 * @FilePath: /mySite/src/router/routes.js
 */
import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Message from "@/views/Message";
import Project from "@/views/Project";

import LoadingTest from "@/components/Loading/Test.vue"

export const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "About", path: "/about", component: About },
  { name: "Blog", path: "/article", component: Blog },
  { name: "CategoryBlog", path: "/article/cate/:categoryId", component: Blog },
  { name: "Project", path: "/project", component: Project },
  { name: "Message", path: "/message", component: Message },
  { name: "LoadingTest", path: "/LoadingTest", component: LoadingTest }
]