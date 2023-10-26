<template>
 <div class="content">
    <router-link :to="`/` + key" v-for="(album, key) in gallary" :key="key"   class="content__item" >
      <div class="content-item-img">
        <img :src="`./data/` + key +`/`+ album[0]" alt="" class="lazyload">
      </div>
      <p>{{ key }}</p>
    </router-link>
 </div>

</template>

<script>

export default {
  name: 'TableList',
  props: {
   gallary : Object,
 },
  data(){
    return{
     
    }  
  },
  methods:{
    chooseItem(e){ 
     
      let all = document.querySelectorAll('.disvis');
      all.forEach(item=>{
        let tr = item.parentElement;
          tr.parentElement.classList.remove('bkgrnd');
          item.classList.remove('disvis');
      })
      let el  = document.getElementById(e)
      let but = el.querySelector('.vis'); 
      el.classList.add('bkgrnd');
      but.classList.add('disvis');
      
    },
    openEditMenu(id){

      this.$emit('open-edit', id );
    }
  },
  mounted(){
    console.log(this.gallary)
    /*fetch('/albums').then(res =>  res.ok ? res.json():res.text())
    .then(data => {
      this.data = data;
      console.log(this.data)
    })*/
        
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
