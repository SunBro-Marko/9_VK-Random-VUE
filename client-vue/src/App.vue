<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" tag="button" class="btn cyan lighten-2">Home</router-link>|
      <router-link to="/about" tag="button" class="btn green lighten-2">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
#app {
  
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  mounted(){
    
  }
}
</script>
