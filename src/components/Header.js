import React, { useState } from 'react'
import Logo from './Logo'
import Search from './Search'
import { HeaderStyle }  from './styles/Header.styled'

const Header = ({ tableName, tableData, clickFunction }) => {
  const [searchClicked, setSearchClicked] = useState(true);
    function handleClick() {
        setSearchClicked(false);
    }

  return (
    <HeaderStyle>
      <Logo category={tableName} searchClicked={searchClicked} />
      {tableName && <Search category={tableName} tableData={tableData} handleSearch={clickFunction} searchClicked={searchClicked} handleClick={handleClick} />}
    </HeaderStyle>
  )
}

export default Header;