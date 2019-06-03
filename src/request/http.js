// axios封装文件
import axios from 'axios'
import QS from 'qs'
import store from '../store'
import { Toast } from 'vant';

//环境判断
 if(process.env.NODE_ENV === 'development'){

    axios.defaults.baseURL = '/'
 }else if(process.env.NODE_ENV === 'debug') {
    axios.defaults.baseURL = '/'
 }else {
   axios.defaults.baseURL = '/'
 }
// 请求超时时间
  axios.defaults.timeout = 10000;
// 请求
