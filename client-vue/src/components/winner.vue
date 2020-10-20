<template>
  <div class="card">
    <div class="card-image">
      <img v-bind:src="winner.photo_100" />
      <span class="card-title">{{`${winner.first_name} ${winner.last_name}`}}</span>
    </div>
    <div class="card-content">
      <a v-bind:href="'https://vk.com/id'+winner.id">Ссылка на профиль</a>
      <p>Статус:{{winner.online ? "Онлайн":"Офлайн"}}</p>
      <p>Профиль открыт: {{winner.is_closed ? "Нет":"Да"}}</p>
    </div>
    <div class="card-action">
      <b-button variant="danger">НАХУЙ</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "winner",
  props: ["winner"],
};
</script>

<style scoped>
.card_winner {
  max-width: 350px;
  display: grid;
  grid-template-columns: 350px;
}
</style>
