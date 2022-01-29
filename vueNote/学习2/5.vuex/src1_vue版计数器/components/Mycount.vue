<template>
  <div>
    <!-- 当数为1时累加，当数为2时累减，当数为3时延时3秒累加 -->
    <select v-model.number="chosenum">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    &nbsp;
    <input
      type="number"
      v-model.number="num"
      placeholder="请输入数值"
    /><br /><br />
    <span>{{ means }}    &nbsp;</span>

    <button @click="addnum">+</button>
    &nbsp;
    <button @click="reduce">-</button>
  </div>
</template>

<script>
export default {
  name: "Mycount",
  data() {
    return {
      chosenum: 1,
      num: 0,
    };
  },
  computed: {
    means() {
      if (this.chosenum === 1) {
        return "累加";
      }
      if (this.chosenum === 2) {
        return "累减";
      }
      if (this.chosenum === 3) {
        return "延时累加";
      }
    },
  },
  methods: {
    addnum() {
      if (this.chosenum === 1) {
        this.num++;
      }
      this.setimesum();
    },
    reduce() {
      if (this.chosenum === 2) {
        this.num--;
      }
    },
    setimesum() {
      setTimeout(() => {
        if (this.chosenum === 3) {
          return this.num++;
        }
      }, 500);
    },
  },
};
</script>

<style>
</style>