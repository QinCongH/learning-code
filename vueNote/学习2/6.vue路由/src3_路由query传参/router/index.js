import Vue from 'vue'
import VueRouter from 'vue-router'

//导入自定义组件
import AboutContent from '../pages/AboutContent'
import HomeContent from '../pages/HomeContent'
import We from '../pages/We'
import Company from '../pages/Company'
import MsgContent from '../pages/MsgContent'

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
      //一级子路由
      children:[
        {
          path:'we',
          name:'We',
          component:We,
          // 二级子路由
          children:[
            {
              path:'msgcontent',
              name:'MsgContent',
              component:MsgContent
            }
          ]
        },
        {
          path:'company',
          name:'Company',
          component:Company
        }
      ]
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
