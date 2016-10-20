
const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state
  }
};

const todos = (state = [], action) => {

  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
          todo(t, action)
      );
    case 'SORT_TODO':
      return [...sortObj(state)];

    case 'EDIT_TODO':
      return state.map((item, index )=> {
          if (index === +action.index) {

            let obj = {text:  action.text};
            item = Object.assign({}, item,  obj);
          }

          return item;
        });

    case 'DELETE_TODO':
      return state.filter((item, index )=> {
        if(index !== +action.index) {
          return item;
        }

      });

    default:
      return state
  }
};


function sortObj(state) {

  var byName = state.slice();

  byName.reverse();
  return byName;
}




export default todos;