import React, { useState } from 'react'
import { SearchStyle }  from './styles/Header.styled'
import { SvgContainer } from './styles/SvgContainer'

function Search() {
    const [searchClicked, setSearchClicked] = useState(true);


    function handleClick() {
        setSearchClicked(false);
        console.log("serch hidden");
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