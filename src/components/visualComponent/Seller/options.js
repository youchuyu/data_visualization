
  let initOptions = {
/*    title:{
      zlevel: 0,
      z: 6,
      show: true,
      target: "blank",
      subtext: "",
      subtarget: "blank",
      left: 0,
      top: 0,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
      }
    },*/
    grid:{
      top: '3%',
      bottom: '3%',
      left: '3%',
      right: '3%',
      containLabel: true
    },
    tooltip:{
      trigger: 'axis',
    },
    axisPointer:{
      show: "auto",
      zlevel: 0,
      z: 0,
      type: "shadow",
      snap: false,
      triggerTooltip: true,
      value: null,
      status: null,
      animation: null,
      animationDurationUpdate: 200,
      lineStyle:{
        color: "rgba(210,219,238,0.2)",
        // width: 66,
        type: "solid"
      },
      shadowStyle:{
        color: "rgba(210,219,238,0.2)"
      },
      label:{
        show: true,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: "#fff",
        padding: {
          0: 5,
          1: 7,
          2: 5,
          3: 7,
        },
        backgroundColor: "auto",
        borderColor: null,
        borderWidth: 0,
        borderRadius: 3
      },
      handle:{
        show: false,
        icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
        size: 45,
        margin: 50,
        color: "#333",
        shadowBlur: 3,
        shadowColor: "#aaa",
        shadowOffsetX: 0,
        shadowOffsetY: 2,
        throttle: 40
      }
    },
    stateAnimation:{
      duration: 300,
      easing: "cubicOut"
    },
    emphasis: {
      focus: 'self',
      blurScope: 'series',
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
  export {initOptions}
