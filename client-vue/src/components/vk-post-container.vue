<template>
  <div class="input-field">
    <textarea id="textarea1" class="materialize-textarea"></textarea>
    <label for="textarea1">Ссылка на пост для розыгрыша</label>
    <vkpost/>
  </div>  
</template>

<script>
import vkpost from "@/components/vk-post.vue";

export default {
  name: "vk-post-container",
  components: {
    vkpost,
  },
  data() {
    return {
        postinfo:{}      
    };
  },
  mounted() {},
};
</script>

<style>
</style>