import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header'
import NavBar from '../components/Navbar'
import { AddCollectionStyle } from '../components/styles/AddCollection.styled'
import { AddBtnStyle } from '../components/styles/AddBtn.styled'
import { InputStyle } from '../components/styles/Input.styled'

const AddCollection = () => {

  const [inputValue, setInputValue] = useState('');
  const [canRedirect, setCanRedirect] = useState(false);

  const handleChange = (e) => setInputValue(e.target.value);

  const handlePostRequest = () => {
    // console.log(inputValue);
    axios.post('http://localhost:3001/addNewCollection', { key: inputValue })
      .then(response => {
        // console.log(response.data);
      })
      .catch(error => {
        console.error("Error posting data:", error);
      });

      inputValue && setCanRedirect(true);
  };

  return (
    <div>
      <Header /> 
      <NavBar />
      <AddCollectionStyle>
      <InputStyle
          type='text'
          placeholder='Enter Collection Category'
          value={inputValue}
          onChange={handleChange}
        />
        <AddBtnStyle onClick={handlePostRequest}>Add</AddBtnStyle>
      </AddCollectionStyle>
      {canRedirect && <Redirect to="/" />}
    </div>
    
  )
}

export default AddCollection