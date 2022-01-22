<template>
  <div>
    <button @click="isShow = !isShow">changes</button>
    <transition name="ani3" appear>
      <div class="c" v-show="isShow"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "animatetest2",
  data() {
    return {
      isShow: true,
    };
  },
  methods: {},
};
</script>

<style scoped>
.c {
  width: 200px;
  height: 200px;
  background: pink;
  margin-top: 40px;
}
/* 进入的起点 */
.ani3-enter{
    transform: translateX(100%);
}
/* 进入的终点 */
.ani3-enter-to{
    transform: translateX(0%);
}
/* 离开的起点 */
.ani3-leave{
    transform: translateX(0%);
}
/* 离开的终点 */
.ani3-leave-to{
    transform: translateX(100%);
}
/* v-enter-active 和 v-leave-active 可以控制进入/离开过渡的不同的缓和曲线 */
.ani3-enter-active {
  animation: ani 0.5s linear;
}
.ani3-leave-active {
  animation: ani 0.5s linear reverse;
}
</style>