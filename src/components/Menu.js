import React from 'react'
import { Link } from 'react-router-dom';
import { MenuStyle } from './styles/Menu.styled';

const Menu = () => {
  return (
    <MenuStyle>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/additem">Add item</Link></li>
        <li><Link to="/some-route">Random</Link></li>
        <li><Link to="/some-route">User</Link></li>
    </MenuStyle>
  )
}

export default Menu