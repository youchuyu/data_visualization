let SunBurstOptions = {
  color:[
    "#5470c6",
    "#91cc75",
    "#fac858",
    "#ee6666",
    "#3ba272",
    "#fc8452",
    "#73c0de",
    "#9a60b4",
    "#ea7ccc"
  ],
  series: {
    radius: [0, '95%'],
    type: 'sunburst',
    sort: null,
    emphasis: {
      focus: 'ancestor'
    },
  },
  grid:{
    top: '3%',
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
export {SunBurstOptions}
