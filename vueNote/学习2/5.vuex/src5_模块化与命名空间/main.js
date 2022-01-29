import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),//js创建<App />
  beforeCreate(){
    Vue.prototype.$bus=this //安装全局事件总线
  }
}).$mount('#root')//挂载实例
