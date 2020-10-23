<template>
  <div v-if="data" class="card">
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
      <img class="pb-2" width="100%" v-bind:src="data.post_body.attacments.photo" alt="" />
      
        <a class="badge badge-light" v-bind:href="data.post_body.post_author.url"
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
export default {
  name: 'vk-post',
  props: ['data'],
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
