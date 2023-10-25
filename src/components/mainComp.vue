<template>
 <div class="content">
    <div class="content__item">
      <img src="../../public/photo/1.jpg" loading="lazy" alt="rtr" class="lazyload" >
      <img src="../../public/photo/2.jpg" loading="lazy" alt="rtr" class="lazyload">
      <img src="../../public/photo/3.jpg" loading="lazy" alt="rtr" class="lazyload" >
      <img src="../../public/photo/1.jpg" loading="lazy" alt="rtr" class="lazyload">
 
    
    </div>

 </div>

</template>

<script>

export default {
  name: 'TableList',
  props: {
    users:{
      type: Array,
      required: true,
     
  }
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
    //this.download(6)
        
  },
  computed:{
    

  }

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content__item{
  display: block;
  overflow: scroll;
  height: 600px;
  width: 500px;
}
img{
  height:  100%;
    border: 0; /* 1 */
    -ms-interpolation-mode: bicubic; /* 2 */

}
.lazyload{
    display: block;
    height: 600px;
    width: 100%;
    object-fit: cover;
}

</style>
