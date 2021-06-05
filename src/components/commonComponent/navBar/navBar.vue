<template>
  <header class="nav-bar">
    <nav-bar-container>
        <nav-bar-item path="/allpages">
          <span slot="icon" class="iconfont">&#xe61e;</span>
          <span slot="text">首页</span>
        </nav-bar-item>
        <nav-bar-item path="/seller">
          <span slot="icon" class="iconfont">&#xe8b5;</span>
          <span slot="text">seller</span>
        </nav-bar-item>
        <nav-bar-item path="/sunburst">
          <span slot="icon" class="iconfont">&#xe8c1;</span>
          <span slot="text">sunburst</span>
        </nav-bar-item>
        <nav-bar-item path="/parallels">
          <span slot="icon" class="iconfont">&#xe8be;</span>
          <span slot="text">parallels</span>
        </nav-bar-item>
    </nav-bar-container>
  </header>
</template>

<script>
import navBarContainer from "./navBarContainer";
import navBarItem from "./navBarItem";
export default {
  name: "navBar",
  components:{
    navBarItem,
    navBarContainer
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
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
}
</style>
