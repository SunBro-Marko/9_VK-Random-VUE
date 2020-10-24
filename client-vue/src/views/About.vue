<template>
  <div class="about">
    <vue-headful title="О приложении" description="О приложении для розыгрыша ВКонтакте" />
    <div v-html="data" class="container md"></div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'aboutpage',
  data(){
    return{
      data:''
    }
  },
  async mounted(){
    const res = await fetch('https://raw.githubusercontent.com/SunBro-Marko/9_VK-Random-VUE/master/README.md')
    const text  = await res.text()
    this.data = marked(text)
  }
}
</script>

<style>
.md h1{
  font-size: 1.5rem;
}

</style>