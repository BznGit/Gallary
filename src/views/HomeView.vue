<template>
  <div class="home">
    <Main :gallary="gallary"/>
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
  
 },
}
</script>
