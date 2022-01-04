<template>
  <div>{{ name }}-{{ age }}</div>
</template>

<script>
// 创建student组件
export default {
  //默认暴露方法
  //将文件暴露出去Vue.extend的简写
  name: student,//定义组件名称
  data() {
    return {
      name: "小明",
      age: "武汉",
    };
  },
};
</script>

<style>
</style>