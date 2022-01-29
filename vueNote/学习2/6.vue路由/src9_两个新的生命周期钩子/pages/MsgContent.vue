<template>
  <div>
      <ul>
          <!-- <li>{{$route.params.id}}</li>
          <li>{{$route.params.title}}</li> -->
        <li>{{id}}</li>
          <li>{{title}}</li>
          <hr>
      </ul>
  </div>
</template>

<script>
export default {
    name:'msgContent',
    props:['id','title'],
  
}
</script>

<style>

</style>