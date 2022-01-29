<template>
  <div>
    <h1>累加器测试</h1>
    <p>{{ $store.state.num }}</p>
    <button @click="addNum1"></button>
  </div>
</template>

<script>
export default {
  name: "mytest",
  methods: {
    addNum1() {
      this.$store.state.num++;
    },
  },
};
</script>

<style>
</style>