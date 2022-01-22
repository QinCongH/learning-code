<template>
  <button @click="tanchuang">{{ text }}</button>
</template>

<script>
import { a } from "./hunhe";
export default {
  name: "Mixin1",
  data() {
    return {
      text: "this is Mixin1",
    };
  },
  mixins: [a],
};
</script>

<style>
</style>