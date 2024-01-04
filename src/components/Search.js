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

      //  const handleSearchAndNavigate = async (data, input) => {
      //   try {
      //     // Perform your asynchronous operation, e.g., sending data
      //     const result = await sendSearchData(data, input);
    
      //     // Extract the path from the result or use some logic
      //     const path = extractPathFromResult(result);
    
      //     // Navigate to the desired path
      //     history.push(path);
      //   } catch (error) {
      //     console.error('Error:', error);
      //     // Handle errors as needed
      //   }
      // };



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