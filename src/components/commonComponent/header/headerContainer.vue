<template>
  <div class="header-container" :style="fullScreenHeader">
    <div class="btnL"><slot name="btnL"></slot></div>
    <div class="title"><slot name="title"></slot></div>
    <div class="btnR iconfont" @click="headerChangeRoute" v-if="isActive" :style="fullIcon">&#xe6ab;</div>
    <div class="btnR iconfont" @click="headerChangeRoute" v-else :style="fullIcon">&#xe6a7;</div>
  </div>
</template>

<script>
export default {
  name: "headerContainer",
  props:{
    path: String,
  },
  computed:{
    isActive(){
      return this.$route.path === this.path
    },
    fullScreenHeader(){
      let activeStyle = {
        marginTop:'10px',
        height: '66px',
        lineHeight: '66px',
        fontSize: '36px',
        backgroundColor: 'white',
        fontWeight: 'bold',
      }
      return this.isActive ? activeStyle : {}
    },
    fullIcon(){
      let activeStyle = {
        height: '66px',
        lineHeight: '66px',
        fontSize: '24px',
        textAlign: 'left'
      }
      return this.isActive ? activeStyle : {}
    },
  },
  methods:{
    headerChangeRoute() {
      console.log(this.isActive);
      if (this.path === this.$route.path){
        this.$router.replace('/allpages')
      }else {
        this.$router.replace(this.path)
      }
    }
  }
}
</script>

<style lang="less" scoped>

  .header-container{
    width: 100%;
    height: 44px;
    color: #13102c;
    text-align: center;
    line-height: 44px;
    display: flex;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transition: all 0.3s ease-in-out;

    .title{
      flex: 1;
    }

    .btnL, .btnR{
      width: 44px;
      height: 44px;
    }

    @font-face {
      font-family: 'iconfont';
      src: url('../../../assets/css/icon/iconfont.ttf?t=1623573462136') format('truetype');
    }
    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      cursor: pointer;
    }
  }

</style>
