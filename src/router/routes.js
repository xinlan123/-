const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('@/pages/Home'),
        meta: {
            isShow: true
        }
    },
    {
        name: 'search',
        path: '/search/:keyword?', // 问号可指定params参数可传可不传 
        component: () => import('@/pages/Search'),
        meta: {
            isShow: true
        }
    },
    {
        path: '/login',
        name:'login',
        component: () => import('@/pages/Login'),
        meta: {
            isShow: false
        }
    },
    {
        path: '/register',
        name:'register',
        component: () => import('@/pages/Register'),
        meta: {
            isShow: false
        }
    },
    {
        path: '/detail/:skuId',
        name:'detail',
        component: () => import('@/pages/Detail'),
        meta: {
            isShow: true
        }
    },
    {
        path: '/addcartsuccess',
        name:'addcartsuccess',
        component: () => import('@/pages/AddCartSuccess'),
        meta: {
            isShow: true
        }
    },
    {
        path:'/shopcart',
        name:'shopcart',
        component:() => import('@/pages/ShopCart'),
        meta:{
            isShow: true
        }
    },
    {
        path:'/trade',
        name:'trade',
        component: () => import('@/pages/Trade'),
        meta:{
            isShow: true
        },
        beforeEnter: (to, from, next) => {
            if(from.path == "/shopcart"){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/pay',
        name:'pay',
        component:() => import('@/pages/Pay'),
        meta:{
            isShow: true
        },
        beforeEnter: (to, from, next) => {
            if(from.path == "/trade"){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/paysuccess',
        component:() => import('@/pages/PaySuccess'),
        meta:{
            isShow: true
        }
    },
    {
        path:'/center',
        component:() => import('@/pages/Center'),
        meta:{
            isShow: true
        },
        children:[
            {
                path:'myorder',
                name: 'myorder',
                component:() => import('@/pages/Center/myOrder')
            },
            {
                path:'grouporder',
                name: 'grouporder',
                component:() => import('@/pages/Center/groupOrder')
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    }
]
export default routes