<template>
  <div>
    <b-button variant="primary" v-on:click="submit" class="waves-effect waves-light btn light-blue darken-3">
      <i class="material-icons right">
        <img src="https://vk.com/images/svg_icons/ic_head_logo.svg" height="15px" alt="" /> </i
      >Авторизация
    </b-button>
  </div>
</template>

<script>
export default {
  methods: {
    async submit() {
      if (process.env.NODE_ENV === 'production') {
        window.location.href = `/api/auth`
      } else {
        window.location.href = `https://localhost:3000/api/auth`
      }
    },
  },
}
</script>

<style></style>
