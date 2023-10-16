/*
 * @Author: HuangBingQuan <17671241237@163.com>
 * @Date: 2023-09-30 12:46:48
 * @LastEditTime: 2023-09-30 12:55:29
 * @FilePath: /mySite/src/mixins/fetchData.js
 */
export default function(defaultDataValue = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultDataValue
            }
        },
        async created() {
            console.log("mixin", this)
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    }
}