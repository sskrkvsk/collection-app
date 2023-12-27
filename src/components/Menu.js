import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul>
        <li><Link to="/some-route">Home</Link></li>
        <li><Link to="/some-route">Add item</Link></li>
        <li><Link to="/some-route">Random</Link></li>
        <li><Link to="/some-route">User</Link></li>
    </ul>
  )
}

export default Menu