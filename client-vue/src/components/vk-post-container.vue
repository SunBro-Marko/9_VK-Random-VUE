<template> 
    <vkpost v-if="getPostState.IsLoaded" v-bind:data="getPostState.Data" />
</template>

<script>
import vkpost from "@/components/vk-post.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "vk-post-container",
  components: {
    vkpost,
  },  
  computed: {
    ...mapGetters(["getPostState"])
  },
  methods:{
    ...mapActions(["getPost"])
  }
};
</script>

<style>
</style>