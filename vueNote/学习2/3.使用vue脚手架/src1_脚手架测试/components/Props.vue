<template>
    <h1>
        这是{{name}}组件
    </h1>
</template>

<script>
export default {
    name:"Props",
    data(){
        return{
            // name:'Props'
        }
    },
    props:['name','age','address']
}
</script>

<style>

</style>