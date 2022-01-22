<template>
  <h1>
    组件传值 父传子：{{ msg }}
    <br />
    <button @click="cz">传值1</button>
    <button @click="cz1">传值2</button>
    <button @click="offcz">解绑自定义事件</button>
  </h1>
</template>

<script>
export default {
  name: "test2",
  data() {
    return {
      test2msg: "测试",
    };
  },
  props: ["msg"],
  methods: {
    cz() {
      this.$emit("testE", this.test2msg);
    },
    offcz() {
      //解绑一个自定义事件
      this.$off("testE");
      //解绑多个,使用数组
      this.$off(["testE", "testE2"]);
      //解绑所有自定义事件
      this.$off();
      this.$destroy(); //销毁当前组件实例，销毁后组件上的自定义事件都不奏效
    },
    cz1() {
      this.$emit("teste1", this.test2msg);
    },
  },
  mounted(){
    this.$bus.$on('allEvent',(a)=>{
      console.log(a);
    })//绑定事件
  },
  beforeDestroy(){
    this.$bus.$off('allEvent')
  }
};
</script>

<style>
</style>