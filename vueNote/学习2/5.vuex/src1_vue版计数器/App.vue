<template>
  <div>
    <mycount/>
  </div>
</template>
<script>
import Mycount from './components/Mycount.vue'
export default {
  data() {
    return {

    };
  },
  components: {
    Mycount
  },
  mounted(){
    console.log(this);
    }
};
</script>
<style>

</style>
