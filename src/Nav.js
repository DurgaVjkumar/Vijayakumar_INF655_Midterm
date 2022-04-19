import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
 const Nav = () => {
  return (
    <nav className='Nav'>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/about">About</Link> </li>
          <li> <Link to="/login">Login</Link> </li>
          <li> <Link to="/tasklist">Task List</Link> </li>

        </ul>
    </nav>
  )
}
export default Nav