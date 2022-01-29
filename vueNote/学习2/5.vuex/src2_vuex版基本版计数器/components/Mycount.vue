<template>
  <div>
    <!-- 当数为1时累加，当数为2时累减，当数为3时延时3秒累加 -->
    <select v-model.number="chosenum">
      <option value="1">累加</option>
      <option value="2">累减</option>
      <option value="3">延时累加</option>
    </select>
    &nbsp;
    <input
      type="number"
      v-model.number="$store.state.num"
      placeholder="请输入数值"
    />
    <br /><br />

    <button @click="addnum">+</button>
    &nbsp;
    <button @click="reduce">-</button>
    &nbsp;
    <p>
        {{$store.getters.bigNum}}
    </p>
  </div>
</template>

<script>
export default {
  name: "Mycount",
  data() {
    return {
      chosenum: 1,
    };
  },
  methods: {
    addnum() {
        this.$store.dispatch('jia',this.chosenum)
        this.setimesum();
    },
    reduce() {
        // this.$store.dispatch('jian',this.chosenum)
        // 此处action没有逻辑的情况下可以直接跳过action，使用commit
        this.$store.commit('JIAN', this.chosenum)
    },
    setimesum() {
        this.$store.dispatch('jiawait',this.chosenum)
    },
  },
};
</script>

<style>
/* 
1.state创建数据
2.dispatch传方法与值：通过dispatch()方法 将数据传到store中 
dispatch(方法名,要操作的数据);
dispatch方法在this的store身上
3.action 响应动作（响应方法）
actiond对象的响应方法中有两个参数，分别是context(微型store)和要操作的数据value.
context中可以得到state中的数据;
4.使用context中的 commit 传给mutations去操作数据
context(方法名,要操作的数据),方法名一般大写;
5.mutations响应方法
两个参数,分别是state和value
*/
</style>