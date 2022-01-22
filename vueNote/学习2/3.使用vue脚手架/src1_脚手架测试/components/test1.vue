<template>
    <h1>
        {{fontt}}
        <button @click="res">
            发送
        </button>
        <button @click="senda">
            地址
        </button>
        <button @click='allE'>
            全局发送事件
        </button>
    </h1>

</template>

<script>
export default {
    name:'test1',
    data(){
        return{
            fontt:'test1',
            address:'湖北',
            allEmsg:'这是全局总线'
        }
    },
    methods:{
        addlist(){
            console.log(this.fontt);
        },
        res(){
            //$emit发送
            this.$emit('testL',this.fontt,1232)
        },
        senda(){
            this.$emit('test2',this.address)
        },
        allE(){
            this.$bus.$emit('allEvent',this.allEmsg)
        }
    }
}
</script>

<style>

</style>