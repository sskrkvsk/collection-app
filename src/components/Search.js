import React, { useState } from 'react'
import { SearchStyle }  from './styles/Header.styled'
import { SvgContainer } from './styles/SvgContainer'

function Search({category, searchFunction}) {
    // Show input
    const [searchClicked, setSearchClicked] = useState(true);
    function handleClick() {
        setSearchClicked(false);
    }

    // axios.get(`http://localhost:3001/getItemData/${category}/${itemTitle}`)
    //  .then(response => {
    //   //  console.log(response.data.itemData); // [{…}]
    //    setItemData(response.data.itemData[0]);
    //  })
    //  .catch(error => {
    //    console.error(`Error fetching data for table ${category}:`, error);
    //  });

  return (
    <SearchStyle>

        {searchClicked ? <SvgContainer><img onClick={handleClick} src='/images/search_black_24dp.svg' alt='search button'/> </SvgContainer> :
        <div>
            <input
                type="text" 
            />
            <button onClick={() => searchFunction("something")}>Search</button>
        </div>}
        
        
    </SearchStyle>
  )
}

export default Search