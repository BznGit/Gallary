<template>
  <div class="content">
  
    <div v-for="(item) in gallary[fold]" :key="item"  :id="item"  class="content__item">
      <div class="content-item-img">
        <img :src="`./data/`+ fold +`/` + item" :alt="item" loading="lazy" >
      </div>
      <div class="content-item__menu">
        <router-link :to="`/`+fold +`/` + item" >
          <p>{{ item }}</p>
        </router-link>
        <img   src="../assets/menu2.svg"  @click="openItemMenu(item)"  class="img-menu" v-if="admin">
      </div>
      <ItemMenu @close-item-menu="closeItemMenu"  @delete-item="deleteItem" :id="item +'-menu'" class="item-menu" :currId = "currId" />
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
    fold: String,
    gallary : Object,
    admin: Boolean,
 },
  data(){
    return{
      currId:null,
     
    }  
  },
  methods:{
    deleteItem(id){ 
      let elem2 = document.getElementById(id)
      elem2.style.display = 'none';
      fetch('/delete-file/'+ this.fold + '/' + id).then(res =>  res.ok ? res.json():res.text())
      .then(data => {
        this.data = data;
        console.log(this.data)
      })
      
    },
    openItemMenu(id){
      console.log(id)
      let elem = document.getElementById(id +'-menu')
      console.log(elem)
      elem.style.display = 'flex';
      this.currId = id;

    },
    closeItemMenu(id){
      console.log(id)
      let elem = document.getElementById(id + '-menu')
      console.log(elem)
      elem.style.display = 'none'
    }
  },
  mounted(){
    console.log(this.gallary, this.fold)
    this.$emit('curr-fold', this.fold)   
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  display: flex;

  padding: 20px;

  width: 80vw;
  height: 50vh;
  margin-left: auto;
  margin-right: auto;
  overflow-x: auto;
 
  
}

.content__item{
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 200px;
  width: 200px;
  text-transform: uppercase;
  position: relative;
  
  
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
.item-menu{
  position: absolute;
  top: 235px;
  left: 160px;
  display: none;
  z-index: 6;

}
.img-menu{
  height: 40px;
  width: 10px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
}


</style>
