<template>
  <div>
    <even />
    <odd />
  </div>
</template>
<script>
import Odd from "./components/Odd.vue";
import Even from "./components/Even.vue";
export default {
  data() {
    return {};
  },
  components: {
    Even,
    Odd,
  },
};
</script>
<style>
</style>
