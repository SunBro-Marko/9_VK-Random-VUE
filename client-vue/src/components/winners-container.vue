<template>
  <div v-if="getWinnersState.IsLoaded" class="container">      
    <winner v-for="user of getWinnersState.Data" v-bind:key="user.name" v-bind:winner="user"></winner>
  </div>
</template>

<script>
import winner from "@/components/winner.vue";
import { mapGetters } from 'vuex';
export default {
  name: "Home",
  components: {
    winner,
  },
  computed:{
    ...mapGetters(["getWinnersState"])
  }
  
};
</script>

<style scoped>
.container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
</style>
