/*
 * @Author: HuangBingQuan <17671241237@163.com>
 * @Date: 2023-09-30 20:50:38
 * @LastEditTime: 2023-09-30 22:05:58
 * @FilePath: /mySite/src/mock/blog.js
 */
import Mock from "mockjs";
import qs from "querystring"

Mock.mock("/api/blogtype", "get", {
    code: 0,
    msg: "",
    "data|10-20": [
        {
            "id|+1": 1,
            name: "分类@id",
            "articleCount|0-300": 0,
            "order|+1": 1
        }
    ]
});

// Mock.mock();

// Mock.mock(/^\/api\/blogs(\?.+)?$/, "get", {
//     code: 0,
//     msg: "",
//     data: {
//         "total|2000-3000": 0,
//         // "rows|10"
//     }
// });


Mock.mock(/^\/api\/blog(\?.+)?$/, "get", function(options) {
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            "total|2000-3000": 0,
            [`rows|${qs.parse(options.url).limit || 10}`]: [{
                id: "@guid",
                title: "@ctitle",
                description: "@cparagraph(1, 10)",
                category: {
                    "id|1-10": 0,
                    name: "分类@id"
                },
                "scanNumber|0-3000": 0,
                "commentNumber|0-300": 30,
                thumb: Mock.Random.image("300*250", "#000", "#fff", "Random Image"),
                createDate: "@date(T)"
            }]
        }
    })
});