<template>
  <div v-if="data" class="card">
    <div class="card-header">
      <img v-bind:src="data.postheader.group_img" height="40px" alt="">
      <div>
        <h5>{{data.postheader.group_name}}</h5> 
        <p>{{data.postheader.ispinned}}: ? "Да":"Нет"</p>
        <p>Время публикации:{{data.postheader.publish_time}}</p>
      </div>
    </div>
    <div class="card-body">
      <p class="text">{{data.post_body.text}}</p>
      <img width="100%" v-bind:src="data.post_body.attacments.photo" alt="">
      <a v-bind:href="data.post_body.post_author.url">{{data.post_body.post_author.name}}</a>
    </div>
    <div class="card-footer">
      <div class="likes-count">Лайков:{{data.post_footer.likes_count}}</div>
      <div class="comments-count">Комментариев:{{data.post_footer.comments_count}}</div>
      <div class="reposts-count">Репостов:{{data.post_footer.reposts_count}}</div>
      <div class="view-count">Просмотров:{{data.post_footer.views_count}}</div>
    </div>

        
  </div>
</template>

<script>
export default {
  name: "vk-post",
  props: ["data"],
};
</script>

<style>
.card{
  max-width: 500px;
  padding: 20px;
}

.card-header img{
  border-radius: 50%;
}
</style>
