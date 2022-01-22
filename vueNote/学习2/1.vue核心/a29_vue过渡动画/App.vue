<template>
  <div>
    <animate-test />
    <br>

    <animate-test2 />
    <br>
    <animate-test3/>
  </div>
</template>
<script>
import animateTest from "./components/animateTest.vue";
import animateTest2 from "./components/animateTest2.vue";
import animateTest3 from "./components/animateTest3.vue";
export default {
  data() {
    return {};
  },
  components: {
    animateTest,
    animateTest2,
    animateTest3,
  },
};
</script>
<style>
/* 根组件 */
</style>
