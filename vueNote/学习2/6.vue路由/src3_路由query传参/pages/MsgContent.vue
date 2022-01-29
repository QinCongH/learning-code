<template>
  <div>
      <ul>
          <li>{{$route.query.id}}</li>
          <li>{{$route.query.title}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'msgContent'
}
</script>

<style>

</style>