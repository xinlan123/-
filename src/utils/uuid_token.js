// 引入uuid
import { v4 as uuidv4 } from 'uuid'
export const getUUID = () => {
    // 获取本地存储是否有UUIDTOKEN
    let uuid_token = localStorage.getItem('UUIDTOKEN')

    if(!uuid_token){ // 没有uuid_token
        uuid_token = uuidv4() // 用uuid生成随机的id
        localStorage.setItem('UUIDTOKEN', uuid_token) // 并且本地存储随机生成的uuid
    }
    return uuid_token
}
