<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span :class="textres" v-show="!todo.isEdit">{{ todo.tdTitle }}</span>
      <input
        type="text"
        :value="todo.tdTitle"
        v-show="todo.isEdit"
        @blur="editBlur(todo, $event)"
        ref="autofour"
      />
    </label>

    <button
      class="btn btn-danger"
      style="display: none"
      @click="deleteTodo(todo.id)"
    >
      删除
    </button>
    <button class="btn btn-edit" style="display: none" @click="editTodo(todo)">
      编辑
    </button>
  </li>
</template>

<script>

export default {
  name: "TodoItem",
  props: ["todo"],
  data() {
    return {
      textTh: "textTh",
    };
  },
  methods: {
    handleCheck(id) {
      // console.log(id);
      //通知根组件取反
      this.$bus.$emit("todoC", id);
    },
    deleteTodo(id) {
      this.bootbox.confirm({
        message:
          "This is a confirm with custom button text and color! Do you like it?",
        buttons: {
          confirm: {
            label: "Yes",
            className: "btn-success",
          },
          cancel: {
            label: "No",
            className: "btn-danger",
          },
        },
        callback: function () {
          this.$bus.$emit("deleteT", id);
        },
      });
      // if (confirm("你确定像删除？")) {
      //   this.$bus.$emit("deleteT", id);
      // }
    },
    editTodo(todo) {
      if ("isEdit" in todo) {
        //判断todo对象是否有isEdit属性hasOwnProperty('isEdit')
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true); //给todo添加isEdit确定数据为编辑状态
      }
      // 方法1
      // setTimeout(() => {
      //   this.$refs.autofour.focus();
      // });
      // 方法2
      //$nextTick指定的节点会在dom更新之后执行
      this.$nextTick(() => {
        this.$refs.autofour.focus();
      });
    },
    editBlur(todo, e) {
      todo.isEdit = false;
      if (e.target.value.trim().length > 0) {
        this.$bus.$emit("updataTodo", todo.id, e.target.value);
      } else {
        alert("数据不能为空");
      }
    },
  },
  computed: {
    textres() {
      return this.todo.done == true ? "textTh" : "";
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:hover > button {
  display: block !important;
}
li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
.textTh {
  text-decoration: line-through;
}
</style>