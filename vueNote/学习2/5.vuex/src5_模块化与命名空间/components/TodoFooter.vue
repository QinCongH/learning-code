<template>
  <div class="todo-footer" v-show="todos.length!=0">
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="clearTodo">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  data() {
    return {};
  },
  props: ["todos"],
  computed: {
    doneTotal() {
      return this.todos.reduce((pre, current) => {
        // console.log(current.done);
        return pre + (current.done ? 1 : 0);
      }, 0);
      // return this.todos.length
    },
    isAll: {
      get() {
        // console.log(this.doneTotal);
        return this.doneTotal === this.todos.length && this.doneTotal > 0;
      },
      set(value) {
        // console.log(value);
        return this.$emit('cheakAlltodo',value)
      },
    },
  },
  methods:{
    clearTodo(){
      this.$emit('clearAllTodo')
    }
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>