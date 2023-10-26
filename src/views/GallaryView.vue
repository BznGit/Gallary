<template>
    <h1>Gallary of {{ $route.params.id }}</h1>
  <div class="gallary">
    <Gall :gallary="gallary" :fold="$route.params.id"/>
   
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
  
  },
  data(){
    return{
     id: this.id
    }  
  },
  methods:{

  },
  mounted(){
   console.log(this.id)
        
  },
  computed:{
      oneGallary:()=>{
        //console.log(this.gallary)
       // return this.gallary[this.id]
      }

  }

 
}
</script>
