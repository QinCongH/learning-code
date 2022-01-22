<template>
<div>
    <button @click="getMsg">
        点击获取数据
    </button>
</div>
</template>

<script>
import 'axios'
import axios from 'axios';
export default {
  name: "ajaxTest",
  data() {
    return {};
  },
  methods:{
      getMsg(){
          axios.get('http://localhost:8080/myApi/student').then(res=>{
              console.log(res);
          },err=>{
              console.log(err);
          })
      }
  }
};
</script>

<style>
</style>