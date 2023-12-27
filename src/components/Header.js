import React from 'react'
import Logo from './Logo'
import Search from './Search'
import { HeaderStyle }  from './styles/Header.styled'

 const Header = () => {
  return (
    
    <HeaderStyle>
      <Logo />
      <Search />
    </HeaderStyle>
  )
}

export default Header;