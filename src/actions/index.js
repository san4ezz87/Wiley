const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

let nextTodoId = persistedState.todos ? persistedState.todos.length : 0;
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};

export const sortTodo = () => {
  return {
    type: 'SORT_TODO'
  }
};

export const editTodo = (index, text) => {
  return {
    type: 'EDIT_TODO',
    index: index,
    text: text
  }
};

export const deleteTodo = (index) => {
  return {
    type: 'DELETE_TODO',
    index: index
  }
};