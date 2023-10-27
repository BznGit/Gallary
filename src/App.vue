<template>
  <Header @open-menu="menuVis=true" @search="search" />
  <router-view :gallary = "gallary"/>
  <Menu v-if="menuVis"   @close-menu="menuVis=false" @add-folder="addFolderVis=true"/>
  <AddFolder v-if="addFolderVis"   @close-addmenu="addFolderVis=false" @save-folder="saveFolder" />
</template>
<script>
 import Header from './components/headerComp.vue'; 
 import Menu from './components/menu.vue'; 
 import AddFolder from './components/addFolder.vue'; 

 export default{
  name: 'App',
  components:{
    Header,
    Menu,
    AddFolder

  },
    data(){
    return{
      menuVis:false,
      addFolderVis: false,
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
            ], 
            ass:[]
          },
    }  
  },
  mounted(){
    console.log(this.gallary)
    fetch('/albums').then(res =>  res.ok ? res.json():res.text())
    .then(data => {
      this.gallary = data;
      console.log(this.gallary)
    })
  },
  methods:{
    saveFolder(item){
      console.log(item)
    }
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
