/*
 * @Author: HuangBingQuan <17671241237@163.com>
 * @Date: 2023-09-30 12:02:48
 * @LastEditTime: 2023-09-30 12:14:28
 * @FilePath: /mySite/src/directive/v-focus.js
 */
export default {
    inserted(el, binding) {
        console.log("el", el)
        el && el.focus();
    },
    update(el, binding) {
        el && el.focus();
    }
}