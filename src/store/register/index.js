import {reqGetCaptcha, reqGetUserRegisterIsSucceed} from "@/api"
const state = {
    captcha: ''
}
const mutations = {
    GETCAPTCHA(state, captcha){
        state.captcha = captcha
    }
}
const actions = {
    async getCaptcha({commit}, phone){
        let result = await reqGetCaptcha(phone)
        if(result.code == 200){
            commit('GETCAPTCHA', result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async GetUserRegisterIsSucceed({commit}, data){
        let result = await reqGetUserRegisterIsSucceed(data)
        console.log(result);
        return result.code == 200 ? 'ok' : Promise.reject(new Error('faile'))
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}