import {reqGetDetailList, reqGetAddCartList} from '@/api'
import {getUUID} from "@/utils/uuid_token"
const state ={
    detailList:{},
    uuid_token: getUUID()
}
const mutations = {
    GETDETAILLIST(state, detailList){
        state.detailList = detailList
    },
}
const actions = {
    async getDetailList(context, skuId){
        let result = await reqGetDetailList(skuId)
        if(result.code == 200){
            context.commit('GETDETAILLIST', result.data)
        }
    },
    async getAddCartList(context, {skuId, skuNum}){
        let result = await reqGetAddCartList(skuId, skuNum)
        if(result.code == 200){
            return 'ok'
        }else {
            return  Promise.reject(new Error('faile'))
        }
    }
}
const getters = {
    categoryView(state){
        return state.detailList.categoryView || {}
    },
    skuInfo(state){
        return state.detailList.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.detailList.spuSaleAttrList || []
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}