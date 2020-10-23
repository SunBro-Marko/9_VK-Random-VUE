<template> 
    <vkpost v-bind:data="getPostState.Data" />
</template>

<script>
import vkpost from "@/components/vk-post.vue";
import { mapGetters } from "vuex";

export default {
  name: "vk-post-container",
  components: {
    vkpost,
  },  
  computed: {
    ...mapGetters(["getPostState"])
  }
};
</script>

<style>
</style>