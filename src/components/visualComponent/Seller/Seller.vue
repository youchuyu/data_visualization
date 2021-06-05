<template>
  <div class="com-container">
    <header-container path="/seller">
      <div slot="title">Score</div>
    </header-container>
    <div class="display-chart">
      <div class="com-chart" id="score"></div>
    </div>
  </div>
</template>

<script>
import {reqData} from "../../../network/getData";
import '@/assets/theme/dark.js'
import '@/assets/theme/light.js'
import {initOptions} from "./options.js";
import headerContainer from "../../commonComponent/header/headerContainer";

export default {
  name: "Seller",
  components:{
    headerContainer
  },
  data(){
    return {
      req_config: {
        url: 'score'
      },
      allData: null,
      chartInstance: null,
      allPages: null,
      currentPage: 1,
      timeId: null
    }
  },
  mounted() {
    this.initChart()
    this.getData(this.req_config)
    window.addEventListener('resize',this.screenAdapter)
  },
  destroyed() {
    this.endInterval()
    window.removeEventListener('resize',this.screenAdapter)
  },
  methods:{
    initChart(){
      this.chartInstance = this.$echarts.init(document.getElementById('score'),'light')
      this.chartInstance.setOption(initOptions)
      this.mouseMove()
    },
    async getData(config){
      this.allData = await reqData(config)
      // 对数组进行排序
      this.allData.sort((a,b)=>{
        return a.value - b.value
      })
      this.allPages = this.paging(this.allData)
      this.updateChart()
      this.startInterval()
    },

    updateChart(){
      let start = (this.currentPage - 1) * 10
      let end = this.currentPage * 10
      let showData = this.getShowData(start, end);
      const sellerNames = showData.map( item => item.name )
      const sellerValues = showData.map( item => item.value )
      const dataOption = {
/*        title: {
          text: '得分统计',
        },*/
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: sellerNames,
        },
        series: [
          {
            data: sellerValues,
            type: 'bar',
            // barWidth: 66,
            label:{
              show: true,
              position: 'right',
              textStyle: {
                color: 'white',
              }
            },
            itemStyle:{
              barBorderRadius:[0,5,5,0]
            },
            color: this.itemColor('#9dcd88','#9dcc89')
          }
        ],
      }
      this.chartInstance.setOption(dataOption)
    },
    paging(data){
      return Math.ceil(data.length/10)
    },
    getShowData(start, end){
      let data = this.allData.slice(start, end)
      return data
    },
    startInterval(){
      this.endInterval()
      this.timeId = setInterval(()=>{
        this.currentPage ++
        if (this.currentPage > this.allPages){
          this.currentPage = 1
        }
        this.updateChart()
      },3000)
    },
    endInterval(){
      if(this.timeId){
        clearInterval(this.timeId)
      }
    },
    mouseMove(){
      this.chartInstance.on('mouseover',() => {
        this.endInterval()
      })
      this.chartInstance.on('mouseout',() => {
        this.startInterval()
      })
    },
    itemColor(c1, c2){
      // let color = new this.$echarts.graphic.LinearGradient(x1, y1, x2, y2, []) x，y为相对坐标
      let bar_color = new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
        // 0%状态下的颜色值
        {
          offset: 0,
          color: c1
        },
        // 100%状态下的颜色值
        {
          offset: 1,
          color: c2
        }
      ])
      return bar_color
    },
    screenAdapter(){
      this.chartInstance.resize()
    }
  }
}
</script>

<style lang="less" scoped>
.com-container{
  display: flex;
  flex-direction: column;
}
.display-chart{
  flex: 1;
  margin-bottom: 5%;
}
</style>
