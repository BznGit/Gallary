<template>
  <div class="back" @click="closeMenu"></div>
    <div class="circle-menu">
      <div class="circle">
          <div class="circle-sector sector-01" @click="addFolder" v-if="!currFold">
              <div class="sector-text">
              <!--  <img  class="img" src="../assets/add.svg">
                <img  class="img vis" src="../assets/addWhite.svg">-->
                <span>Добавить папку</span>
              </div>
          </div>
            <div class="circle-sector sector-04 " >
              <div class="sector-text"  @click="addFile" v-if="currFold">
              <!--  <img  class="img" src="../assets/export.svg">
                <img  class="img vis" src="../assets/exportWhite.svg">-->
                <span>Добавить</span>
                <span>картинку</span>
              </div>
          </div>
      </div>
    </div>
  
</template>

<script>

export default {
  name: 'MenuMain',
  props: {
    msg: String,
    currFold: String
  },
  methods:{
    signin(){
      console.log('open-signin')
      this.$emit('open-signin')
    },
    addFolder(){
      console.log('add folder')
      this.$emit('add-folder')
    },
    addFile(){
      console.log('add folder')
      this.$emit('add-file')
    },
    closeMenu(){
      this.$emit('close-menu')
    }

    
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
.vis{
  display: none;
}
img{
 width: 20%;
 margin-left: auto;
 margin-right: auto;
 padding-bottom: 5px;
}

 html {
        height: 100%;
    }

    .circle-menu {
        transform: translate(-50%, -50%);
        border-radius: 100%;
        position: absolute;
        overflow: hidden;
        height: 300px;
        width: 300px;
        left: 50%;
        top: 50%;
    }
    .circle{
        background-color: transparent;
        transform: rotate(45deg);
        border: 100px solid white;
        border-radius: 100%;
        position: relative;
        height: 100px;
        width: 100px;
    }
    .circle-sector {
        justify-content: center;
        align-items: center;
        position: absolute;
        overflow: hidden;
        cursor: pointer;
        display: flex;
        height: 150px;
        width: 150px;
        z-index: 1;
        word-break:break-all;
    }
    .circle-sector:after {
        border: 200px solid transparent;
        transition: all 300ms;
        border-radius: 100%;
        position: absolute;
        height: 100px;
        width: 100px;
        content: '';
        z-index: 1;
        
    }
    .circle-sector.checked:after {
        border: 200px solid #273B69;
    }
    .circle-sector:hover:after {
        border: 200px solid #273B69;
    }
    .circle-sector.checked .sector-text,
    .circle-sector:hover .sector-text {
        color: white;
        z-index: 1000;
    }
 
    .circle-sector.sector-01 {
        left: -100px;
        top: -100px;
    }
    .circle-sector.sector-01:after {
        left: -100px;
        top: -100px;
    }


    .circle-sector.sector-02 {
        right: -100px;
        top: -100px;
    }
    .circle-sector.sector-02:after {
        left: -250px;
        top: -100px;
    }


    .circle-sector.sector-03 {
        right: -100px;
        bottom: -100px;
    }
    .circle-sector.sector-03:after {
        left: -250px;
        top: -250px;
    }


    .circle-sector.sector-04 {
        left: -100px;
        bottom: -100px;
    }
    .circle-sector.sector-04:after {
        left: -100px;
        top: -250px;
    }




    .circle-sector .sector-text {
        transform: rotate(-45deg);
        position: relative;
        color: #273B69;
        z-index: 2;
        display: flex;
        flex-direction: column;
        word-break:break-all;
    }
</style>
