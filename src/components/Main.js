import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { tableNames } from '../services/test'
import AddBtn from './AddBtn'
import { MainStyle } from './styles/Main.styled'

const Main = () => {

  const [tableNames, setTableNames] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/getTableNames')
    .then(response => {
      setTableNames(response.data.tableNames);
    })
    .catch(error => {
      console.error('Error fetching table names:', error);
    });
  }, [tableNames]);

  

  return (
    <MainStyle>
        {tableNames.map((table, index) => <div key={index}><input type="hidden" name='tableName' value={{table}}></input> <Link to={`/${table}`}><button>{table}</button></Link></div>)}
        <Link to='/addcollection'><AddBtn value="Add Custom" /></Link>
    </MainStyle>
  )
}

export default Main