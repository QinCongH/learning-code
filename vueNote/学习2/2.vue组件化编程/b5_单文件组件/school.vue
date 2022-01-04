<template>
  <div>{{ name }}-{{ adress }} <student></student></div>
</template>

<script>
// 引入模块
import student from './student'
// 创建school组件
export default {
    name:school,
  data() {
    return {
      name: "湖北学院",
      adress: "武汉",
    };
  },
  components: {
    student, //父组件为school组件
  },
};
</script>

<style>
</style>