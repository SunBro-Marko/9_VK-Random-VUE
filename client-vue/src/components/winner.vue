<template>
  <div class="card_winner pb-4">
    <div class="card-image pb-2 text-center">
      <img class="" v-bind:src="winner.photo_100" />      
    </div>
    <div class="card">
      <div class="card-header">
        <b-button block variant="light" v-bind:href="'https://vk.com/id' + winner.id">{{ `${winner.first_name} ${winner.last_name}` }}</b-button>
      </div>
      <div class="card-body"> 
        <p>Статус:{{ winner.online ? 'Онлайн' : 'Офлайн' }}</p>
        <p>Профиль открыт: {{ winner.is_closed ? 'Нет' : 'Да' }}</p>
      </div>
      <div style="display:none" class="card-action">
        <b-button block variant="danger">Заменить</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'winner',
  props: ['winner'],
}
</script>

<style scoped>
.card-header{
  padding: 0;
  border-radius:0 0 0 0 ;
}

.card-header a{
 font-size: 1.04rem;
 font-weight: bold;
}

.card_winner {
   
}

.card-image img {
  border-radius: 50%;
}
</style>
