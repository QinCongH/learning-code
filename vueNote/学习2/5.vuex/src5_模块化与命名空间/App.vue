<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header @addtodo="addtodo" />
        <todo-list :todos="todos"/>
        <todo-footer
          :todos="todos"
          @cheakAlltodo="cheakAlltodo"
          @clearAllTodo="clearAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  name: "App",
  data() {
    return {
      todos:JSON.parse(localStorage.getItem('todos'))||[]  //读数据,考虑todos为空的情况
    };
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  methods: {
    // 添加
    addtodo(v) {
      // console.log(v);
      this.todos.unshift(v);
    },
    //勾选or取消一个todo
    todoC(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    //处理数据删除
    deleteT(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id; //过滤条件
      });
    },
    //全选or全不选
    cheakAlltodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    //清除已经完成的todo.（将所有为真的取反）
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
    //编辑
    updataTodo(id,value){
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.tdTitle = value;
      });
    }
  },
  watch:{
    todos:{
      handler(newVal){
         localStorage.setItem('todos',JSON.stringify(newVal))// 存数据
      },
      deep:true  //开启深度监视
    }
  },
  mounted(){
    this.$bus.$on('deleteT',this.deleteT)
    this.$bus.$on('todoC',this.todoC)
    this.$bus.$on('updataTodo',this.updataTodo)
  }
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: #49c4da;
  border: 1px solid #49c4da;
  margin-right:10px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-edit:hover {
  color: #fff;
  background-color: #49c4da;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
