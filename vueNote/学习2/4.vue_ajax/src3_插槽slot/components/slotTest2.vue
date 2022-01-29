<template>
  <div>
      <!-- 子组件传值 
      绑定在 <slot> 元素上的 attribute 被称为插槽 props
      -->
     <slot  :name1="name">
     </slot>
  </div>
</template>

<script>
export default {
  name: "slotTest2",
  data(){
      return{
          name:['小明','小红','小方']
      }
  }
};
</script>

<style scoped>

</style>