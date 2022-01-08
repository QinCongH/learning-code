<template>
  <div>
    <h1 class="ysone" ref="oned">{{ msg }}</h1>
    <button @click="showDom">获取上方dom</button>
  </div>
</template>
  
  <script>
export default {
  name: "RefTest",
  data() {
    return {
      msg: "reftest",
    };
  },
  methods: {
    showDom() {
      console.log(document.querySelector(".ysone"));//原生dom节点获取 
      console.log(this.$refs.oned); //vue中dom获取
    },
  },
};
</script>
  
  <style>
h1 {
  color: skyblue;
}
</style>