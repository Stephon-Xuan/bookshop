/*
ajax请求函数模块
返回promise对象（异步返回的数据是:response.data）
* */
import axios from 'axios'

export default function ajax (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      // 准备url query 参数数据
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }

      // 执行异步ajax请求
      // 发送get 请求
      promise = axios.get(url)
    } else {
      // 发送post 请求
      promise = axios.post(url, data)
    }

    promise.then(response => {
    // 成功了调用resolve()
      resolve(response.data)
    })
      .catch(error => {
        // 失败了调用reject()
        reject(error)
      })
  })

  /*
      调用ajax分两步获取数据
   const response = await ajax()
   const result = response.data

   调用ajax一步获取数据
   const resule = await ajax()
   */
}
