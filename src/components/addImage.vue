<template>
  <div class="back"></div>
  <div class="main">
      <div class="text">
        <span>Добавить картинку</span>
        <img  id="foto1" src="../assets/user.svg">
      </div>
      <div v-if="exists" class="">Такой фацл уже существует</div>
      <div class="inputs" @click="addFile">
        <span>Выбрать файл</span>
      </div>
      <div class="butGrup">
        <div class="sv" @click="saveFile">
            <span>СОХРАНИТЬ</span>
        </div>
        <div class="cl" @click="cansel">
          <span>ОТМЕНА</span>
        </div>
      </div>
  </div>
    
  
</template>

<script>
export default {
  name: 'AddFolder',
  props: {
    msg: String,
    currFold: String
  },
  data(){
    return {
      avatar: null,
      file: null,
          exists: false
      }
    },

  methods:{
    addFile(){
      console.log(this.currFold)
      let input = document.createElement('input' );
      input.type = 'file';
      input.setAttribute('multiple','')
      input.click();
      input.onchange = (e) => {
      document.getElementById('foto1').src =  URL.createObjectURL(e.target.files[0]);
      this.avatar = URL.createObjectURL(e.target.files[0]);
      this.file = e.target.files[0]
      };	

    },

    saveFile(){
      let formData = new FormData();
      console.log(this.file)
      formData.append('file', this.file, this.file.name);
      console.log(formData)
      fetch('/upload/'+ this.currFold + '/' + this.file.name, {
        method: 'POST',
        body: formData
      }).then(res=>res.text()).then(ass=>{

        if(ass=='exists') {
          alert('Файл '+ this.file.name +  ' уже существует!')
          this.file.name = '';
          this.$emit("close-addImage")
        } else{
          this.$emit("close-addImage")
          this.$router.go(0);
          
        } 
        })	
    },

    cansel(){
      console.log('ddddd')
      this.$emit("close-addImage")
    },
   
  },
   
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
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  margin-top: 20px;
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
  margin-top: 20px;
  height: 50px;
  width: 200px;
  background-color: #273B69;
  color: aliceblue;
  align-self: center;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  border-radius: 10px;
  justify-content: center;
}
.inputs:hover{
  color: red;

}
span{
  display: flex;
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
