<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-4"><b-form-spinbutton
          id="sb-inline"
          v-model="value"
          inline
        ></b-form-spinbutton></div>
      
      <div class="col-8">
          
          <b-button v-on:click="getWinners" block variant="primary">Выбрать победителей
              

          </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "postloader",
    
  
  computed: {
    value: {
      get() {
        return this.$store.getters.getWinnersCount;
      },
      set(value) {
        this.$store.commit("updateWinnersCount",value);
      },
    },
    ...mapGetters(["getWinnresState"])
  },
  methods:{
    ...mapActions(["getWinners"])
  }
};
</script>

<style>
</style>