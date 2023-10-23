<template>
  <Header @open-menu="openMenu" @search="search"/>

  <router-view/>
</template>
<script>
 import Header from './components/headerComp.vue'; 
 export default{
  name: 'App',
  components:{
    Header
  }
 } 

</script>



<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html{
  padding: 0;
  margin: 0;
}

nav {
  padding: 0px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
