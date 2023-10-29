<template>
  <div class="header">
    <h1 style="color: aliceblue">Gallary</h1>
    <div class="right">
          <div class="sign" @click="signin">{{out}}</div>
    <div class="menu" @click="openEditMenu" v-if = "admin">
      <img src="../assets/menu.svg">
    </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'HeaderComp',
  props: {
    admin:Boolean,
    out:String
  },
  methods:{
    openEditMenu(){
      console.log('dede')
      this.$emit('open-menu')
    },
    signin(){
      console.log('open-signin')
      this.$emit('open-signin')
    },
    searching(src){
   
      this.$emit('search', src.target.value)
    }
  },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  align-items: center;
  margin: 0 ;
  background-color: #273B69;
  height: 60px;
  justify-content: space-between;
}
h1{
  margin-left: 30px;
}
input {
  display: flex;
  height: 50%;
  margin-left: 30px;
  background-color: #485073;
  border: 0px;
  color: white;
  width: 30%;
  border-radius: 5px;
 
}
input::-webkit-input-placeholder { color: white; padding-left: 15%;}
.right{
  display: flex;
  width: max-content;
}
.sign{
  display: flex;
  color: aliceblue;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
  cursor: pointer;

}
.sign:hover{
  transform: scale(1.2);
}
.menu{
  display: flex;
  margin-right: 30px;
  width: 50px;
  cursor: pointer;
  color: aliceblue;
}
.menu:hover{
  transform: scale(1.2);
}
img{
  width: 40px;
}
</style>
