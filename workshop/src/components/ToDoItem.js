import React from 'react'
import './styles/ToDoItem.css'

const ToDoItem = ({text, checked, toggleCheck, id}) => (
  <li className="ToDoItem">
    <input type="checkbox" checked={checked} onChange={() => toggleCheck(id)} />
    <span>{text}</span>
  </li>
)

export default ToDoItem