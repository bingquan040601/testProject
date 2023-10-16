/*
 * @Author: HuangBingQuan <17671241237@163.com>
 * @Date: 2023-09-30 00:25:39
 * @LastEditTime: 2023-09-30 00:56:13
 * @FilePath: /mySite/src/directive/v-loading.js
 */
import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

function getLoading(el) {
    return el.querySelector("img[data-role=loading]");
}
function createLoading() {
    const img = document.createElement('img');
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}
export default function(el, binding) {
    console.log("...... ")
    const curImg = getLoading(el);
    if(binding.value) {
        if(!curImg) {
            const img = createLoading();
            el.appendChild(img);
        }
    }else {
        if(curImg) {
            curImg.remove();
        }
    }
}