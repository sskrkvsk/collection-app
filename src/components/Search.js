import React, { useState } from 'react'
import { SearchStyle }  from './styles/Header.styled'
import { SvgContainer } from './styles/SvgContainer'

const Search = () => {
    // Show input
    const [searchClicked, setSearchClicked] = useState(true);
    function handleClick() {
        setSearchClicked(false);
    }


  return (
    <SearchStyle>

        {searchClicked ? <SvgContainer><img onClick={handleClick} src='/images/search_black_24dp.svg' alt='search button'/> </SvgContainer> :
        <div>
            <input
                type="text" 
            />
            <button>Search</button>
        </div>}
        
        
    </SearchStyle>
  )
}

export default Search