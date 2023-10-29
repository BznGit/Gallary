<template>
  <div class="home">

    <Main :gallary="gallary" :currFold="currFold" :admin="admin" />
  </div>
  
</template>

<script>
// @ is an alias to /src
import Main from '@/components/mainComp.vue'

export default {
  name: 'TableComp',

  components: {
    Main
  },  
  props: {
    gallary :  Object,
    admin: Boolean,
 },
 data(){
  return{
    
  }
  
 },
 watch: {
    $route(to, from) {
      console.log('>>>>',to, from)
    }
  }

}
</script>
