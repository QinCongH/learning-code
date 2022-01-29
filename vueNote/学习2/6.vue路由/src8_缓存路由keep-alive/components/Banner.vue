<template>
  <div>
    <button @click="backLocation">后退</button>
    <button @click="forwardLocation">前进</button>
    <button @click="replaceLocation">前进到自定义位置</button>
    <button @click="pushLocation">后退到自定义位置</button>
    <button @click="goLocation">自定义前进/后退步数</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    replaceLocation() {
      this.$router.replace({
        name: "MsgContent", //前进到命名为MsgContent的路由组件
      });
    },
    pushLocation() {
      this.$router.push({
        name: "AboutContent", //后退到命名为AboutContent的路由组件
      });
    },
    forwardLocation() {
      this.$router.forward(); //前进一步,后退后才能前进
    },
    backLocation() {
      this.$router.back(); //后退一步
    },
    goLocation(){   //负数为push,正数为replace
        // this.$router.go(3); //前进3步
        this.$router.go(-1); //后退1步
    }
  },
};
</script>

<style scoped>
    button {
    margin-left: 10px;
    }
</style>