<template>
  <div>
    <h1>使用第三方动画库</h1>
    <button @click="isShow = !isShow">changes</button>
    <transition name="animate__animated animate__bounce" appear enter-active-class="animate__swing" leave-active-class="animate__bounce">
      <div class="c" v-show="isShow"></div>
    </transition>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "animateTest3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style>
    .c{
        width: 100px;
        height: 100px;
        background: #000;
    }
</style>