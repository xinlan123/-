import {reqGetShopCartList, reqGetDeleteShopCartList,reqGetChangeIsChecked} from "@/api"
const state = {
    shopCartList: []
}
const mutations = {
    GETSHOPCARTLIST(state, shopCartList){
        state.shopCartList = shopCartList
    }
}
const actions = {
    async getShopCartList(context){
        let result = await reqGetShopCartList()
        if(result.code == 200){
            context.commit('GETSHOPCARTLIST', result.data)
        }
    },
    async getDeleteShopCartList(context, skuId){
        let result = await reqGetDeleteShopCartList(skuId)
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async getChangeIsChecked(context,{skuId, isChecked}){
        let result = await reqGetChangeIsChecked(skuId, isChecked)
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    deleteAllCheckedCart({dispatch,getters}){
        let cartInfoList = getters.cartList.cartInfoList
        let PromiseAll = []
        cartInfoList.forEach((cart) => {
            if(cart.isChecked == 1){
                let promise = dispatch('getDeleteShopCartList', cart.skuId)
                PromiseAll.push(promise)
            }
        });
        return Promise.all(PromiseAll)
    },
    changeAllCartChecked({dispatch, getters}, isChecked){
        let cartInfoList = getters.cartList.cartInfoList
        let promiseAll = []
        cartInfoList.forEach((cart) => {
            let promise = dispatch('getChangeIsChecked', {skuId:cart.skuId, isChecked})
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    }
}
const getters = {
    cartList(state){
        return state.shopCartList[0] || {}
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}