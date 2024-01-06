import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { TopBartyle } from './styles/TopBar.styled';

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
    <TopBartyle>
        <li><Link to="/home">Home</Link></li>
        <li><Link to={`/additem?category=${tableName}`}>Add item</Link></li>
        <li onClick={handleRandom}>Random</li>
        <div>
          <button onClick={toggleGrid}>Grid</button>
          <button onClick={handleClick}>Sort</button>
          {sorting &&
          <span>
            <button onClick={() => sortingFunction("date")}>Date</button>
            <button onClick={() => sortingFunction("rating")}>Rating</button>
          </span>}
        </div>
    </TopBartyle>
  )
}

export default TopBar