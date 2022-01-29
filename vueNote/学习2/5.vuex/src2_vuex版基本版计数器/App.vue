<template>
  <div>
    <mycount/>
    <br>
    <mytest/>
  </div>
</template>
<script>
import Mycount from './components/Mycount.vue'
import Mytest from './components/Mytest.vue'
export default {
  data() {
    return {

    };
  },
  components: {
    Mycount,
    Mytest
  },
  mounted(){
    console.log(this);
    }
};
</script>
<style>

</style>
