<template>
<!--    <div class="nav-item" :class="{active: isActive}" @click="changeRoute">-->
    <div class="nav-item" :style="activeStyle" @click="changeRoute">
      <span class="icon"><slot name="icon"></slot></span>
      <span class="text"><slot name="text"></slot></span>
    </div>
</template>

<script>
export default {
  name: "naviBarItem",
  props:{
    path: String,
    activeColor: {
      style:String,
      default: '#e66565'
    }
  },
  data(){
    return {
      activeState: this.isActive
    }
  },
  computed:{
    isActive(){
      return this.$route.path.includes(this.path)
    },
    activeStyle(){
      let activeStyle = {
        color: this.activeColor,
        backgroundColor : 'white',
        /*borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',*/
        borderBottom: '1px solid #e66565'
      }
      return this.isActive ? activeStyle : {}
    },
  },
  methods:{
    changeRoute() {
      if (this.path !== this.$route.path){
        this.$router.replace(this.path)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .nav-item{
    width: 15%;
    height: 100%;
    color: #13102c;
    text-align: center;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
  }
  .nav-item:hover{
    // background-color: white;
    border-radius: 10px;
    transform: scale(1.05,1.05);
    box-shadow: 0 0.5px 2px 1px rgba(0, 0, 0, 0.1);
  }
  .icon{
    padding-right: 5px;
  }
  .active{
    color: #e66565;
    background-color: white;
    border-radius: 5px;
    /*border-top-left-radius: 5px;
    border-top-right-radius: 5px;*/
  }
</style>
