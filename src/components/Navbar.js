import React, { useState } from 'react'
import { SvgContainer } from './styles/SvgContainer';
import { NavbarStyle } from './styles/Navbar.styled';
import Menu from './Menu'

const NavBar = () => {

  const [menuBtn, setMenuBtn] = useState(false);



  return (
    <NavbarStyle>
      {menuBtn ? <SvgContainer><img src='/images/menu_black_24dp.svg' alt='menu'/></SvgContainer> : <Menu />}
    </NavbarStyle>
  )
}

export default NavBar;