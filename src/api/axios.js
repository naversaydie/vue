import  Axios from 'axios'

export default function  $axios(url = '', params = {}, methods = 'GET') {
//    定义promise 对象
    let  promise;
    return new Promise((resolve, reject)=>{
    //    判断请求方式
        if('GET'===methods){
            let paramsStr='';
            //拼接请求 的参数
            Object.keys(params).forEach(key=>{
                paramsStr+=key + '=' + params[key] + '&'
            })
            //过滤最后的 &
            if(paramsStr !== ''){
                paramsStr = paramsStr.substr(0,paramsStr.lastIndexOf('&'))
            }
        //    拼接 完整路径
            url += '?'+ paramsStr
        //    发送 get请求
            promise = Axios.get(url)
        }else if('POST'===methods){
            promise = Axios.post(url,params)
        }
        //   返回请求结果
        promise.then(response=>{
            resolve(response)
        }).catch(error=>{
            reject(error)
        })

    })

}
