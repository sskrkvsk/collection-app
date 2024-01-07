import React, { useState } from 'react'
import { SearchStyle }  from './styles/Header.styled'
import { SvgContainer } from './styles/SvgContainer'

const Search = ({ tableData, handleSearch }) => {
    const [searchClicked, setSearchClicked] = useState(true);
    function handleClick() {
        setSearchClicked(false);
    }
    const [inputValue, setInputValue] = useState();
    const handleChange = (event) => {
        const {value} = event.target;
        setInputValue(value);
       }

  return (
    <SearchStyle>
        {searchClicked ? <SvgContainer><img onClick={handleClick} src='/images/search_black_24dp.svg' alt='search button'/> </SvgContainer> :
        <div>
            <input
                type="text"
                onChange={handleChange}
                value={inputValue}
            />
            {inputValue ? <button onClick={() => handleSearch(tableData, inputValue)}></button> : <button></button>}
            
        </div>}
    </SearchStyle>
  )
}

export default Search