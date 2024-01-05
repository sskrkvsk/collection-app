import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { SearchStyle }  from './styles/Header.styled'
import { SvgContainer } from './styles/SvgContainer'

const Search = ({category, tableData, handleSearch, path}) => {
  const history = useHistory();

    // Show input
    const [searchClicked, setSearchClicked] = useState(true);
    function handleClick() {
        setSearchClicked(false);
    }

    //Change
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
            <button onClick={() => handleSearch(tableData, inputValue)}></button>
            
        </div>}
        
        
    </SearchStyle>
  )
}

export default Search