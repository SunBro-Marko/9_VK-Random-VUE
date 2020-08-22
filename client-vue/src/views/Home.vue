<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <winnercont/>    
  </div>
</template>

<script>
// @ is an alias to /src
import winnercont from "@/components/winners-cont.vue";

export default {
  name: "Home",
  components: {
    winnercont,
  },
};
</script>
