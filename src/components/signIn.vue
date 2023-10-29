<template>
  <div class="back"></div>


  <div class="main" >
    <div class="butGrup" v-if="sigin">
        <div class="sv" @click="outsignin">
            <span>Выйти</span>
        </div>
        <div class="cl" @click="cansel">
          <span>ОТМЕНА</span>
        </div>
      </div>
      <div v-if="!sigin">
        <div class="text">
          <span>Администратор</span>
        </div>
        <div v-if="exists" class="">Не верно</div>
        <div class="inputs">

          <input type="text" placeholder="Логин" v-model="user.name">
          <input type="password" placeholder="Пароль" v-model="user.paasword">
        </div>
        <div class="butGrup">
          <div class="sv" @click="save">
              <span>Войти</span>
          </div>
          <div class="cl" @click="cansel">
            <span>ОТМЕНА</span>
          </div>
        </div>
      </div>

  </div>
    
  
</template>

<script>
export default {
  name: 'AddFolder',
  props: {
    msg: String,
    out:String
  },
  data(){
    return {
     
      user: {
        name:'admin',
        paasword: 'admin'
      },
      exists: false
      }
    },

  methods:{
    cansel(){
      console.log('ddddd')
      this.$emit("close-signin")
    },
    outsignin(){
      //this.sigin = false;
      this.$emit("out-signin")
      this.$emit("close-signin")
    },
    save(){
   
      console.log(this.user)
      fetch('/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authentication: 'secret'
        },
        body: JSON.stringify(this.user)
      }).then(res=>res.text()).then(ass=>{
        console.log(ass)
        if(ass=='ok') {
          this.sigin = true;
          this.$emit("signgood")
          this.$emit("close-signin")
        } else{
          alert('Неправильный логин или пароль!')
          this.$emit("close-signin")
        } 
      })
    },
  },
  computed:{
    sigin: function(){
      let a = null
      if(this.out==='Выйти'){a=true; return  a} else {a=false; return a } 
    }
  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back{
  position: absolute;
  top:0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: gray;
  opacity: 0.7;

}
.main{
  display: flex;
  flex-direction: column;
  position: absolute;
  top:25%;
  left: 30%;
  height: 500px;
  width: 500px;
  background-color: aliceblue;
  border-radius: 10px;
  justify-content: center;
 
}
.text{
  align-items: center;
  margin-top: 20px;
  color: #273B69;
  font-weight: bolder;
  margin-left: auto;
  margin-right: auto;
}
.imgcont{
  margin-top: 20px;
  align-self: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
}     

img{
   height: 80px;
}
.image{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.im{
  height: 20px;
 align-self: end;
 cursor: pointer;
}
.im:hover{
  transform: scale(1.2);
}
.inputs{
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  
  
}
input{
  margin-top: 20px;
  height: 30px;
  background-color: aliceblue;
  border-radius: 10px;
  border-color: #273B69;
  width: 280px;
  

}
input:focus{
  border-color: red;
}
input::-webkit-input-placeholder { color: gray; text-align:center;}
.butGrup{
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
  color: rgb(39, 59, 105);
  font-weight: bolder;
}
.sv{
  display: flex;
  width: max-content;
   margin-left: 110px;
   cursor: pointer;
   width: 140px;
   height: 30px;
   border-radius: 10px;
   justify-content: center;
   align-items: center;
}
.cl{
  display: flex;
  width: max-content;
   margin-right: 110px;
   cursor: pointer;
   width: 140px;
   height: 30px;
   border-radius: 10px;
   justify-content: center;
   align-items: center;
}

.sv:hover{
  color: white;
  background-color: #273B69;
}
.cl:hover{
  color: white;
  background-color: #273B69;
}
</style>
