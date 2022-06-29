import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from "./routes"

import store from "@/store"

// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },

})
router.beforeEach(async (to, from, next) => {
    let token = store.state.login.token
    let name = store.state.login.userInfo.name
    if(token){
        if(to.path == '/login'){
            next('/home')
        }else{
            if(name){
                next()
            }else{
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    await store.dispatch('getLogout')
                    next('/login')
                }
            }
        }
    }else{
        let toPath = to.path
        if(toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1){
            next('/login?redirect=' + toPath)
        }else{
            next()
        }
    }
})


export default router