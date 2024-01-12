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
    axios.get('/getTableNames')
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
    axios.post('/editCategory', { editedName: newName, oldName :editableTable })
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
    axios.post('/deleteCategory', {category :tableName}).then(response => {
    })
    .catch(error => {
      console.error("Error posting data:", error);
    });
  }




  return (
    <MainStyle>
    <section >
      {tableNames.map((table, index) => (
          <div key={index}>

            {editableTable === table ? (
              <input autoFocus="true" type="text" onChange={handleChange} value={newName} />
            ) : (
              <Link to={`/${table}`}>
                {table}
              </Link>
            )}
            {!listOfNames.includes(table) ? (
              <nav>
                {editableTable === table ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(table)}><img src='/images/edit.svg' alt=''></img></button>
                )}
                <button onClick={() => handleDelete(table)}><img src='/images/delete.svg' alt=''></img></button>
              </nav>
            ) : <p>p</p>}
          </div>
          
      ))}
      </section>
      <Link to='/addcollection'><AddBtn value="Add Custom" /></Link>
    </MainStyle>
  )
}

export default Main