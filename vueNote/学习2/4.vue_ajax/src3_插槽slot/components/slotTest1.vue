<template>
  <div class="box">
      <ul>
          <li v-for="(v,index) in info" :key="index">
              {{index+1}}.{{v}}
          </li>
         
      </ul>
       <!-- 1.默认插槽 -->
       <slot name="center">
           <!-- 插槽没内容 -->
       </slot>
       <!-- 2.具名插槽 -->
       <slot name="foot">
                    <!-- 插槽没内容 -->
       </slot>
     
      
  </div>
</template>

<script>
export default {
    name:'slotTest1',
    data(){
        return{

        }
    },
    props:['info']

}
</script>

<style>
.box{
    background: skyblue;
    width: 300px;
    height: 400px;
    margin-top:30px;
}
li{
    list-style: none;
    text-align: center;
}
</style>