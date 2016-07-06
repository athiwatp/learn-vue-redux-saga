<template>
  <div>
    <input type="text" v-model="todo">
    <button @click="addTodo">Add</button>
    <button @click="addTodoSaga">Add(Saga)</button>
    <hr>
    <ul>
      <li v-for="todo in todos" @click="toggleTodo($index)">{{todo.text}} {{todo.completed}}</li>
    </ul>
  </div>
</template>

<script>
import store from '../redux/store'
import * as actions from '../redux/actions'

export default {
  data () {
    return {
      todo: '',
      todos: this.$select('todos')
    }
  },
  methods: {
    addTodo () {
      store.dispatch(actions.addTodo(this.todo))
    },
    addTodoSaga () {
      store.dispatch(actions.addTodoSaga(this.todo))
    },
    toggleTodo (index) {
      store.dispatch(actions.toggleTodo(index))
    }
  }
}
</script>

<style>
</style>
