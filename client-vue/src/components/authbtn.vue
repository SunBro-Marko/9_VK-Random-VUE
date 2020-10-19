<template>
  <div>
    <b-button variant="primary"
      v-on:click="submit"
      class="waves-effect waves-light btn light-blue darken-3"
    >
      <i class="material-icons right">
        <img
          src="https://vk.com/images/svg_icons/ic_head_logo.svg"
          height="15px"
          alt=""
        /> </i
      >Авторизация
    </b-button>
  </div>
</template>

<script>
export default {
  methods: {
    async submit() {
      window.location.href = 'http://localhost:3000/api/auth';   
    },
  },
};
</script>

<style>
</style>

