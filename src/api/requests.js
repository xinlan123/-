// 对axios的二次封装
import axios from "axios";
import nprogress from "nprogress";
import store from "@/store"

import "nprogress/nprogress.css"
const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
})
// 请求拦截器
requests.interceptors.request.use((config) => {
    let uuid_token = store.state.detail.uuid_token;
    let token = store.state.login.token
    if(uuid_token){
        config.headers.userTempId = uuid_token
    };
    if(token){
        config.headers.token = token
    }
    nprogress.start()
    return config
})

// 响应拦截器
requests.interceptors.response.use(
    (res) => {
        nprogress.done()
        return res.data
    }, (error) => {
        return Promise.reject(new Error('faile'))
    })

export default requests