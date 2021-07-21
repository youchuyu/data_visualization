// 定义SocketService，并定义成单例设计模式
export default class SocketService {
  // 单例设计模式 :通过getInstance方法只能得到SocketService的同一个实例对象
  static instance = null
  // 有get在调用Instance时不需要加上（）
  static get Instance () {
    if (!this.instance) {
      this.instance = new SocketService()
    }
    return this.instance
  }

  // 存储回掉函数
  callBackMapping = {}

  // 标识是否连接成功
  connected = false
  // 记录重试的次数
  sendRetryCount = 0
  // 重新连接尝试的次数
  connectRetryCount = 0
  // 定义实例属性：和服务器连接的socket对象
  ws = null
  // 定义连接服务器的方法,在main.js中调用
  connect () {
    // 连接服务器
    if (!window.WebSocket) {
      return console.log('您的浏览器不支持WebSocket')
    }
    this.ws = new WebSocket('ws://localhost:9998')
    // 事件监听
    // 连接成功
    this.ws.onopen = () => {
      console.log('连接服务端成功')
      this.connected = true
      // 重置重新连接的次数
      this.connectRetryCount = 0
    }
    // 1.连接服务端失败
    // 2.连接成功后，服务器关闭的情况
    this.ws.onclose = () => {
      console.log('连接服务端失败')
      this.connected = false
      this.connectRetryCount++
      setTimeout(() => {
        this.connect()
      }, this.connectRetryCount * 500)
    }
    // 得到服务端发送来的数据
    this.ws.onmessage = (msg) => {
      console.log('从服务端获取到数据')
      // 真正服务器端发送过来的原始数据在msg中的data字段
      // console.log(msg.data)
      const recvData = JSON.parse(msg.data)
      const socketType = recvData.socketType
      // 判断回调函数是否存在
      if (this.callBackMapping[socketType]) {
        const action = recvData.action
        if (action === 'getData') {
          const realData = JSON.parse(recvData.data)
          // this为当前的对象socket_service
          this.callBackMapping[socketType].call(this, realData)
        } else if (action === 'fullScreen') {
        } else if (action === 'themeChange') {
        }
      }
    }
  }

  // 回调函数注册
  registerCallBack (socketType, callBack) {
    this.callBackMapping[socketType] = callBack
  }

  // 取消某一个回调函数
  unRegisterCallBack (socketType) {
    this.callBackMapping[socketType] = null
  }

  // 发送数据的方法
  send (data) {
    // 判断此时此刻有没有连接成功
    if (this.connected) {
      this.sendRetryCount = 0
      this.ws.send(JSON.stringify(data))
    } else {
      this.sendRetryCount++
      setTimeout(() => {
        this.send(data)
      }, this.sendRetryCount * 500)
    }
  }
}
