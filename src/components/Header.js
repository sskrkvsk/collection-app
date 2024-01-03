import React from 'react'
import Logo from './Logo'
import Search from './Search'
import { HeaderStyle }  from './styles/Header.styled'

const Header = ({ tableName }) => {

  return (
    <HeaderStyle>
      <Logo category={tableName} />
      {tableName && <Search />}
    </HeaderStyle>
  )
}

export default Header;