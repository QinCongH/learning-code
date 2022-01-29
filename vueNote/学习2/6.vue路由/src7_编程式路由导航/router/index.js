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
  routes: [{
      //路由路径
      path: '/about',
      //自定义路由名称
      name: 'AboutContent',
      //路由跳转的组件
      component: AboutContent,
      //一级子路由
      children: [{
          path: 'we',
          name: 'We',
          component: We,
          // 二级子路由
          children: [{
            path: 'msgcontent', //使用占位符声明接收params参数
            name: 'MsgContent',
            component: MsgContent,
            //props写法1.props值为对象。该对象中的所有key-value都会以props的形式传给msgContent组件
            // props:{a:'test',b:'test2'}
            //props写法2.props值为布尔值true,把路由接收到的所有params参数通过props传给msgContent组件。仅适用于params
            // props:true
            //props写法3.props值为函数,函数带一个形参route,该函数中返回的每一组key-value都会以props的形式传给msgContent组件
            props(route) {
              return {
                id: route.query.id,
                title: route.query.title,
              }
            }
          }]
        },
        {
          path: 'company',
          name: 'Company',
          component: Company
        }
      ]
    },
    {
      //路由路径
      path: '/Home',
      //自定义路由名称
      name: 'HomeContent',
      //路由跳转的组件
      component: HomeContent
    }
  ]
});