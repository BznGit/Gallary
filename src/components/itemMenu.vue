<template>
 
    <div class="item-menu" @click="closeMenu">
      <span @click = "deleteFolder">Удалить</span>
      <span @click="closeMenu">Закрыть</span>
    </div>
  
</template>

<script>
export default {
  name: 'MenuMain',
  props: {
      currId: String
  },
  methods:{
  
    deleteFolder(){
     
      this.$emit('delete-item', this.currId);
    },
    closeMenu(){
      console.log(this.currId)
      this.$emit('close-item-menu', this.currId)
    }
  },
  mounted(){
    console.log(this.currId)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-menu{

  flex-direction: column;
background-color: #273B69;
border-radius: 5px;
color: aliceblue;
width: max-content;
height: max-content;

}
.item-menu>span{
  display: flex;
  height: 20px;
  padding: 10px;
}
.item-menu>span:hover{

  color: red;
}
</style>
