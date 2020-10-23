<template>
<div>
    <img v-if="data.type==='video'||data.type==='photo'" v-bind:src="data.photo" alt="">
    <a v-if="data.type==='link'" v-bind:href="data.url"></a>
</div>  
</template>

<script>
export default {
  name: 'vkpostattachment',
  props: ['data'],
}
</script>

<style scoped>
img{
    max-width: 100%;
}


</style>