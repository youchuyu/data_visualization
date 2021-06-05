import axios from "axios";
export function request(config) {
  // 创建axios实例对象
  let axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8888/api/',
    timeout: 5000
  });

  // 拦截器
  // 拦截请求：修改请求中的一些信息
  axiosInstance.interceptors.request.use(config => {
    // console.log(config);
    return config
  }, error => {
    console.log(error);
  })

  // 拦截响应：修改响应中的一些信息
  axiosInstance.interceptors.response.use(value => {
    // console.log(value);
    // 对返回值进行过滤操作，这样通过此方法得到的就只有返回数据
    return value.data
  }, error => {
    console.log(error);
  })

  // 返回真正的网络请求
  return axiosInstance(config)
}
