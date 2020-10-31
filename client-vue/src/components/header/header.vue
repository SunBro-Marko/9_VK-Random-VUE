<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-lg">
      <b-navbar-brand to="/">
        <img
          src="./src/VK_Compact_Logo.png"
          height="35px"
          class="d-inline-block align-top"
          alt="Kitten"
        />
        Конкурс
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <div class="container-fluid d-flex justify-content-between">
          <div class="col-sm-8">
            <b-navbar-nav>
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item to="/about">About</b-nav-item>
            </b-navbar-nav>
          </div>
          <div class="col-sm-4">
            <usercard v-bind:user="getUserDate" />
          </div>
        </div>
      </b-collapse>
    </div>
  </nav>
</template>

<script>
//Vue Components import
import usercard from "@/components/header/src/user-card.vue";

import { mapGetters } from "vuex";

export default {
  name: "Vheader",
  computed: mapGetters(["getAuthState", "getUserDate"]),
  data: () => ({
    activeItem: 0,
  }),
  components: {
    usercard,
  },
};
</script>

<style>
</style>