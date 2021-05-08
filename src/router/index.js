//导入vue
import Vue from 'vue'
import VueRouter from 'vue-router'
//导入组件
import Home from "../views/Home"
import Main from "../views/Main"
import Login from "../views/Login"
import NotFound from '../views/NotFound'
//导入子模块
import UserList from "../views/user/List"
import UserProfile from "../views/user/Profile"

//使用
Vue.use(VueRouter)
//导出
export default new VueRouter({
  mode: 'history',
  routes: [
    { 
      
      path: "/",
      name: "Home",
      component: Home
    },
    {
      //首页
      path: '/main',
      component: Main,
      //  写入子模块
      children: [
        {
          path: '/user/profile:id',
          name: 'UserProfile',
          component: UserProfile,
          props: true
        }, {
          path: '/user/list',
          component: UserList,
        },
      ]
    },

    //登录页
    {
      path: '/login',
      component: Login
    },
    //重定向
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '*',
      component: NotFound
    }
  ]


})