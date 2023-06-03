import React, { useContext } from 'react'
import Delete from '/icon-cross.svg'
import Check from '/icon-check.svg'


function TodoContainer({ todos, dispatch }) {
  function toggleTodo(id) {
    dispatch({ type: 'TOGGLE', payload: { id: id } });
  }
  function deleteTodo(id) {
    dispatch({ type: 'DELETE', payload: { id: id } });
    }

  return (
    <div className="todos-container">
      <ul className="todos">
        {todos.map((todo) => (
          <li className={todo.complete && 'completed' } key={todo.id}>
            <div onClick={() => toggleTodo(todo.id)} className="circle">
              <img src={Check} alt="" />
            </div>
            <p className="text">{todo.name}</p>
            <button onClick={()=> deleteTodo(todo.id)} className="delete">
              <img src={Delete} alt="" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoContainer;