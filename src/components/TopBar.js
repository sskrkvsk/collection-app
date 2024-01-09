import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TopBarStyle } from './styles/TopBar.styled';

const TopBar = ({ sorting, setSorting, toggleGrid, tableName, sortingFunction, tableData }) => {
  const history = useHistory();
  function handleClick() {
    sorting ? setSorting(false) : setSorting(true);
  }
  const newTableData = tableData.map((table) => {
    return table.title
  })
  const handleRandom = () => {
    const randomValue = Math.floor(Math.random() * newTableData.length);
    const trimmedTitle = encodeURIComponent(newTableData[randomValue].trim()).toLowerCase();
    history.push(`/${tableName}/${trimmedTitle}`);
  }

  return (
    <TopBarStyle>
      <nav>
        <Link to="/home"><img src='/images/home.svg' alt=''></img></Link>
        <Link to={`/additem?category=${tableName}`}><img src='/images/add.svg' alt=''></img></Link>
        <p onClick={handleRandom}><img src='/images/shuffle.svg' alt=''></img></p>
      </nav>
      <div>
        <button onClick={toggleGrid}><img src='/images/grid.svg' alt=''></img></button>
        <button onClick={handleClick}><img src='/images/sort.svg' alt=''></img></button>
        {sorting &&
        <span>
          <button onClick={() => sortingFunction("date")}>Date</button>
          <button onClick={() => sortingFunction("rating")}>Rating</button>
        </span>}
        </div>
    </TopBarStyle>
  )
}

export default TopBar