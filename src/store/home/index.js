import { reqCategoryList,reqGetBannerList,reqGetFloorList } from "@/api"
const state = {
    categoryList:[],
    bannerList:[],
    floorList: []
}
const mutations = {
    GETCATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }
}
const actions = {
    // 三级联动
    async getCategoryList(context){
        let result = await reqCategoryList()
        if(result.code == 200){
            context.commit('GETCATEGORYLIST',result.data)
        }
    },
    // 模拟轮播图
    async getBannerList(context){
        let result = await reqGetBannerList()
        if(result.code == 200){
            context.commit('GETBANNERLIST',result.data)
        }
    },
    // 模拟floor
    async getFloorList({commit}){
        let result = await reqGetFloorList()
        if(result.code == 200){
            commit('GETFLOORLIST', result.data)
        }
    }
}
const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}