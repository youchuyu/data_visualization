<template>
  <div class="com-container">
    <header-container path="/parallels">
      <div slot="title">Parallels</div>
    </header-container>
    <div class="display-chart">
      <div class="com-chart" id="parallels"></div>
    </div>
  </div>
</template>

<script>
import {ParallelsOptions} from "./componet/options";
import {request} from "../../../network/request";
import '@/assets/theme/dark.js'
import '@/assets/theme/light.js'
import headerContainer from "../../commonComponent/header/headerContainer";

export default {
  name: "parallels",
  components:{
    headerContainer
  },
  data(){
    return {
      chartInstance: null,
      allData: null,
      dataOption: null
    }
  },
  mounted() {
    this.initChart()
    this.getData()
    window.addEventListener('resize',this.screenAdapter)
  },
  destroyed() {
    window.addEventListener('resize',this.screenAdapter)
  },
  computed:{},
  methods:{
    initChart(){
      console.log(this.$route.path);
      this.chartInstance = this.$echarts.init(document.getElementById('parallels'),'light')
      this.chartInstance.setOption(ParallelsOptions)
    },
    async getData(){
      this.allData = await request('parallels')
      this.updateChart()
    },
    updateChart() {
      let parallelAxisOption = this.getParallelAxisOption()
      let seriesOption = this.getSeriesOption();
      // console.log(seriesOption);
      // console.log(parallelAxisOption);
      this.dataOption = {
        parallelAxis: parallelAxisOption,
        series:seriesOption
      }
      this.chartInstance.setOption(this.dataOption)
      this.setLegend()
    },

    getParallelAxisOption(){
      let axisData = this.allData[0].data_category
      // console.log(axisData);
      let parallelAxisOption = []
      parallelAxisOption.push({dim:0,name: axisData[0], inverse: true, max: 31, nameLocation: 'start'})
      for (let i = 1; i < axisData.length - 1; i++) {
        parallelAxisOption.push({ dim: i, name: axisData[i]})
      }
      parallelAxisOption.push({
        dim: axisData.length - 1,
        name: axisData[axisData.length - 1],
        type: 'category',
        data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']
      })
        return parallelAxisOption
    },

    getSeriesOption(){
      let seriesNames = []
      let seriesData = []
      for(let i = 1; i < this.allData.length; i++){
        let data = Object.values(this.allData[i])[0]
        let name = Object.keys(this.allData[i])[0]
        seriesNames.push(name)
        seriesData.push(data)
      }
      let seriesOptions = []
      for (let i = 0; i < seriesNames.length; i++) {
        seriesOptions.push({
          name: seriesNames[i],
          type: 'parallel',
          lineStyle: {
            normal: {
              width: 1,
              opacity: 0.5
            }
          },
          data: seriesData[i]
        })
      }
      return seriesOptions
    },

    screenAdapter(){
      this.chartInstance.resize()
    },
    setLegend(){
      let legendOptions = {
        legend: {
        top: 10,
            data: ['秦淮区', '建邺区', '鼓楼区'],
            itemGap: 20
      }
      }
      if (this.$route.path === '/parallels'){
        this.chartInstance.setOption(legendOptions)
      }
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
    margin-bottom: 1%;
  }
</style>
