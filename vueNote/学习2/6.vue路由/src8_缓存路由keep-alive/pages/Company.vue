<template>
  <div>
    <h1 :style="{ opacity: opacity, color: 'red' }">Company</h1>
  </div>
</template>

<script>
export default {
  name: "Company",
  data() {
    return {
      opacity: 1,
      timer: "",
    };
  },
  //   beforeDestroy(){
  //     //   console.log('Company即将被销毁');
  //     //   clearInterval(this.timer)
  //   },
  // mounted(){
  //     this.timer=setInterval(() => {
  //         // console.log('定时器运行中');
  //         this.opacity-=0.01
  //         if(this.opacity<=0)
  //         this.opacity=1
  //     }, 10);
  // }
  //组件激活前
  activated() {
    console.log("company激活");
    this.timer = setInterval(() => {
      // console.log('定时器运行中');
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 10);
  },
   //组件失活
  deactivated() {
    console.log("company失活");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>