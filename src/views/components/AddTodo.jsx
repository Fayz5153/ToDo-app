import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOADING } from '../../assets/svg/icons';
import { addNewTodo, fetchTodos } from '../../redux/todoSlice';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const [text, setText] = useState('');
  const [loading , setLoading] = useState(false)

  const handleAction = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate("../list", { replace: true });
    }, 1000);
    if(text.trim().length) {
      dispatch(addNewTodo(text));
      setText('');
    }
  }

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  
  return ( 
    <React.Fragment>
      {loading ? <LOADING/> : 
        <div className="add">
          <input 
            onChange={(e) => setText(e.target.value)}
            type="text" value={text}/>
          <button onClick={handleAction}>+</button>
        </div>
      }
    </React.Fragment>
   );
}
 
export default Add;