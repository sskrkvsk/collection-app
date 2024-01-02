import React from 'react'
import { Link } from 'react-router-dom';
import { TopBartyle } from './styles/TopBar.styled';

const TopBar = ({ sorting, setSorting, toggleGrid, tableName }) => {

  function handleClick() {
    sorting ? setSorting(false) : setSorting(true);
    
  }

  return (
    <TopBartyle>
        <li><Link to="/">Home</Link></li>
        <li><Link to={`/additem?category=${tableName}`}>Add item</Link></li>
        <li><Link to="/some-route">Random</Link></li>
        <li><Link to="/some-route">User</Link></li>
        <div>
          <button onClick={toggleGrid}>Grid</button>
          <button onClick={handleClick}>Sort</button>
          {sorting &&
          <span>
            <button>Date</button>
            <button>Rating</button>
          </span>}
        </div>
        
    </TopBartyle>
  )
}

export default TopBar