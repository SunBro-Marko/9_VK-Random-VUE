<template>
  <div class="home">
    <authbtn/>
    <vkpost/>
    <winners/>    
  </div>
</template>

<script>
// @ is an alias to /src
//#Vue Components import
  import vkpost from "@/components/vk-post-container.vue"
  import winners from "@/components/winners-container.vue";
  import authbtn from "@/components/authbtn.vue"
//#endregion

export default {
  name: "Home",
  components: {
    vkpost,
    winners,
    authbtn
  },
};
</script>
