<template>
    <h1>Gallary of {{ $route.params.id }}</h1>
  <div class="gallary">
    <Gall :gallary="gallary" :fold="$route.params.id" @curr-fold="getGurrFold" :admin="admin"/>
   
  </div>

</template>

<script>
import Gall from '@/components/gallaryComp .vue'
export default {
  name: 'GallaryView',
 
  components: {
    Gall
  },  
  props: {
    gallary :  Object,
    admin:Boolean
  },
  data(){
    return{
     id: this.id
    }  
  },
  methods:{
    getGurrFold(id){
      this.$emit('curr-fold', id)   
    }
  },
  mounted(){
   
 
        
  },
  computed:{
      oneGallary:()=>{
        //console.log(this.gallary)
       // return this.gallary[this.id]
      }

  },


}
</script>
