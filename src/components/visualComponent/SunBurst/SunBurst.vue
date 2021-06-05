<template>
  <div class="com-container">
    <header-container path="/sunburst">
      <div slot="title">SunBurst</div>
    </header-container>
    <div class="display-chart">
      <div class="com-chart" id="sun_burst"></div>
    </div>
  </div>
</template>

<script>
import {request} from "../../../network/request";
import {SunBurstOptions} from "./componet/options";
import '@/assets/theme/dark.js'
import '@/assets/theme/light.js'
import headerContainer from "../../commonComponent/header/headerContainer";

export default {
  name: "SunBurst",
  components:{
    headerContainer
  },
  mounted() {
    this.initChart()
    this.getData()
    window.addEventListener('resize',this.screenAdapter)
  },
  destroyed() {
    window.removeEventListener('resize',this.screenAdapter)
  },
  data(){
    return {
      chartInstance: null,
      allData: null
    }
  },
  computed:{
    isActive(){
      return this.$route.path === '/sunburst'
    }
  },
  methods:{
    initChart() {
      this.chartInstance = this.$echarts.init(document.getElementById('sun_burst'),'light')
      this.chartInstance.setOption(SunBurstOptions)
    },
    async getData(){
      this.allData = await request('hotproduct');
      this.updateChart()
    },
    updateChart(){
      let dataOption = {
        series: {
          data: this.allData,
          levels: this.setLabelShow()
        },
      }
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter(){
      this.chartInstance.resize()
    },
    setLabelShow(){
      let levels = [
        {},
        {
          r0: '15%',
          r: '35%',
          itemStyle: {
            borderWidth: 2,
            borderColor: 'white'
          },
          label: {
            rotate: 'tangential',
            overflow: "truncate"
          }
        },
        {
          r0: '35%',
          r: '70%',
          label: {
            align: 'right',
            overflow: 'truncate',
            show: this.isActive
          },
          itemStyle: {
            borderWidth: 2,
            borderColor: 'white'
          }
        },
        {
          r0: '70%',
          r: '72%',
          label: {
            fontSize: 10,
            position: 'outside',
            padding: 3,
            silent: false,
            show: this.isActive
          },
          itemStyle: {
            borderWidth: 3,
            borderColor: 'white'
          }
        }]
      return levels
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
    margin-bottom: 3%;
  }
</style>
