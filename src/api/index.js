// api进行统一管理
import requests from "./requests";
import mockRequests from "./mockRequests"
// 三级联动接口
export const reqCategoryList = () => {
    return requests({
        url:'/product/getBaseCategoryList', 
        method:'get'
    })
}

// banner轮播图
export const reqGetBannerList = () => mockRequests({url:'/banner', method:'get'})

// floor
export const reqGetFloorList = () => mockRequests({url:'/floor', method:'get'})

// 获取搜索模块数据
export const reqGetSearchInfo = (params) => requests({
    url:'/list',
    method:'post',
    data: params
})

// 获取商品详情页
export const reqGetDetailList = (skuId) => requests({url:`/item/${skuId}`, method:'get'})

// 添加商品到购物车
export const reqGetAddCartList = (skuId, skuNum) => requests({url:`/cart/addToCart/${skuId}/${skuNum}`, method:'post'})

// 获取购物车列表
export const reqGetShopCartList = () => requests({url:'/cart/cartList', method:'get'})

// 删除购物车商品
export const reqGetDeleteShopCartList = (skuId) => requests({url:`/cart/deleteCart/${skuId}`, method:'delete'})

// 切换商品选中状态
export const reqGetChangeIsChecked = (skuId, isChecked) => requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

// 获取注册时的验证码
export const reqGetCaptcha = (phone) => requests({url: `/user/passport/sendCode/${phone}`, method:'get'})

// 获取用户注册是否成功
export const reqGetUserRegisterIsSucceed = (data) => requests({url:'/user/passport/register', data, method:'post'})


// 用户登录
export const reqGetUserLogin = (data) => requests({url:'/user/passport/login', data, method:'post'})

// 获取用户信息
export const reqUserInfo = () => requests({url:'/user/passport/auth/getUserInfo',method:'get'})

// 退出登录
export const reqLogout = () => requests({url:'/user/passport/logout', method:'get'})

// 获取订单页的信息
export const reqGetTradeList = () => requests({url:'/order/auth/trade', method:'get'})

// 获取用户地址信息
export const reqAddressInfo = () => requests({url:'/user/userAddress/auth/findUserAddressList', method:'get'})

// 提交订单信息
export const reqSubmitOrder = (tradeNo, data) => requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method:'post'})

// 获取订单支付信息
export const reqSumbitPayOrder = (orderId) => requests({url:`/payment/weixin/createNative/${orderId}`, method:'get'})

// 获取订单支付状态
export const reqPayStatus = (orderId) => requests({url:`/payment/weixin/queryPayStatus/${orderId}`, method:'get'})

// 获取个人中心数据
export const reqMyorderList = (page, limit) => requests({url:`/order/auth/${page}/${limit}`, method:'get'})

