export function addTodo (text) {
  return {type: 'ADD_TODO', text}
}

export function addTodoSaga (text) {
  return {type: 'ADD_TODO_SAGA', text}
}

export function toggleTodo (index) {
  return {type: 'TOGGLE_TODO', index}
}
