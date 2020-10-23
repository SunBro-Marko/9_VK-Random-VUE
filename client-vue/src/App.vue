<template>  
 <div class="body" id="app">
    <notifications group="foo" />
    <Vheader />    
    <router-view/>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

  .body {
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
  }
</style>

