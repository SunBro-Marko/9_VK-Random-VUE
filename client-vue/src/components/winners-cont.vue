<template>
  <div class="container">    
    <winner v-for="user of users" v-bind:key="user.name" v-bind:winner="user"></winner>
  </div>
</template>

<script>
import winner from "@/components/winner.vue";
export default {
  name: "Home",
  components: {
    winner,
  },
  data() {
    return {
      users: [],
      test: "кек",
    };
  },
  mounted() {
    let a = fetch("http://sunbro.ru/api/ruffle/winners")
    .then( response => response.json())
    .then(json=>this.users=json)  
    console.log(a)
  },
};
</script>



<style scoped>

.container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
