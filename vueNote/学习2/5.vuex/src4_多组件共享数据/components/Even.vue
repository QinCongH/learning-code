<template>
  <div>
    <button @click="addnum">点我加1</button>
    <p>
        {{num}}
    </p>
    <h1 v-show="num%2==1">奇数</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
export default {
  name: "Odd",
  computed:{
      ...mapState({num:'num'})
  },
  methods:{
    //   addnum(){
    //       this.$store.commit('JIA') //给mutations处理
    //   },
      ...mapMutations({addnum:'JIA'})//通过mapMutations
      
  }
};
</script>

<style>
</style>