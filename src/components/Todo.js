import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text, index, onEditToDo, onDeleteToDo }) => (
  <li
    className='item'
    data-index={index}
  >
    <button className='btn-del' onClick={(e) => {
      let index = e.currentTarget.parentNode.getAttribute('data-index');
      onDeleteToDo(index);
    }}>del</button>

    <button className={`btn-readiness ${completed && 'done'}`} onClick={onClick}>
    {completed ? 'done' : 'toDo'}
    </button>

    <button onClick={(e) => {
        e.preventDefault();

      if (e.currentTarget.nextSibling.getAttribute('contentEditable')) {
        e.currentTarget.nextSibling.removeAttribute('contentEditable');
        e.currentTarget.parentNode.classList.remove('edit');

        let index = e.currentTarget.parentNode.getAttribute('data-index');
        let elem = e.currentTarget.nextSibling;

        setTimeout(()=>{
          let innerText = elem.innerHTML;
          onEditToDo(index, innerText);

        }, 0);

      } else {
        e.currentTarget.nextSibling.setAttribute('contentEditable', 'true');
        e.currentTarget.parentNode.classList.add('edit');
      }

    }}>edit</button>

    <div className={'item-text'}>{text}</div>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired
};

export default Todo