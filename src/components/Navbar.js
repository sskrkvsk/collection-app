import React, { useState } from 'react'
import { SvgContainer } from './styles/SvgContainer';
import { NavbarStyle } from './styles/Navbar.styled';
import Menu from './Menu'

const NavBar = () => {

  const [menuBtn, setMenuBtn] = useState(true);

  function handleClick() {
    menuBtn ? setMenuBtn(false) : setMenuBtn(true);
  }

  return (
    <NavbarStyle>
    <SvgContainer><img src='/images/menu_black_24dp.svg' onClick={handleClick} alt='menu'/></SvgContainer>
      {menuBtn && <Menu />}
    </NavbarStyle>
  )
}

export default NavBar;