import React from 'react'
import Logo from './Logo'
import Search from './Search'
import { HeaderStyle }  from './styles/Header.styled'

const Header = ({ tableName, tableData, clickFunction, path }) => {

  return (
    <HeaderStyle>
      <Logo category={tableName} />
      {tableName && <Search category={tableName} tableData={tableData} handleSearch={clickFunction} path={path} />}
    </HeaderStyle>
  )
}

export default Header;