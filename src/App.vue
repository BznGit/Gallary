<template>
  <Header @open-menu="openMenu" @search="search"/>
  <router-view :gallary = "gallary"/>
  
</template>
<script>
 import Header from './components/headerComp.vue'; 
 export default{
  name: 'App',
  components:{
    Header
  },
    data(){
    return{
      gallary: {
            men: [
              "1m.jpg",
              "2m.jpg",
              "3m.jpg",
              "4m.jpg",
              "5m.jpg",
              "6m.jpg"
            ],
            women: [
              "1.jpg",
              "2.jpg",
              "3.jpg",
              "4.jpg",
              "5.jpg",
              "6.jpg"
            ]
          },
    }  
  },
  mounted(){
    console.log(this.data)
    /*fetch('/albums').then(res =>  res.ok ? res.json():res.text())
    .then(data => {
      this.data = data;
      console.log(this.data)
    })*/
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
