import React from 'react'
import './TaskItem.css'
import {FaTrashAlt} from 'react-icons/fa'

export const TaskItem = (props) => {

  return (
    <li className="card">
      <input
          className='check'
          type="checkbox"
          checked={props.checked}
          onChange={() => props.checkboxHandler(props.id)} //passing argument to 'checkboxHandler' from 'Tasks' component
          
      />
        <h2 style={(props.checked) ? { textDecoration: 'line-through' } : null}>
          { props.title }
        </h2>

        <div style={(props.checked) ? { textDecoration: 'line-through' } : null}>
          { props.description }
        </div>

        <button 
           onClick={()=>props.deleteHandler(props.id)} //using an arrow function to pass argument
          className='delete'
        >
          <FaTrashAlt></FaTrashAlt>
        </button>
    </li>
  )
}
