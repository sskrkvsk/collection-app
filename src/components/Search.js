import React, { useState } from 'react'
import { SearchStyle }  from './styles/Header.styled'
import { InputStyle } from './styles/Input.styled'

const Search = ({ tableData, handleSearch, searchClicked, handleClick }) => {
    
    const [inputValue, setInputValue] = useState();
    const handleChange = (event) => {
        const {value} = event.target;
        setInputValue(value);
       }

  return (
    <SearchStyle>
        {searchClicked ? <span onClick={handleClick}><img src='/images/search.svg' alt=''></img></span> :
        <div>
            <InputStyle
                type="text"
                onChange={handleChange}
                value={inputValue}
            />
            {inputValue ? <button onClick={() => handleSearch(tableData, inputValue)}><img src='/images/search.svg' alt=''></img></button> : <button><img src='/images/search.svg' alt=''></img></button>}
            
        </div>}
    </SearchStyle>
  )
}

export default Search