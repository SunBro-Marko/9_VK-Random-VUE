<template>  
 <div class="body" id="app">
    <Vheader />    
    <router-view class="container" />
    <Vfooter />
  </div>
</template>

<script>
//import components
import Vheader from "@/components/header/header.vue";
import Vfooter from "@/components/footer/footer.vue";

//import { component } from 'vue/types/umd'

export default {
  beforeCreate() {
    
  },
  mounted(){
   
  },
  components: {
    Vheader,
    Vfooter,
  },
};
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
@import "https://fonts.googleapis.com/icon?family=Material+Icons";

  .body {
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
  }
</style>

