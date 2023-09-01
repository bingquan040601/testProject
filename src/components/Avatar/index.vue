<template>
  <div className="Avatar">
    <img
      :class="{ 'avatar-img': circle }"
      :src="url"
      :style="{width: `${size}px`, height: `${size}px`}"
    >
  </div>
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        required: true
      },
      size: {
        type: Number
      },
      circle: {
        type: Boolean,
        default: false
      }
    },
    name: 'Avatar',
  };
</script>

<style scoped>
  .avatar-img {
    display: block;
    border-radius: 50%;
    object-fit: cover;
  }
</style>
