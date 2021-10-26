import React from 'react';
import './TodoItem.css';
import { FaCheck } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';

function TodoItem(props) {
  
  const onDelete = () => {
    alert('Borraste el ToDo '+`"`+props.text+`"`)
  }

  return (
    <li className="TodoItem">
      <span 
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >
      <FaCheck />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`} >
        {props.text}
      </p>
      <span 
      className="Icon Icon-delete" onClick={() => console.log('Borrado')}
      onClick={props.onDelete}
      >
        <RiDeleteBin6Fill />
      </span>
    </li>
  );
}

export { TodoItem };