import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddBtn from './AddBtn'
import { MainStyle } from './styles/Main.styled'

const Main = () => {
  const listOfNames = ["Anime", "Books", "Movies", "Series"];
  // tables
  const [tableNames, setTableNames] = useState([]);
  // curent table name
  const [editableTable, setEditableTable] = useState(null);
  // new table name
  const [newName, setNewName] = useState("");

  // get table names
  useEffect(() => {
    axios.get('http://localhost:3001/getTableNames')
    .then(response => {
      setTableNames(response.data.tableNames);
    })
    .catch(error => {
      console.error('Error fetching table names:', error);
    });
  }, [tableNames]);

  // Actual editing value
  function handleChange(event) {
    setNewName(event.target.value);
  }
  // Previous table value = curent state value
  function handleEdit(table) {
    // console.log(table);
    setEditableTable(table);
    setNewName(table);
  }

  // EDIT CATEGORY - send old and new names
  function handleSave() {
  // just return previous value without sending data
    if (editableTable === newName) {
      setEditableTable(null);
    } else {
    axios.post('http://localhost:3001/editCategory', { editedName: newName, oldName :editableTable })
      .then(response => {
        // console.log(response.data);
      })
      .catch(error => {
        console.error("Error posting data:", error);
      });

    setEditableTable(null); // Reset editableTable after saving
  }
}

  // DELETE Category
  function handleDelete(tableName) {
    axios.post('http://localhost:3001/deleteCategory', {category :tableName}).then(response => {
      // console.log(response.data);
    })
    .catch(error => {
      console.error("Error posting data:", error);
    });
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
            {!listOfNames.includes(table) && (
              <>
                {editableTable === table ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(table)}>Edit</button>
                )}
                <button onClick={() => handleDelete(table)}>Delete</button>
              </>
)}
            </div>
          </section>
        </div>
      ))}
      <Link to='/addcollection'><AddBtn value="Add Custom" /></Link>
    </MainStyle>
  )
}

export default Main