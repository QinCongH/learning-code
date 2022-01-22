<template>
    <button @click='tanchuang'>{{text}}</button>
</template>

<script>
import {a} from './hunhe'
export default {
  name: "Mixin2",
  data(){
      return{
          text:'this is Mixin2'
      }
  },
  mixins:[a]
};
</script>

<style>

</style>