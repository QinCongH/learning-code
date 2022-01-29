import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入Vuex的store
import store from './store'
new Vue({
  // template:`<app></app>`,//根组件
  // el: '#root',
  // components: {
  //     app
  // },
  render: h => h(App),
  store,//使用store
  beforeCreate(){//开始
      Vue.prototype.$bus=this //安装全局事件总线
  }
}).$mount('#root')
