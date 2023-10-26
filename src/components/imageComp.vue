<template>
 <div class="content">
      <div class="content-item-img">
        <img :src="`../data/`+ fold +`/` + file" :alt="file" >
      </div>
     
   
 </div>

</template>

<script>

export default {
  name: 'TableList',
  props: {
    fold: String,
    gallary : Object,
    file: Object,
 },
  data(){
    return{
     
    }  
  },
  methods:{
   
  },
  mounted(){
    console.log(this.gallary, this.fold, this.file)
        
  },
  computed:{
   

  }

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: center
}

.content__item{
  display: flex;
  flex-direction: column;
 
  height: 100%;
  width: 100%;
  text-transform: uppercase;
  
}
.content-item-img{
  height: 85vh;
  width: 96vw;
}

img{
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
   
}

</style>
