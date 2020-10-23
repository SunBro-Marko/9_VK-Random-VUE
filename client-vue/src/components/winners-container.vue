<template>
  <b-card-group deck v-if="getWinnersState.IsLoaded" class="justify-content-around">      
    <winner v-for="user of getWinnersState.Data" v-bind:key="user.name" v-bind:winner="user"></winner>
  </b-card-group>
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

</style>
