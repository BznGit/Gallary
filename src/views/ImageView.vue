<template>
  <div class="image-conteiner">

    <Imag :gallary="gallary" :fold="$route.params.id" :file="$route.params.file"/>
  </div>
  
</template>

<script>

import Imag from '@/components/imageComp.vue'
export default {
  name: 'ImageView',
  components: {
   Imag
  },  
  props: {
    fold: String,
    gallary : Object,
    file: String
 
  
  },
 
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-conteiner{
  display: flex;
  
 
}
</style>
