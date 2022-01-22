<template>
  <div>
    <student />
    <hr />
    <RefTest />
    <hr />
    <props name="小明" age="29" address="湖北"  @click.native="testp" />
    <br />
    <br />
    <br />
    <mixin1/>
    <hr />
    <mixin2 />
    <hr />
    <!-- @事件名=“方法” -->
    <test1 @testL="getname" @test2="getaddress" />
    <br />
    <hr />
    <test2 :msg="abc" @testE="testE" ref="testE1" />
  </div>
</template>

<script>
import Student from "./components/student.vue";
import RefTest from "./components/RefTest.vue";
import Props from "./components/Props.vue";
import Mixin1 from './components/Mixin1.vue'
import Mixin2 from './components/Mixin2.vue'
import test1 from './components/test1.vue'
import test2 from './components/test2.vue'
// 根组件
export default {
  data() {
    return {
      abc:'你好'
    };
  },
  components: {
    Student,
    RefTest,
    Props,
    Mixin1,
    Mixin2,
    test1,
    test2,
  },
  methods:{
    getname(name,a){
      console.log('app已接收',name,a);
    },
    getaddress(a){
      console.log('地址',a)
    },
    testE(v){
      console.log(v);
    },
    testp(){
      alert('ok')
    }
  },
  mounted(){
    //使用refs绑定事件
    this.$refs.testE1.$on('teste1',(a)=>{
      console.log('被调用',a);
    })
  }
};
</script>

<style>
/* 根组件 */
</style>
