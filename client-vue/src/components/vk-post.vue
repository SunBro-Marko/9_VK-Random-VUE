<template>
  <div v-if="data" class="card mb-4">
    <div class="card-header container">
      <div class="row">
        <div class="col-2">
          <img v-bind:src="data.postheader.group_img" height="55px" alt="" />
        </div>
        <div class="col-10">
          <h6>{{ data.postheader.group_name }}</h6>
          <span>{{
            new Date(data.postheader.publish_time * 1000).toLocaleString('ru-RU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })
          }}</span>
        </div>
      </div>
    </div>
    <div class="card-body">
      <p class="text">{{ data.post_body.text }}</p>
      <vkpostattachment v-for="attach of data.post_body.attachments" v-bind:key="attach.type + Math.random()" v-bind:data="attach"/>
      
      <a v-if="data.post_body.author" class="badge badge-light" v-bind:href="data.post_body.post_author.url"
          ><img src="@/assets/user_16.svg" alt="" />{{ data.post_body.post_author.name }}</a
      
      >
    </div>
    <div class="card-footer">
      <div class="row">
        <div class="col">
          <img src="@/assets/like_outline_24.svg" alt="" />
          {{ data.post_footer.likes_count }}
        </div>
        <div class="col">
          <img src="@/assets/comment_outline_24.svg" alt="" />
          {{ data.post_footer.comments_count }}
        </div>
        <div class="col">
          <img src="@/assets/reply_outline_24.svg" alt="" />
          {{ data.post_footer.reposts_count }}
        </div>
        <div class="col">
          <img src="@/assets/view_24.svg" alt="" />
          {{ data.post_footer.views_count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vkpostattachment from './vk-post-attachment.vue'

export default {
  name: 'vk-post',
  props: ['data'],
  components:{
    vkpostattachment
  }
}
</script>

<style>
.card {
  max-width: 500px;
}

.card-header img {
  border-radius: 50%;
}
</style>
