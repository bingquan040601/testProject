/*
 * @Author: HuangBingQuan <17671241237@163.com>
 * @Date: 2023-09-30 20:39:42
 * @LastEditTime: 2023-09-30 20:46:12
 * @FilePath: /mySite/src/service/blog.js
 */
import request from './config/request';

export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    return request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid
        }
    })
}

export async function getBlogTypes() {
    return request.get("/api/blogtype")
}