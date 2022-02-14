import React from 'react';
import "./style/css/style.css";
import Home from './views/Home';
import List from './views/TodoList';
import { HOME, TODO } from './assets/svg/icons';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

const App = () => {
  return ( 
    <React.Fragment>
      <BrowserRouter>
        <div className='navbar'>
          <NavLink className='link' to="/"><HOME/> Home</NavLink>
          <NavLink className='link' to="/list"> <TODO/>To-Do List</NavLink>
        </div>
        <div className='todo'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/list" element={<List />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
   );
}
 
export default App;