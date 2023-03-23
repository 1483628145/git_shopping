// 引入Vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'

// 使用vueRouter
Vue.use(VueRouter)

// 引入路由组件
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'

const routes = [
  {
    path:'/Home',
    component:Home,
    // showFooter 用于判断是否显示 Footer组件
    meta:{showFooter:true}
  },
  {
    path:'/Login',
    component:Login,
    meta:{showFooter:true}
  },
  {
    path:'/Register',
    component:Register,
    meta:{showFooter:false}
  },
  {
    path:'/Search',
    component:Search,
    meta:{showFooter:false}
  },
  // 重定向： 当页面刷新的时候默认跳转到Home组件
  {
    path:"*",
    redirect:'/home'
  }
]



export default new VueRouter({
  routes
})


