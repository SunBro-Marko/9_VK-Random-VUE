<template>
  <div>
    <nav class="nav-extended light-blue darken-4">
      <div class="container nav-wrapper">
        <a href="" class="brand-logo center">
            <img src="https://vk.com/images/svg_icons/ic_head_logo.svg" height="25px" alt="">
            Ruffle
        </a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: "header",

  mounted() {
    M.AutoInit();
  },
};
</script>

<style>
</style>