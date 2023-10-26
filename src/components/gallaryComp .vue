<template>
 <div class="content">
  <router-link :to="`/`+fold +`/` + item" v-for="(item, key) in gallary[fold]" :key="key"   class="content__item">
      <div class="content-item-img">
        <img :src="`./data/`+ fold +`/` + item" alt="" class="lazyload">
      </div>
      <p>{{ item }}</p>
    </router-link>
  
 </div>

</template>

<script>

export default {
  name: 'TableList',
  props: {
    fold: String,
    gallary : Object,
 },
  data(){
    return{
     
    }  
  },
  methods:{
   
  },
  mounted(){
    console.log(this.gallary, this.fold)
        
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

</style>
