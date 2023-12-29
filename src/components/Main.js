import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import { tableNames } from '../services/test'
import AddBtn from './AddBtn'
import { MainStyle } from './styles/Main.styled'

const Main = () => {

  const [tableNames, setTableNames] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/getTableNames')
    .then(response => {
      console.log(response.data.tableNames);
      setTableNames(response.data.tableNames);
    })
    .catch(error => {
      console.error('Error fetching table names:', error);
    });
  }, []);

  return (
    <MainStyle>
        {tableNames.map((table, index) => <div key={index}><input type="hidden" name='tableName' value={{table}}></input><button>{table}</button></div>)}
        <AddBtn value="Add Custom" />
    </MainStyle>
  )
}

export default Main