import Vue from 'vue'
import App from './App.vue'
// 定义全局组件
import TypeNav from "@/components/TypeNav"
import Carousel from "@/components/Carousel"
import Pagination from "@/components/Pagination"
import {MessageBox} from "element-ui"

import router from "./router"
import store from "./store"
Vue.config.productionTip = false
Vue.component('TypeNav', TypeNav)
Vue.component('Carousel', Carousel)
Vue.component('Pagination', Pagination)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
import "@/mock/mockServer"
import "swiper/css/swiper.css"
// 统一引入
import * as API from "@/api"
import yuan from "@/assets/images/1.gif"
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: yuan
})


import "@/plugins/validate"
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this,
    Vue.prototype.$API = API
  }
}).$mount('#app')
