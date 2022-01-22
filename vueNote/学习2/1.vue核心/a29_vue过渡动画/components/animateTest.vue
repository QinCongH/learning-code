<template>
  <div>
    <!-- 1.单个 -->
    <!-- 
      <button @click="isShow = !isShow">点击</button>
    <transition name="ani" appear>
      <div class="a" v-show="isShow"></div>
    </transition> 
    -->

    <!-- 2.多个 进行切换 -->
    <button @click="isShow = !isShow">点击</button>
    <transition-group name="ani" appear>
      <div :key="1" class="a" v-show="isShow"></div>
      <div :key="2" class="b" v-show="!isShow"></div>
    </transition-group>

    <br />
  </div>
</template>

<script>
export default {
  name: "animatetest",
  data() {
    return {
      isShow: true,
    };
  },
  methods: {},
};
</script>

<style>
.a {
  width: 400px;
  height: 40px;
  background: skyblue;
  margin-top: 30px;
}
.b {
  width: 400px;
  height: 40px;
  background: rgb(141, 156, 161);
  margin-top: 30px;
}
/* v-enter-active 和 v-leave-active 可以控制进入/离开过渡的不同的缓和曲线 */
.ani-enter-active {
  animation: ani 0.5s linear;
}
.ani-leave-active {
  animation: ani 0.5s linear reverse;
}
@keyframes ani {
  from {
    transform-origin: left center;
    transform: translateX(100%);
  }
  to {
    /* 加入中心点 */
    transform-origin: left center;
    transform: translateX(0%);
  }
}
</style>