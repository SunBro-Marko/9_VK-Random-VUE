<template>
  <div class="container">
    <a v-bind:href="user.UserUrl">
      <p>{{ user.UserName }}</p>
      <img v-bind:src="user.UserPhoto" alt="" />
    </a>
  </div>
</template>

<script>
export default {
  name: "user-card",
  props: ["user"],
};
</script>

<style scoped>
a {
  display: flex;
  justify-items: center;
  align-items: center;
}
img{
  border-radius: 50%;
  max-width: 60px;
  max-height: 60px;
}
</style>