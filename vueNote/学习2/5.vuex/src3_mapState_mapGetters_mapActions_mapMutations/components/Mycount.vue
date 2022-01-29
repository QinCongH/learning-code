<template>
  <div>
    <!-- 当数为1时累加，当数为2时累减，当数为3时延时3秒累加 -->
    <select v-model.number="chosenum">
      <option value="1">累加</option>
      <option value="2">累减</option>
      <option value="3">延时累加</option>
    </select>
    &nbsp;
    <input
      type="number"
      v-model.number="num"
      placeholder="请输入数值"
    />
    <br /><br />

    <button @click="addnum(chosenum)">+</button>
    &nbsp;
    <button @click="reduce(chosenum)">-</button>
    &nbsp;
    <p>
        {{bigNum}}
    </p>
  
    <a href="javascript:;">{{school}}</a>
        &nbsp;
    <a href="javascript:;">{{student}}</a>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
import {mapMutations} from 'vuex'
export default {
  name: "Mycount",
  data() {
    return {
      chosenum: 1,
    };
  },
  methods: {
    addnum() {
        // this.$store.commit('JIA',this.chosenum)
        this.setimesum();
    },
    // reduce() {
    //     this.$store.dispatch('jian',this.chosenum)
    //     // 此处action没有逻辑的情况下可以直接跳过action，使用commit
    //     // this.$store.commit('JIAN', this.chosenum)
    // },
    // setimesum() {
    //     this.$store.dispatch('jiawait',this.chosenum)
    // },
    //使用mapActions生成 this.$store.commit('JIAN', this.chosenum)
    /*
      mapActions({事件方法名：'传入action的方法'})
    */
   ...mapActions({setimesum:'jiawait',reduce:'jian'}),
   ...mapMutations({addnum:'JIA'})
  },
  computed:{
    // 方法1.程序员纯手写
    // num(){
    //   return this.$store.state.num
    // },
    // school(){
    //   return this.$store.state.school
    // },
    // student(){
    //   return this.$store.state.student
    // },
    //方法2.使用vuex封装api----mapState
      // 2-1.对象写法
    /* ...mapState({属性名:'state中数据名'}) */
    // ...mapState({num:'num',school:'school',student:'student'})
      //2-2.数组写法
         /* ...mapState(['state中数据名1','state中数据名2'],...,'state中数据名n') */
         //只适合属性名与state中的数据名一样的情况下
        ...mapState(['num','school','student']) ,

    //mapGetters
    // 2-1.对象写法
        // ...mapGetters({bigNum:'bigNum'})    
           //2-2.数组写法
        ...mapGetters(['bigNum'])
  },
};
</script>

<style>
/* 
在view中每次调用state数据都要使用 $store.sate.数据 这样会很麻烦。
解决方法1.使用计算属性 创建新属性并返回$store.sate.数据


*/
</style>