<template>
  <div>
    <a
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
    </a>
    <button v-on:click="submit">Поприветствовать</button>
  </div>
</template>

<script>
export default {
  methods: {
    async submit() {
      window.open('http://localhost:80/api/auth');   
    },
  },
};
</script>

<style>
</style>

