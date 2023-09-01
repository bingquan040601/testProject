<template>
  <div>
    {{ count }}
    <button @click="count++">Test</button>
    <p>姓：{{ firstName }}</p>
    <p>名：{{ lastName }}</p>
    <p>全名：{{ getFullName () }}</p>
    <p>全名：{{ getFullName () }}</p>
    <p>全名：{{ getFullName () }}</p>
    <p>全名：{{ getFullName () }}</p>
  </div>
</template>

<script>
export default {
  name: "Test",
  data: ()=> ({
    firstName: "Huang",
    lastName: "BingQuan",
    count: "0"
  }),
  methods: {
    getFullName() {
      console.log('run Fn')
      return this.firstName + " " + this.lastName;
    }
  }
}
</script>

<style scoped>

</style>