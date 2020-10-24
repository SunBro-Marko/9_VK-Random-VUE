<template>
  <div class="container">
    <vue-headful title="Авторизация" description="Страница авторизации в приложении для розыгрыша ВКонтакте" />
    <authbtn />
  </div>
</template>

<script>
import authbtn from '@/components/authbtn.vue'

import { mapGetters } from 'vuex'

export default {
  components: {
    authbtn,
  },
}
</script>

<style></style>
