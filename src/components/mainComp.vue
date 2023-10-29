<template>
 <div class="content">
 
    <div  v-for="(album, key) in gallary" :key="album"  :id="key"  class="content__item" >
      <div class="content-item-img">
        <img v-if = "album[0]" :src="`./data/` + key +`/`+ album[0]" alt="" class="lazyload">
        <img  v-if = "!album[0]" src="../assets/folder.svg" alt="" class="place">
      </div>
      <div class="content-item__menu">
        <router-link :to="`/` + key" >{{ key }} ({{ album.length }})</router-link>
        <img   src="../assets/menu2.svg"  @click="openItemMenu(key)"  class="img-menu" v-if="admin">
      </div>
      
      <ItemMenu @close-item-menu="closeItemMenu"  @delete-item="deleteItem" :id="key +'-menu'" class="item-menu" :currId = "currId" />
    </div>
 </div>

</template>

<script>
import ItemMenu from './itemMenu.vue'
export default {
  name: 'TableList',
  components:{
    ItemMenu: ItemMenu,
  },
  props: {
   gallary : Object,
   admin: Boolean,
 },
  data(){
    return{
      placeholderVis: false,
      currId: null,
      fold: this.$route.params.file
    }  
  },
  methods:{
    deleteItem(id){ 
      let elem2 = document.getElementById(id)
      elem2.style.display = 'none';
      fetch('/delete/' + id).then(res =>  res.ok ? res.json():res.text())
      .then(data => {
        this.data = data;
        console.log(this.data)
        this.$router.go(0);
      })
      
    },
    openItemMenu(id){
      let elem = document.getElementById(id+'-menu')
      elem.style.display = 'flex';
      this.currId = id;
    },
    closeItemMenu(id){
      let elem = document.getElementById(id + '-menu')
      elem.style.display = 'none'
    }

  },
  mounted(){
   
   console.log(this.admin)
        
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  display: flex;
  flex-wrap: wrap;
  width: 89vw;
  height: max-content;
  padding: 20px;
  justify-content: center;
  

}

.content__item{
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 200px;
  width: 200px;
  text-transform: uppercase;
  
}
.content-item-img{
  height: 200px;
  width: 200px;
}

img{
    display: block;
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
}
.content-item__menu{
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: center;

}
.img-menu{
  height: 40px;
  width: 10px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
}
.img-menu:hover{
  transform: scale(1.2)
}
.item-menu{
  position: absolute;
  top: 235px;
  left: 160px;
  display: none;
  z-index: 3;

}
</style>
