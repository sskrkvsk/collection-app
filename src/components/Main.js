import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddBtn from './AddBtn'
import { MainStyle } from './styles/Main.styled'

const Main = () => {
  const listOfNames = ["Anime", "Books", "Movies", "Series"];
  const [tableNames, setTableNames] = useState([]);
  const [editableTable, setEditableTable] = useState(null);
  const [newName, setNewName] = useState("");
  const [deleteStatus, setDeleteStatus] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/getTableNames')
    .then(response => {
      setTableNames(response.data.finalArray);
      setDeleteStatus(false);
    })
    .catch(error => {
      console.error('Error fetching table names:', error);
    });
  }, [editableTable, deleteStatus]);

  function handleChange(event) {
    setNewName(event.target.value);
  }
  function handleEdit(table) {
    setEditableTable(table);
    setNewName(table);
  }

  function handleSave() {
    if (editableTable === newName) {
      setEditableTable(null);
    } else {
    axios.post('http://localhost:3001/editCategory', { editedName: newName, oldName :editableTable })
      .then(response => {
      })
      .catch(error => {
        console.error("Error posting data:", error);
      });
    setEditableTable(null);
  }
}

  function handleDelete(tableName) {
    setDeleteStatus(true);
    axios.post('http://localhost:3001/deleteCategory', {category :tableName}).then(response => {
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