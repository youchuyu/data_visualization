let ParallelsOptions = {
  color:[
    "#91cc75",
    "#fac858",
    "#ee6666",
  ],
  parallel: {
    left: '5%',
    right: '13%',
    bottom: '10%',
    top: '20%',
    parallelAxisDefault: {
      type: 'value',
      name: 'AQI指数',
      nameLocation: 'end',
      nameGap: 20,
      nameTextStyle: {
        fontSize: 12
      },
      areaSelectStyle: {}//设置选框
  }
  },
  grid:{
    bottom: '3%',
    left: '3%',
    right: '3%',
    containLabel: true
  },
  tooltip: {
   trigger: 'item'
  },
  label: {
   rotate: "radial",
   align: "left",
   minAngle: 3,
   overflow: "truncate",
  },
  nodeClick: "rootToNode",
  stateAnimation:{
    duration: 300,
    easing: "cubicOut"
  },

  animation: "auto",
  animationDuration: 1000,
  animationDurationUpdate: 500,
  animationEasing: "cubicInOut",
  animationEasingUpdate: "cubicInOut",
  animationThreshold: 2000,
  progressiveThreshold: 3000,
  progressive: 400,
  hoverLayerThreshold: 3000,
  useUTC: false
}
export {ParallelsOptions}
