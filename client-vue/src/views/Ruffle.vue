<template>
  <div class="container">
    <postloader />
    <hr />
    <div class="row">
      <div class="col-lg d-flex justify-content-center">
        <vkpost/>
      </div>
      <div class="col-md ">
        <ruffleform />
      </div>
    </div>
    <hr />
    <winners />
  </div>
</template>

<script>
// @ is an alias to /src
//Vue Components import
import postloader from "@/components/post-loader.vue";
import vkpost from "@/components/vk-post-container.vue";
import ruffleform from "@/components/ruffle/ruffle-form.vue";
import winners from "@/components/winners-container.vue";
import authbtn from "@/components/authbtn.vue";
//#endregion

import { mapGetters } from "vuex";

export default {
  name: "Ruffle",
  computed: mapGetters(["getAuthState"]),
  mounted() {},
  components: {
    postloader,
    vkpost,
    winners,
    authbtn,
    ruffleform,
  },
};
</script>
