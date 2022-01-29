// 该文件用于创建vuex最为核心的store
//引入vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex)
//准备actions----用于响应组件中的动作
const actions = {
    // jia(context, value) {
    //     // console.log('actions的jia被调用了',context,value);
    //     context.commit('JIA', value)
    // },
    jian(context, value) {
        context.commit('JIAN', value)
    },
    jiawait(context, value) {
        context.commit('JIAWAIT', value)

    }

}
//准备mutations---用于操作数据（state）
const mutations = {
    JIA(state, value) {
        // console.log('mutations的jia被调用了',state,value);
        if (value === 1) {
            state.num++
        }
    },
    JIAN(state, value) {
        if (value === 2) {
            state.num--
        }
    },
    JIAWAIT(state, value) {
        setTimeout(() => {
            if (value === 3) {
                state.num++
            }
        }, 500);
    }
}
//准备state----用于存储数据
const state = {
    num: 0,
    school:'大学',
    student:'小明'
}

//创建getters用于加工数据,接收参数state
const getters={
    bigNum(state){
        return state.num*10
    }
}
//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})