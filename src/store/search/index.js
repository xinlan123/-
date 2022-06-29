import {reqGetSearchInfo} from "@/api"
const state ={
    searchInfo:{}
}
const mutations = {
    GETSEARCHINFO(state, searchInfo){
        state.searchInfo = searchInfo
    }
}
const actions = {
    async getSearchInfo(context,params = {}){
        let result = await reqGetSearchInfo(params)
        if(result.code == 200){
            context.commit('GETSEARCHINFO',result.data)
        }
    }
}
const getters = {
    attrsList(state){
        return state.searchInfo.attrsList || []
    },
    goodsList(state){
        return state.searchInfo.goodsList || []
    },
    trademarkList(state){
        return state.searchInfo.trademarkList || []
    },
}

export default{
    state,
    mutations,
    actions,
    getters
}