<template>
  <div class="home">
    <vkpost />
    <winners />
  </div>
</template>

<script>
// @ is an alias to /src
//Vue Components import
  import vkpost from "@/components/vk-post-container.vue";
  import winners from "@/components/winners-container.vue";
  import authbtn from "@/components/authbtn.vue";
//#endregion

import { mapGetters } from "vuex";

export default {
  name: "Ruffle",
  computed: mapGetters(["getAuthState"]),
  mounted() {
    
  },
  components: {
    vkpost,
    winners,
    authbtn,
  },
};
</script>
