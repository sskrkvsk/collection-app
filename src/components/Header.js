import React from 'react'
import Logo from './Logo'
import Search from './Search'
import { HeaderStyle }  from './styles/Header.styled'

 const Header = ({tableName, handleSearch}) => {

  console.log(tableName);

  return (
    <HeaderStyle>
      <Logo category={tableName} />
      {tableName && <Search category={tableName} searchFunction={handleSearch}/>}
    </HeaderStyle>
  )
}

export default Header;