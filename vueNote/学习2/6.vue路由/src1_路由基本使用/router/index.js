import Vue from 'vue'
import VueRouter from 'vue-router'

//导入自定义组件
import AboutContent from '../pages/AboutContent'
import HomeContent from '../pages/HomeContent'

//安装路由，显示引用
Vue.use(VueRouter);


//配置导出路由
export default new VueRouter({
  routes:[
    {
      //路由路径
      path:'/about',
      //自定义路由名称
      name:'AboutContent',
      //路由跳转的组件
      component:AboutContent,
    },
    {
      //路由路径
      path:'/Home',
      //自定义路由名称
      name:'HomeContent',
      //路由跳转的组件
      component:HomeContent
    }
  ]
});
