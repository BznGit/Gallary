<template>
  <Header @open-menu="menuVis=true" @search="search" :admin="admin" @open-signin="signInVis=true" :out="out"/>
  <router-view :gallary = "gallary" @curr-fold="getGurrFold" :admin="admin"/>
  <Menu v-if="menuVis"   @close-menu="menuVis=false" @add-folder="addFolderVis=true" @add-file="addImageVis=true" :currFold="currFold" />
  <AddFolder v-if="addFolderVis"   @close-addmenu="addFolderVis=false" @save-folder="saveFolder" />
  <AddImage v-if="addImageVis"   @close-addImage="addImageVis=false"  :currFold="currFold"/>
  <SignIn v-if="signInVis"   @close-signin="signInVis=false" @signgood="admin=true; out='Выйти'"  @out-signin="outSignin" :out="out"/>
</template>
<script>
 import Header from './components/headerComp.vue'; 
 import Menu from './components/menu.vue'; 
 import AddFolder from './components/addFolder.vue'; 
 import AddImage from './components/addImage.vue';
 import SignIn from './components/signIn.vue';

 export default{
  name: 'App',
  components:{
    Header,
    Menu,
    AddFolder,
    AddImage,
    SignIn
  },
    data(){
    return{
      admin: false,
      out: 'Войти',
      signInVis: false,
      menuVis:false,
      addFolderVis: false,
      addImageVis: false,
      currFold: null,
      gallary: null/*{
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
          },*/
    }  
  },
  beforeCreate(){

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
    outSignin(){
      this.admin = false;
      this.out = 'Войти'
    },
    saveFolder(item){
      console.log(item)
    },
    getGurrFold(id){
      console.log(id)
      this.currFold = id
    }
  },
  watch: {
    $route(to) {
      if(to.fullPath=='/') this.currFold = null
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
