import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { tableNames } from '../services/test'
import AddBtn from './AddBtn'
import { MainStyle } from './styles/Main.styled'

const Main = () => {
  const [editableTable, setEditableTable] = useState(null);
  const [tableNames, setTableNames] = useState([]);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    axios.get('http://localhost:3001/getTableNames')
    .then(response => {
      setTableNames(response.data.tableNames);
    })
    .catch(error => {
      console.error('Error fetching table names:', error);
    });
  }, [tableNames]);

  function handleChange(event) {
    setNewName(event.target.value);
  }

  function handleEdit(table) {
    setEditableTable(table);
    setNewName(table);
  }

  // EDIT CATEGORY - send old and new name
  function handleSave() {
    axios.post('http://localhost:3001/editCategory', { editedName: newName, oldName :editableTable })
      .then(response => {
        // console.log(response.data);
      })
      .catch(error => {
        console.error("Error posting data:", error);
      });

    setEditableTable(null); // Reset editableTable after saving
  }
  

  return (
    <MainStyle>
      {tableNames.map((table, index) => (
        <div key={index}>
          <section>
            {editableTable === table ? (
              <input type="text" onChange={handleChange} value={newName} />
            ) : (
              <Link to={`/${table}`}>
                <button>{table}</button>
              </Link>
            )}
            <div>
              {editableTable === table ? (
                <button onClick={handleSave}>Save</button>
              ) : (
                <button onClick={() => handleEdit(table)}>Edit</button>
              )}
              <button>Delete</button>
            </div>
          </section>
        </div>
      ))}
      <Link to='/addcollection'><AddBtn value="Add Custom" /></Link>
    </MainStyle>
  )
}

export default Main