import request from "./config/request";

export function getBanner() {
    return request({
        url: "/api/banner",
        method: "get"
    })
}