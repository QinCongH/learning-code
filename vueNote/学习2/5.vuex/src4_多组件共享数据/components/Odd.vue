<template>
    <h1 v-show="num%2==0">
        偶数
    </h1>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'Even',
    computed:{
        ...mapState({num:'num'})
    }
}
</script>

<style>

</style>