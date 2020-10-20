<template>
  <b-input-group prepend="Ссылка на пост в ВК" class="mt-3">    
      <b-form-input v-model="message"></b-form-input>
      <b-input-group-append>        
        <b-button v-on:click="getPost" variant="primary">Загрузить данные</b-button>
      </b-input-group-append>
    </b-input-group>
</template>

<script>
import vkpost from "@/components/vk-post.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "postloader",  
  
  computed: {
    message: {
      get() {
        return this.$store.getters.getUrl;
      },
      set(value) {
        this.$store.commit("updateurl",value);
      },
    },
    ...mapGetters(["getPostState"])
  },
  methods:{
    ...mapActions(["getPost"])
  }
};
</script>

<style>

</style>