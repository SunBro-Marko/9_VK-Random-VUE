<template>
  <div class="card">
    <div class="card-image">
      <img v-bind:src="winner.img_url" />
      <span class="card-title">{{winner.name}}</span>
    </div>
    <div class="card-content">
      <p>Статус:{{winner.isonline ? "Онлайн":"Офлайн"}}</p>
      <p>Профиль открыт: {{winner.isonline ? "Да":"Нет"}}</p>
      <p>Подписчик: {{winner.isfollower ? "Да":"Нет"}}</p>
    </div>
    <div class="card-action">
      <a href="#">Выбрать заново</a>
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
