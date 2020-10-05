<template>
  <div>Тут будут правила и кнопка авторизации
    <authbtn/>
  </div>
  
</template>

<script>
import authbtn from "@/components/authbtn.vue";

import { mapGetters } from "vuex";

export default {
  components: {    
    authbtn
  },

}
</script>

<style>

</style>