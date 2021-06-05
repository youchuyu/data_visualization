<template>
  <div class="total-view">
<!--    <SunBurst></SunBurst>-->
    <div class="topPage">

      <div class="sunburst">
<!--        <header-container path="/sunburst">
          <div slot="title">sunburst</div>
          <div slot="btnR" class="iconfont">&#xe66a;</div>
        </header-container>-->
        <div class="sunburst-display"><sun-burst></sun-burst></div>
      </div>

      <div class="seller">
<!--        <header-container path="/seller">
          <div slot="title">score</div>
          <div slot="btnR" class="iconfont">&#xe66a;</div>
        </header-container>-->
        <div class="seller-display"><seller></seller></div>
      </div>
    </div>

    <div class="bottomPage">
      <div class="parallel">
        <div class="parallel-display"><parallel></parallel></div>
      </div>
    </div>

  </div>
</template>

<script>
import headerContainer from "../../components/commonComponent/header/headerContainer";

import SunBurst from "../../components/visualComponent/SunBurst/SunBurst";
import Seller from "../../components/visualComponent/Seller/Seller";
import Parallel from "./ParallelsPage";
export default {
  name: "AllPages",
  methods:{

  },
  components: {
    headerContainer,
    Parallel,
    Seller,
    SunBurst,
  }
}
</script>

<style lang="less" scoped>
  .total-view{
    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
  }
  .header{
    height: 44px;
    color: white;
  }
  .topPage{
    // box-sizing: content-box;
    background-color: rgba(ff,ff,ff,0);
    //border: #990055 solid 5px;
    flex: 3;
    display: flex;

    .sunburst{
      flex: 2;
      display: flex;
      flex-direction: column;
      box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.07);
      transition: all 0.3s ease-in-out;

      .sunburst-display{
        flex: 1;
      }
    }
    .sunburst:hover{
      transform: scale(1.01,1.01);
      box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.1);
    }

    .seller{
      flex: 1;
      display: flex;
      flex-direction: column;
      box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.07);
      transition: all 0.3s ease-in-out;

      .seller-display{
        flex: 1;
      }
    }
    .seller:hover{
      transform: scale(1.01,1.01);
      box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.1);
    }

  }
  .topPage > div{
    box-sizing: border-box;
    display: inline-block;
    // border: #13102c solid 1px;
    margin: 1%;
    border-radius: 10px;
  }

  .bottomPage{
    flex: 2;

    background-color: rgba(ff,ff,ff,0);
    //border: #990055 solid 5px;
    display: flex;
    .parallel{
      flex: 1;
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease-in-out;
      box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.07);
      margin-bottom: 15px;

      .parallel-display{
        flex: 1;
      }
    }

    .parallel:hover{
      transform: scale(1.01,1.01);
      box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.1);
    }
  }
  .bottomPage > div{
    flex: 1;
    box-sizing: border-box;
    display: inline-block;
    // border: #13102c solid 1px;
    margin: 1%;

    border-radius: 10px;
  }
</style>
