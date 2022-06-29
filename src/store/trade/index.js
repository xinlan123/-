import {reqGetTradeList,reqAddressInfo} from '@/api'
const state = {
    tradeList: {},
    addressInfo:[]
}
const mutations = {
    GETTRADELIST(state, tradeList){
        state.tradeList = tradeList
    },
    GETADDRESSINFO(state, addressInfo){
        state.addressInfo = addressInfo
    }
}
const actions = {
    async getTradeList({commit}){
        let result = await reqGetTradeList()
        if(result.code == 200){
            commit('GETTRADELIST', result.data)
        }
    },
    async getAddressInfo({commit}){
        let result = await reqAddressInfo()
        if(result.code == 200){
            commit('GETADDRESSINFO', result.data)
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}