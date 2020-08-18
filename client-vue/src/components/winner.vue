<template>
  <div class="card_winner">
    <a href="">
      <h3>{{winner.name}}</h3>
      <img width="150px" height="100%" v-bind:src="winner.img_url" alt="" />
    </a>
    <p>Статус:{{winner.isonline ? "Онлайн":"Офлайн"}}</p>
    <p>Профиль открыт: {{winner.isonline ? "Да":"Нет"}}</p>
    <p>Подписчик: {{winner.isfollower ? "Да":"Нет"}}</p>
    <Button>Выбрать заново</Button>
  </div>
</template>

<script>
export default {
  name: 'winner',
  props: ['winner']
};
</script>

<style scoped>
.card_winner{
    max-width: 350px;    
    display: grid;
    grid-template-columns: 350px;
}

</style>
