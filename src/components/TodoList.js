import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick, onEditToDo, onDeleteToDo }) => (

  <ul className='list'>
    {todos.map((todo, index) =>
        <Todo
        key={index}
        index={index}
        {...todo}
        onEditToDo={onEditToDo}
        onDeleteToDo={onDeleteToDo}
        onClick={() => onTodoClick(todo.id)}
        />
    )}
  </ul>
);

export default TodoList