import React, { useEffect, useReducer, useState , createContext, useContext} from 'react';
import TodoContainer from './TodoContainer'

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        newTodo(action.payload.name)
      ];
      break ;
      case 'TOGGLE' :
        return state.map(todo => {
          if (todo.id === action.payload.id) {
            return {  
              ...todo, 
              complete:!todo.complete
            }
          }
        }
        

        )
    // default:
    //   return state;
    break ;
    case 'DELETE' :
      return state.filter(todo => todo.id!== action.payload.id)
      break ;
  }
}

function newTodo(name) {
  return {
    name: name,
    complete: false,
    id: Date.now()
  };
}

function TodoForm() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  function handleForm(e) {
    setName(e.target.value);
  }

  function handleSubmission(e) {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: { name: name } });
    setName('');
  }

  return (
    <>
      <form onSubmit={handleSubmission}>
        <span className="circle"></span>
        <input
          type="text"
          placeholder='Start your Todos'
          onChange={handleForm}
          value={name}
        />
      </form>
        <TodoContainer todos={todos} dispatch={dispatch}/>
    </>
  );
}

export default TodoForm;

