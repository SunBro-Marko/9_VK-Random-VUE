<template>
  <div class="container">
    <vue-headful title="Розыгрыш ВКонтакте" description="Приложение для проведения розыгрыша ВКонтакте" />
    <div class="row mb-5">
      <postloader />      
    </div>
    <div class="row mb-5">
      <img class="post_spinner" v-if="getPostState.Isfetched" src="@/assets/Running.gif" alt="" />
      <div v-if="getPostState.FetchFailed"  class="post_loading_failed text-center">
        <h3>Не получилось загрузить пост</h3>
        <img class="post_spinner" src="@/assets/Failed.gif" alt="" />
      </div>
      <div class="col-lg d-flex justify-content-center">
        <vkpostcontainer v-if="getPostState.IsLoaded" />
      </div>
      <div class="col-md ">
        <ruffleform v-if="getPostState.IsLoaded" />
      </div>      
    </div>
    <winners />
  </div>
</template>

<script>
// @ is an alias to /src
//Vue Components import
import postloader from '@/components/post-loader.vue'
import vkpostcontainer from '@/components/vk-post-container.vue'
import ruffleform from '@/components/ruffle/ruffle-form.vue'
import winners from '@/components/winners-container.vue'
import authbtn from '@/components/authbtn.vue'
//#endregion

import { mapGetters } from 'vuex'

export default {
  name: 'Ruffle',
  computed: { ...mapGetters(['getAuthState', 'getPostState']) },
  mounted() {},
  components: {
    postloader,
    vkpostcontainer,
    winners,
    authbtn,
    ruffleform,
  },
}
</script>

<style scoped>
.post_loading_failed{
  width: 100%;
}

.post_spinner {
  max-width: 100%;
  height: auto;
}
</style>
