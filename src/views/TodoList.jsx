import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE, LOADING } from '../assets/svg/icons';
import Pagination from './components/pagination';
import { toggleStatus, deleteTodo } from '../redux/todoSlice';
import Add from './components/AddTodo';

const List = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.todos);

  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(12);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return ( 
    <React.Fragment>
      <div className="list">
        <Add />
        {currentTodos.map((todo, index) => {
          return (
            <div className="items" key={index}>
              <div className="title">
                <label className={todo.completed === true ? "btn done" : "btn wait"} htmlFor={`${todo.id}`}>
                  <span className='span1'></span>
                  <span className='span2'></span>
                  <span className='span3'></span>
                  <span className='span4'></span>
                  <input 
                  onChange={() => dispatch(toggleStatus(todo.id))}
                  type="checkbox" checked={todo.completed} id={`${todo.id}`} />
                </label>
                <p className={todo.completed === true ? "completed" : ""}>{todo.title}</p>
              </div>
              <div className="buttons">
                <button onClick={() => dispatch(deleteTodo(todo.id))}><DELETE/></button>
              </div>
            </div>
          )
        })}
        {todos.length === 0 ? <LOADING/> : null}
        <Pagination
          todosPerPage={todosPerPage}
          currentPage={currentPage}
          totalPosts={todos.length}
          paginate={paginate}
        />
      </div>
    </React.Fragment>
   );
}
 
export default List;